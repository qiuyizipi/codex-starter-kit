#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const HOME = os.homedir();
const CODEX_SKILLS = path.join(HOME, '.codex', 'skills');
const GEMINI_SKILLS = path.join(HOME, '.gemini', 'config', 'skills');
const AGENTS_SKILLS = path.join(HOME, '.agents', 'skills');
const PLUGINS_DIR = path.join(__dirname, '..', 'plugins');

const IGNORE_NAMES = new Set(['.git', '__pycache__', 'node_modules', '.DS_Store', 'Thumbs.db']);
const SECRET_NAMES = new Set(['.env', '.env.local']);

function listSkills(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter(name => name !== '.system' && !name.startsWith('.'))
    .filter(name => fs.statSync(path.join(dir, name)).isDirectory())
    .sort();
}

function hashDir(dir, includeSecrets = false) {
  const h = crypto.createHash('md5');
  function walk(d, rel) {
    for (const f of fs.readdirSync(d).sort()) {
      if (IGNORE_NAMES.has(f)) continue;
      if (!includeSecrets && SECRET_NAMES.has(f)) continue;
      const fp = path.join(d, f);
      const rp = rel ? `${rel}/${f}` : f;
      const st = fs.statSync(fp);
      if (st.isDirectory()) walk(fp, rp);
      else {
        const buf = fs.readFileSync(fp);
        h.update(`${rp}:${buf.length}:`);
        h.update(buf);
      }
    }
  }
  walk(dir, '');
  return h.digest('hex').slice(0, 8);
}

function hasFrontmatter(skillDir) {
  const md = path.join(skillDir, 'SKILL.md');
  if (!fs.existsSync(md)) return false;
  const txt = fs.readFileSync(md, 'utf8').replace(/^\uFEFF/, '');
  return /^---\r?\n[\s\S]+?\r?\n---/.test(txt);
}

function copyDir(src, dst, preserveSecrets = true) {
  fs.mkdirSync(dst, { recursive: true });
  for (const name of fs.readdirSync(src)) {
    if (IGNORE_NAMES.has(name)) continue;
    const s = path.join(src, name);
    const d = path.join(dst, name);
    if (preserveSecrets && SECRET_NAMES.has(name) && fs.existsSync(d)) continue;
    const st = fs.statSync(s);
    if (st.isDirectory()) copyDir(s, d, preserveSecrets);
    else fs.copyFileSync(s, d);
  }
}

function cmdStatus() {
  const codex = new Set(listSkills(CODEX_SKILLS));
  const gemini = new Set(listSkills(GEMINI_SKILLS));
  const agents = new Set(listSkills(AGENTS_SKILLS));
  const all = [...new Set([...codex, ...gemini, ...agents])].sort();

  let issues = 0;
  console.log(`Codex (${CODEX_SKILLS}): ${codex.size} skills`);
  console.log(`Antigravity (${GEMINI_SKILLS}): ${gemini.size} skills`);
  console.log(`Agents (${AGENTS_SKILLS}): ${agents.size} skills\n`);

  for (const name of all) {
    const inC = codex.has(name);
    const inG = gemini.has(name);
    const inA = agents.has(name);
    const notes = [];
    if (!inC) notes.push('missing-in-codex');
    if (!inG) notes.push('missing-in-antigravity');
    if (inA) notes.push('extra-in-agents');
    if (inC && !hasFrontmatter(path.join(CODEX_SKILLS, name))) notes.push('codex-no-frontmatter');
    if (inG && !hasFrontmatter(path.join(GEMINI_SKILLS, name))) notes.push('antigravity-no-frontmatter');
    if (inC && inG) {
      const hc = hashDir(path.join(CODEX_SKILLS, name));
      const hg = hashDir(path.join(GEMINI_SKILLS, name));
      if (hc !== hg) notes.push(`diff(${hc} vs ${hg})`);
    }
    if (notes.length > 0) {
      issues++;
      console.log(`  [!] ${name}: ${notes.join(', ')}`);
    }
  }

  if (issues === 0) {
    console.log('[OK] Codex 与 Antigravity 所有 Skill 已完全对齐且元数据完整。');
  } else {
    console.log(`\n共发现 ${issues} 项差异，可运行: node scripts/sync-skills.mjs sync`);
  }
}

function cmdSync(dryRun) {
  if (!fs.existsSync(CODEX_SKILLS)) {
    throw new Error(`未找到 Codex Skill 目录: ${CODEX_SKILLS}`);
  }
  const codexList = listSkills(CODEX_SKILLS);
  let synced = 0;

  for (const name of codexList) {
    const src = path.join(CODEX_SKILLS, name);
    const dst = path.join(GEMINI_SKILLS, name);
    const needSync = !fs.existsSync(dst) || hashDir(src) !== hashDir(dst);
    if (needSync) {
      synced++;
      if (dryRun) {
        console.log(`[dry-run] sync ${name} -> ${dst}`);
      } else {
        copyDir(src, dst, true);
        console.log(`[synced] ${name}`);
      }
    }
  }
  console.log(dryRun ? `\n[dry-run] 预计同步 ${synced} 项。` : `\n完成：共同步 ${synced} 项到 Antigravity。`);
}

function cmdInstallPack(packName, force) {
  const packSkillsDir = path.join(PLUGINS_DIR, packName, 'skills');
  if (!fs.existsSync(packSkillsDir)) {
    const avail = fs.existsSync(PLUGINS_DIR) ? fs.readdirSync(PLUGINS_DIR).join(', ') : 'none';
    throw new Error(`未找到分包 "${packName}"，可用分包: ${avail}`);
  }
  const skills = listSkills(packSkillsDir);
  for (const name of skills) {
    const src = path.join(packSkillsDir, name);
    for (const targetRoot of [CODEX_SKILLS, GEMINI_SKILLS]) {
      if (!fs.existsSync(path.dirname(targetRoot))) continue;
      const dst = path.join(targetRoot, name);
      if (fs.existsSync(dst) && !force) {
        console.log(`[skip] ${dst} 已存在（如需覆盖请加 --force）`);
        continue;
      }
      copyDir(src, dst, true);
      console.log(`[installed] ${name} -> ${dst}`);
    }
  }
}

function main() {
  const args = process.argv.slice(2);
  const cmd = args[0] || 'status';
  const dryRun = args.includes('--dry-run');
  const force = args.includes('--force');

  try {
    if (cmd === 'status') cmdStatus();
    else if (cmd === 'sync') cmdSync(dryRun);
    else if (cmd === 'install-pack' && args[1]) cmdInstallPack(args[1], force);
    else {
      console.log('用法:');
      console.log('  node scripts/sync-skills.mjs status                  # 审计 Codex / Antigravity / .agents 差异');
      console.log('  node scripts/sync-skills.mjs sync [--dry-run]        # 以 ~/.codex/skills 为源同步到 Antigravity');
      console.log('  node scripts/sync-skills.mjs install-pack <包名> [--force]  # 安装仓库内指定分包');
    }
  } catch (err) {
    console.error(`[错误] ${err.message}`);
    process.exit(1);
  }
}

main();
