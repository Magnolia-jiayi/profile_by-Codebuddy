@echo off
chcp 65001 >nul
echo ====================================
echo 系统诊断
echo ====================================
echo.

echo 1. 检查当前目录：
cd
echo.

echo 2. 检查 package.json 是否存在：
if exist package.json (
    echo [成功] package.json 存在
) else (
    echo [失败] package.json 不存在
)
echo.

echo 3. 检查 npm 是否安装：
where npm >nul 2>&1
if %errorlevel% equ 0 (
    echo [成功] npm 已安装
    npm --version
) else (
    echo [失败] npm 未安装或不在 PATH 中
    echo.
    echo 请安装 Node.js: https://nodejs.org/
    echo 安装后需要重启电脑或重新打开命令行窗口
)
echo.

echo 4. 检查 Node.js 是否安装：
where node >nul 2>&1
if %errorlevel% equ 0 (
    echo [成功] Node.js 已安装
    node --version
) else (
    echo [失败] Node.js 未安装或不在 PATH 中
)
echo.

echo ====================================
echo 按任意键关闭窗口...
pause >nul
