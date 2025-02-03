@echo off
setlocal

REM
cd /d "%~dp0..\my-app"
start cmd /k "npm start"

endlocal