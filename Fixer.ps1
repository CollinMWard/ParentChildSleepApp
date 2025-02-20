# Ensure the script is running as Administrator
$adminCheck = [System.Security.Principal.WindowsIdentity]::GetCurrent()
$adminRole = (New-Object System.Security.Principal.WindowsPrincipal $adminCheck).IsInRole([System.Security.Principal.WindowsBuiltInRole]::Administrator)

if (-not $adminRole) {
    Write-Host "Please run this script as Administrator!" -ForegroundColor Red
    exit
}

# Update Expo and Dependencies
Write-Host "Updating Expo and dependencies..." -ForegroundColor Green
npx expo install expo@latest expo-sqlite@latest

# Locate Android SDK
$androidSdkPath = "$env:LOCALAPPDATA\Android\Sdk"

if (!(Test-Path $androidSdkPath)) {
    Write-Host "Android SDK not found in default location. Please install Android SDK." -ForegroundColor Red
    exit
}

# Set ANDROID_HOME environment variable
Write-Host "Setting ANDROID_HOME..." -ForegroundColor Green
[System.Environment]::SetEnvironmentVariable("ANDROID_HOME", $androidSdkPath, [System.EnvironmentVariableTarget]::Machine)

# Add ADB to PATH
$adbPath = "$androidSdkPath\platform-tools"
$existingPath = [System.Environment]::GetEnvironmentVariable("Path", [System.EnvironmentVariableTarget]::Machine)

if ($existingPath -notlike "*$adbPath*") {
    Write-Host "Adding ADB to system PATH..." -ForegroundColor Green
    $newPath = "$existingPath;$adbPath"
    [System.Environment]::SetEnvironmentVariable("Path", $newPath, [System.EnvironmentVariableTarget]::Machine)
}

# Restart Metro Bundler
Write-Host "Restarting Metro Bundler..." -ForegroundColor Green
Start-Process cmd -ArgumentList "/c npx expo start --clear"

Write-Host "Setup complete! Please restart your terminal or system for changes to take effect." -ForegroundColor Cyan
