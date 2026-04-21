import React from 'react';
import { Github, BookOpen, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const handleCopyWechat = () => {
    navigator.clipboard.writeText('your_wechat_id');
    alert('微信 ID 已复制到剪贴板');
  };

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">个人作品集</h3>
            <p className="text-neutral-400 mb-4">
              展示我的项目作品、技术博客和设计作品，记录我的学习和成长历程。
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">快速链接</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-neutral-400 hover:text-primary-400 transition-colors">首页</a></li>
              <li><a href="#education" className="text-neutral-400 hover:text-primary-400 transition-colors">教育背景</a></li>
              <li><a href="#internship" className="text-neutral-400 hover:text-primary-400 transition-colors">实习经历</a></li>
              <li><a href="#projects" className="text-neutral-400 hover:text-primary-400 transition-colors">项目经历</a></li>
              <li><a href="#skills" className="text-neutral-400 hover:text-primary-400 transition-colors">专业技能</a></li>
              <li><a href="#portfolio" className="text-neutral-400 hover:text-primary-400 transition-colors">作品集</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">联系我</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 hover:border-primary-500 hover:border-2 transition-all"
                title="GitHub"
              >
                <Github size={20} className="text-primary-400" />
              </a>
              <a
                href="https://zhihu.com/people/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 hover:border-primary-500 hover:border-2 transition-all"
                title="知乎"
              >
                <BookOpen size={20} className="text-primary-400" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 hover:border-primary-500 hover:border-2 transition-all"
                title="邮箱"
              >
                <Mail size={20} className="text-primary-400" />
              </a>
              <button
                onClick={handleCopyWechat}
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 hover:border-primary-500 hover:border-2 transition-all"
                title="复制微信"
              >
                <MessageCircle size={20} className="text-primary-400" />
              </button>
            </div>
            <p className="text-neutral-400 text-sm">
              © {currentYear} 个人作品集. 保留所有权利.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
