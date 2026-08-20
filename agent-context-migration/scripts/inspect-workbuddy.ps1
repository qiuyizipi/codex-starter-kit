param(
    [Parameter(Mandatory = $true)]
    [string]$SourceRoot,
    [string]$OutputPath = "migration-inventory.json"
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path -LiteralPath $SourceRoot -PathType Container)) {
    throw "SourceRoot does not exist or is not a directory: $SourceRoot"
}

$sourceResolved = (Resolve-Path -LiteralPath $SourceRoot).Path.TrimEnd('\', '/')

$files = Get-ChildItem -LiteralPath $SourceRoot -File -Recurse |
    Where-Object { $_.Extension -in @('.jsonl', '.md', '.txt') } |
    ForEach-Object {
        $hash = Get-FileHash -LiteralPath $_.FullName -Algorithm SHA256
        $relative = $_.FullName.Substring($sourceResolved.Length).TrimStart('\', '/')
        [ordered]@{
            relative_path = $relative
            bytes = $_.Length
            sha256 = $hash.Hash.ToLowerInvariant()
            extension = $_.Extension
        }
    }

$inventory = [ordered]@{
    generated_at = (Get-Date).ToUniversalTime().ToString('o')
    source_root = $sourceResolved
    file_count = @($files).Count
    files = @($files)
}

$inventory | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath $OutputPath -Encoding UTF8
Write-Output "Wrote $($inventory.file_count) records to $OutputPath"

