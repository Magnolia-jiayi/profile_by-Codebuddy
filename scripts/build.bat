@echo off
cd /d "%~dp0"
echo 正在构建项目...
call npm run build
echo 构建完成！
pause
