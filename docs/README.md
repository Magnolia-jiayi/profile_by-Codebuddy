# 个人数字名片网站

一个基于 React + Tailwind CSS 构建的现代化个人作品集网站，支持实时内联编辑和云端数据同步。

## ✨ 特性

- 🎯 **响应式设计** - 完美适配移动端与 PC 端
- 📝 **实时编辑** - 支持在线编辑所有模块内容,无需后台管理
- ☁️ **云端同步** - 多端数据实时同步(开发中)
- 📎 **附件上传** - 支持作品集附件上传(图片、PDF、PPT、Word)
- 🎨 **简洁设计** - 呼吸感设计,清晰排版
- ⚡ **高性能** - 使用 Vite 构建,快速加载
- 🐳 **Docker 部署** - 一键部署到云服务器

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 📁 项目结构

```
Personal-digital-business-card/
├── docs/                      # 📄 文档文件夹
│   └── README.md             # 项目说明
│
├── config/                    # ⚙️ 配置文件文件夹
│   ├── vite.config.js        # Vite 配置
│   ├── tailwind.config.js    # Tailwind CSS 配置
│   ├── postcss.config.js     # PostCSS 配置
│   └── nginx.conf            # Nginx 配置
│
├── src/                       # 💻 源代码文件夹
│   ├── components/          # React 组件
│   │   ├── Header.jsx       # 顶部导航栏
│   │   ├── Hero.jsx         # 首屏介绍
│   │   ├── Education.jsx    # 教育背景模块
│   │   ├── Internship.jsx   # 实习经历模块
│   │   ├── Projects.jsx     # 项目经历模块
│   │   ├── Skills.jsx       # 专业技能模块
│   │   ├── Portfolio.jsx    # 作品集展示
│   │   ├── Contact.jsx      # 联系方式区
│   │   └── InlineEditors.jsx # 内联编辑器
│   ├── context/
│   │   └── PortfolioContext.jsx # 状态管理
│   ├── data/
│   │   └── portfolio.js     # 数据源文件
│   ├── App.jsx              # 主应用组件
│   ├── main.jsx             # 应用入口
│   └── index.css            # 全局样式
│
├── backend/                   # 🔧 后端代码(开发中)
│   ├── server.js            # Express API
│   ├── database.js          # SQLite 数据库
│   └── package.json
│
├── scripts/                   # 📜 脚本文件文件夹
│   ├── build.bat            # 构建脚本
│   ├── install.bat          # 安装脚本
│   ├── restart.bat          # 重启脚本
│   └── check.bat            # 检查脚本
│
├── .gitignore                 # Git 忽略配置
├── Dockerfile                 # Docker 配置
├── index.html                 # HTML 入口
├── package.json               # 项目依赖
└── package-lock.json          # 依赖锁定
```

## 🎨 自定义内容

### 方式一: 在线编辑(推荐)

1. 访问网站首页
2. 点击各模块的"编辑"按钮
3. 直接在网页上修改内容
4. 点击"保存"即可(云端同步功能开发中)

### 方式二: 修改源代码

编辑 `src/data/portfolio.js` 文件,更新以下数据:

```javascript
// 个人信息
export const personalInfo = {
  name: '你的名字',
  position: '你的职位',
  avatar: '头像 URL',
  email: '你的邮箱',
  wechat: '你的微信号',
  location: '你的位置',
  github: 'GitHub 链接',
  zhihu: '知乎链接',
}

// 教育背景
export const education = {
  school: 'XX大学',
  major: '你的专业',
  degree: '学位',
  period: '时间段',
  gpa: 'GPA',
  courses: ['课程1', '课程2', ...],
}

// 实习经历
export const internships = [
  {
    id: 1,
    company: '公司名称',
    position: '职位',
    period: '时间段',
    location: '地点',
    responsibilities: ['职责1', '职责2', ...],
    achievements: '成就描述',
  },
  // 添加更多实习...
]

// 项目经历
export const projects = [
  {
    id: 1,
    title: '项目名称',
    role: '你的角色',
    period: '时间段',
    description: '项目描述',
    contribution: ['贡献1', '贡献2', ...],
    result: '项目结果',
    tech: ['技术1', '技术2', ...],
    feishuUrl: '飞书文档链接',
  },
  // 添加更多项目...
]
```

### 上传作品集附件

1. 在网站首页点击"作品集"模块的"编辑"按钮
2. 选择要添加的作品
3. 点击"上传附件"按钮
4. 支持图片、PDF、PPT、Word 等格式
5. 附件将以 Data URL 格式存储

## 🎯 核心功能

### 已实现模块

- ✅ 首屏介绍(Hero)
- ✅ 教育背景(Education)
- ✅ 实习经历(Internship)
- ✅ 项目经历(Projects)
- ✅ 专业技能(Skills)
- ✅ 作品集展示(Portfolio)
- ✅ 联系方式(Contact)
- ✅ 实时编辑功能

### 正在开发

- 🔄 云端数据同步(后端 API)
- 🔄 多用户数据共享
- 🔄 访问统计
- 🔄 评论与反馈系统

## 🛠️ 技术栈

### 前端

- **框架**: React 18
- **构建工具**: Vite 5
- **样式**: Tailwind CSS 3
- **状态管理**: React Context API
- **图标**: Lucide React
- **路由**: React Router

### 后端(开发中)

- **框架**: Express.js
- **数据库**: SQLite (better-sqlite3)
- **API**: RESTful API

### 部署

- **容器化**: Docker
- **Web 服务器**: Nginx
- **云服务**: 腾讯云轻量应用服务器

## 🚀 部署

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 生产构建

```bash
# 构建项目
npm run build

# 使用 Docker 部署
docker build -t portfolio-website .
docker run -p 80:80 portfolio-website
```

### 部署到云服务器

```bash
# 1. 构建镜像
docker build -t portfolio-website .

# 2. 导出镜像
docker save -o portfolio-website.tar portfolio-website

# 3. 上传到服务器(使用 scp 或其他工具)
scp portfolio-website.tar user@server:/path/

# 4. 在服务器上加载并运行
docker load -i portfolio-website.tar
docker run -d -p 80:80 --name portfolio portfolio-website
```

## 🎨 设计特点

- **简洁现代**: 清晰的视觉层次,合理的留白
- **易于编辑**: 内联编辑模式,所见即所得
- **响应式布局**: 自适应不同设备屏幕
- **高性能**: Vite 构建优化,快速加载

## 📝 注意事项

1. **数据存储**: 当前版本使用 localStorage,云端同步功能开发中
2. **附件大小**: 附件以 Data URL 格式存储,建议单个文件不超过 2MB
3. **浏览器兼容**: 推荐使用现代浏览器(Chrome、Firefox、Safari、Edge)
4. **数据备份**: 建议定期导出数据备份(首页"导出数据"功能)

## 📄 许可证

MIT License

## 👤 作者

张同学

---

**在线演示**: http://1.116.121.43/

**GitHub**: https://github.com/Magnolia-jiayi/Personal-digital-business-card

