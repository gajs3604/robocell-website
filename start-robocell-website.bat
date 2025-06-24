@echo off
echo 🤖 Starting RoboCell Website...
echo.

REM Add Node.js to PATH for this session
set PATH=%PATH%;C:\Program Files\nodejs

REM Check if Node.js is available
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js not found! Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js found!
echo ✅ Starting development server...
echo.
echo 🌐 Your website will be available at: http://localhost:3000 or http://localhost:3001
echo 📱 Press Ctrl+C to stop the server
echo.

REM Start the development server
npm run dev

pause
