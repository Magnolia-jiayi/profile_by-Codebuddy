@echo off
chcp 65001 >nul
echo ====================================
echo 重启开发服务器
echo ====================================
echo.
echo 1. 停止当前服务器（如果正在运行）
echo    按 Ctrl+C 停止
echo.
echo 2. 清理缓存并重新启动
echo.

echo 正在清理 dist 目录（如果存在）...
if exist dist (
    rmdir /s /q dist
    echo 已清理 dist 目录
)
echo.

echo 正在清理 node_modules/.cache...
if exist node_modules\.cache (
    rmdir /s /q node_modules\.cache
    echo 已清理缓存
)
echo.

echo ====================================
echo 正在启动开发服务器...
echo ====================================
echo.
echo 提示：
echo - 请在浏览器中打开显示的地址（通常是 http://localhost:3000）
echo - 如果看不到内容，请按 Ctrl+F5 强制刷新浏览器
echo - 如果仍有问题，请按 F12 打开开发者工具查看控制台错误
echo.

npm run dev
