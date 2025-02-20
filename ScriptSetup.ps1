# PowerShell Script to Set Up Sleep Sync App Environment

Write-Host "Starting Sleep Sync App environment setup..." -ForegroundColor Green

# Check if Node.js is installed
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "Error: Node.js is not installed. Please install it before proceeding." -ForegroundColor Red
    exit
}

# Check if NPX is installed
if (-not (Get-Command npx -ErrorAction SilentlyContinue)) {
    Write-Host "Error: NPX is not installed. Please install Node.js and try again." -ForegroundColor Red
    exit
}

# Check if Expo CLI is installed globally
if (-not (Get-Command expo -ErrorAction SilentlyContinue)) {
    Write-Host "⚠️ Expo CLI is not installed. Installing now..." -ForegroundColor Yellow
    npm install -g expo-cli
} else {
    Write-Host "✅ Expo CLI is installed: $(expo --version)" -ForegroundColor Cyan
}

# Navigate to project directory
$ProjectPath = Get-Location
Write-Host "Navigating to project directory: $ProjectPath" -ForegroundColor Cyan

# Install dependencies based on package.json
Write-Host "Installing/updating dependencies..." -ForegroundColor Cyan
npm install --force

# Install Expo dependencies
Write-Host "Ensuring required Expo dependencies are installed..." -ForegroundColor Cyan
npx expo install react-native
npx expo install @react-navigation/native
npx expo install @react-navigation/native-stack
npx expo install react-native-screens
npx expo install react-native-safe-area-context
npx expo install react-native-gesture-handler
npm install react-native-encrypted-storage

# Ensure the latest version of dependencies
Write-Host "Verifying and updating package versions..." -ForegroundColor Cyan
npx expo-doctor

# Clear Metro bundler cache
Write-Host "Clearing Metro bundler cache..." -ForegroundColor Yellow
npx expo start --clear

# Start the simulator (Android Emulator or iOS Simulator if on Mac)
Write-Host "Starting Expo development server and opening simulator..." -ForegroundColor Green
npx expo start --android
