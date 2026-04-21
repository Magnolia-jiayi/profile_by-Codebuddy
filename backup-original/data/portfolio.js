// 个人基本信息
export const initialPersonalInfo = {
  name: '张同学',
  position: '产品运营实习生',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
  email: 'your.email@example.com',
  wechat: 'your_wechat_id',
  location: '北京 · 中国',
  github: 'https://github.com/yourusername',
  zhihu: 'https://zhihu.com/people/yourusername',
}

export const personalInfo = initialPersonalInfo

// 导航菜单
export const navItems = [
  { label: '教育背景', href: '#education' },
  { label: '实习经历', href: '#internship' },
  { label: '项目经历', href: '#projects' },
  { label: '专业技能', href: '#skills' },
  { label: '作品集', href: '#portfolio' },
]

// 教育背景
export const initialEducation = {
  school: 'XX大学',
  major: '计算机科学与技术',
  degree: '硕士研究生',
  period: '2022.09 - 2025.06',
  gpa: '3.8/4.0',
  courses: [
    '数据结构与算法',
    '机器学习',
    '数据库系统',
    '软件工程',
    '统计学',
    '产品设计方法',
  ],
}

export const education = initialEducation

// 实习经历
export const initialInternships = [
  {
    id: 1,
    company: '某互联网公司',
    position: '产品运营实习生',
    period: '2024.07 - 2024.12',
    location: '北京',
    responsibilities: [
      '负责用户增长策略制定与执行',
      '优化新用户转化路径，提升转化率 15%',
      '搭建数据监控体系，实时追踪核心指标',
      '完成 3 次 A/B 测试，验证功能改版效果',
    ],
    achievements: '月度留存率提升 8%，超额完成目标',
  },
  {
    id: 2,
    company: '某科技公司',
    position: '数据分析实习生',
    period: '2024.01 - 2024.06',
    location: '上海',
    responsibilities: [
      '负责业务数据分析和可视化报表开发',
      '搭建自动化数据看板，提升数据统计效率 80%',
      '参与需求调研，支持产品决策',
    ],
    achievements: '输出 20+ 份分析报告，发现关键增长机会',
  },
]

export const internships = initialInternships

// 项目经历
export const initialProjects = [
  {
    id: 1,
    title: '校园招聘数据看板系统',
    role: '产品经理 & 前端开发',
    period: '2024.03 - 2024.06',
    description: '开发一套轻量级数据看板系统，实现招聘流程可视化监控',
    contribution: [
      '调研 50+ 同学需求，梳理核心功能清单',
      '使用 React + Vite 快速搭建原型',
      '集成飞书多维表格 API，实现数据实时同步',
      '迭代优化 4 个版本，提升用户体验',
    ],
    result: '系统覆盖 8 个学院，服务 300+ 求职同学',
    tech: ['React', 'Vite', '飞书API'],
    feishuUrl: 'https://feishu.cn/doc/example1',
  },
  {
    id: 2,
    title: '用户增长策略优化项目',
    role: '项目负责人',
    period: '2024.09 - 2024.12',
    description: '针对某电商平台日活用户增长放缓问题，制定并执行增长策略',
    contribution: [
      '进行用户分群分析，识别高价值用户特征',
      '设计并执行 A/B 测试验证激励机制',
      '搭建自动化触达系统，实现精准营销',
      '建立数据监控看板，实时追踪关键指标',
    ],
    result: '3 个月内实现留存率提升 8%，新用户转化率提升 15%',
    tech: ['数据分析', 'A/B测试', 'SQL', 'Python'],
    feishuUrl: 'https://feishu.cn/doc/example2',
  },
  {
    id: 3,
    title: '小红书内容运营体系',
    role: '内容运营负责人',
    period: '2024.06 - 至今',
    description: '建立可持续的内容运营体系，实现粉丝量和互动率双增长',
    contribution: [
      '深度分析竞品爆款内容，提取成功要素',
      '建立内容创作 SOP，提升内容质量和效率',
      '设计系列化内容主题，增强用户粘性',
      '优化发布时间策略，提高内容曝光效率',
    ],
    result: '3 个月内粉丝增长 2000+，单篇平均互动率提升 120%',
    tech: ['内容运营', '数据分析', '文案写作'],
    feishuUrl: 'https://feishu.cn/doc/example3',
  },
]

export const projects = initialProjects

// 专业技能
export const initialSkills = {
  categories: [
    {
      title: '数据',
      items: [
        'Python (Pandas/NumPy)',
        'SQL (窗口函数/查询优化)',
        'Tableau/BI',
        'Excel',
      ],
    },
    {
      title: 'AI技术',
      items: [
        'Prompt',
        'AI Agent搭建',
        'AI Coding',
      ],
    },
    {
      title: '产品',
      items: [
        'Axure/墨刀',
        'Xmind/Visio/draw.io',
        'UML建模',
      ],
    },
  ],
}

export const skills = initialSkills

// 作品集
export const initialPortfolioItems = [
  {
    id: 1,
    title: '校园招聘助手小程序',
    category: '项目作品',
    subcategory: '前端开发',
    image: '📱',
    images: [],
    description: '帮助研究生快速了解各企业校招信息的一站式小程序',
    tech: ['小程序', '飞书多维表格'],
    url: '#',
    attachments: [],
    date: '2024-03-01',
    featured: true
  },
  {
    id: 2,
    title: '学习方法系列视频',
    category: '内容创作',
    subcategory: '视频制作',
    image: '🎥',
    images: [],
    description: '系统性学习方法论视频课程，累计播放量 10万+',
    tech: ['视频剪辑', '课程设计'],
    url: '#',
    attachments: [],
    date: '2024-06-15',
    featured: true
  },
  {
    id: 3,
    title: '用户增长数据可视化',
    category: '数据可视化',
    subcategory: '数据分析',
    image: '📊',
    images: [],
    description: '基于用户行为数据的增长策略可视化分析',
    tech: ['Python', 'Tableau', '数据分析'],
    url: '#',
    attachments: [],
    date: '2024-09-20',
    featured: false
  },
  {
    id: 4,
    title: '个人作品集网页设计',
    category: '设计作品',
    subcategory: 'UI/UX设计',
    image: '🎨',
    images: [],
    description: '现代化个人作品集网页的UI/UX设计方案',
    tech: ['Figma', 'UI设计', 'UX设计'],
    url: '#',
    attachments: [],
    date: '2024-11-10',
    featured: true
  },
  {
    id: 5,
    title: '技术博客平台',
    category: '项目作品',
    subcategory: '全栈开发',
    image: '💻',
    images: [],
    description: '基于React和Node.js的技术博客平台',
    tech: ['React', 'Node.js', 'MongoDB'],
    url: '#',
    attachments: [],
    date: '2024-02-05',
    featured: false
  },
  {
    id: 6,
    title: '机器学习模型训练与部署',
    category: '技术博客',
    subcategory: 'AI/ML',
    image: '🤖',
    images: [],
    description: '详细介绍机器学习模型的训练、优化和部署流程',
    tech: ['Python', 'TensorFlow', 'AWS'],
    url: '#',
    attachments: [],
    date: '2024-08-30',
    featured: false
  }
]

export const portfolioItems = initialPortfolioItems

// 学习复盘入口
export const initialLearningNotes = {
  title: '学习复盘笔记',
  description: '记录日常学习心得、读书笔记、产品思考',
  feishuUrl: 'https://feishu.cn/bitax/example',
}

export const learningNotes = initialLearningNotes

// 小红书博主信息
export const initialXiaohongshuInfo = {
  nickname: '你的小红书昵称',
  id: '@your_id',
  followers: '2.5万',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
  bio: '分享学习方法和成长干货',
  url: 'https://www.xiaohongshu.com/user/profile/your_id',
}

export const xiaohongshuInfo = initialXiaohongshuInfo

// 技术博客数据
export const initialBlogs = [
  {
    id: 1,
    title: '如何搭建个人作品集网站',
    category: '前端开发',
    description: '详细介绍使用React、Vite和Tailwind CSS搭建个人作品集网站的完整流程，包括项目初始化、组件设计和部署上线。',
    date: '2024-12-15',
    readTime: '15分钟',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Portfolio',
    url: 'https://feishu.cn/doc/blog1'
  },
  {
    id: 2,
    title: '产品运营数据分析方法',
    category: '产品运营',
    description: '分享产品运营中常用的数据分析方法和工具，帮助运营人员快速定位问题并制定有效的增长策略。',
    date: '2024-11-20',
    readTime: '12分钟',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DataAnalysis',
    url: 'https://feishu.cn/doc/blog2'
  },
  {
    id: 3,
    title: 'AI Agent开发实战',
    category: '人工智能',
    description: '从零开始搭建AI Agent系统，包括核心原理、技术选型和实际应用案例，帮助开发者快速上手AI Agent开发。',
    date: '2024-10-05',
    readTime: '20分钟',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AIAgent',
    url: 'https://feishu.cn/doc/blog3'
  },
  {
    id: 4,
    title: '小红书内容运营策略',
    category: '内容运营',
    description: '分析小红书平台的算法机制和用户行为，分享有效的内容创作和运营策略，帮助博主快速增长粉丝。',
    date: '2024-09-18',
    readTime: '18分钟',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Xiaohongshu',
    url: 'https://feishu.cn/doc/blog4'
  },
  {
    id: 5,
    title: 'Python数据分析入门',
    category: '编程',
    description: 'Python数据分析的入门教程，包括Pandas、NumPy等库的使用方法，以及实际案例分析。',
    date: '2024-08-10',
    readTime: '25分钟',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Python',
    url: 'https://feishu.cn/doc/blog5'
  },
  {
    id: 6,
    title: '用户增长A/B测试实践',
    category: '产品增长',
    description: '详细介绍A/B测试的设计、执行和分析方法，帮助产品团队做出数据驱动的决策。',
    date: '2024-07-22',
    readTime: '16分钟',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ABTest',
    url: 'https://feishu.cn/doc/blog6'
  }
]

export const blogs = initialBlogs

// 社交媒体链接
export const initialSocialLinks = [
  { name: 'GitHub', icon: 'Github', url: 'https://github.com/yourusername' },
  { name: '知乎', icon: 'BookOpen', url: 'https://zhihu.com/people/yourusername' },
  { name: '邮箱', icon: 'Mail', url: 'mailto:your.email@example.com' },
  { name: '微信', icon: 'MessageCircle', url: 'javascript:void(0)', action: 'copy-wechat' },
]

export const socialLinks = initialSocialLinks
