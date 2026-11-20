@echo off
title Asia Engineers BD - Upload to GitHub
echo =======================================================
echo         Asia Engineers BD - GitHub Upload Tool
echo =======================================================
echo.
echo Your Git user is configured as: AbMannan1761
echo.
set /p REPO_URL="Enter your GitHub repository URL (e.g., https://github.com/AbMannan1761/asia-engineers-bd.git): "

if "%REPO_URL%"=="" (
    echo.
    echo [Error] Repository URL cannot be empty!
    pause
    exit /b
)

echo.
echo [1/3] Setting remote origin to: %REPO_URL%
git remote remove origin 2>nul
git remote add origin %REPO_URL%

echo [2/3] Setting branch to main...
git branch -M main

echo [3/3] Pushing files to GitHub...
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo =======================================================
    echo   [SUCCESS] Your project has been uploaded to GitHub!
    echo =======================================================
) else (
    echo.
    echo [FAILED] Push encountered an issue. Please make sure:
    echo 1. The repository exists on your GitHub account.
    echo 2. You are logged in with your GitHub account.
)
echo.
pause
