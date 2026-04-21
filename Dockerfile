# 多阶段构建
FROM node:18-alpine as builder

WORKDIR /app

# 复制 package 文件
COPY package*.json ./

# 安装依赖
RUN npm ci

# 安装 terser (Vite 5 需要)
RUN npm install terser --save-dev

# 复制源代码
COPY . .

# 构建项目
RUN npm run build

# 生产环境 - 使用 nginx
FROM nginx:alpine

# 复制自定义 nginx 配置
COPY config/nginx.conf /etc/nginx/nginx.conf

# 从构建阶段复制构建产物
COPY --from=builder /app/dist /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 nginx
CMD ["nginx", "-g", "daemon off;"]
