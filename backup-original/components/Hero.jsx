import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Github, BookOpen, Mail, MessageCircle, ExternalLink } from 'lucide-react';

const Hero = () => {
  const { personalInfo, xiaohongshuInfo } = usePortfolio();

  const handleCopyWechat = () => {
    navigator.clipboard.writeText(personalInfo.wechat);
    alert('微信 ID 已复制到剪贴板');
  };

  return (
    <section id="home" className="my-8 py-20 bg-white rounded-2xl shadow-lg border border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* 个人信息 */}
          <div className="flex-1 text-center md:text-left fade-in">
            <p className="text-xl text-primary-600 font-medium mb-6">
              {personalInfo.position}
            </p>
            <p className="text-neutral-600 mb-8 max-w-2xl">
              专注于前端开发、产品设计和数据分析的研二学生，热爱创造有价值的数字产品，不断探索技术与设计的结合点。
            </p>
            
            {/* 社交媒体链接 */}
            <div className="flex justify-center md:justify-start gap-4 mb-8">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-100 rounded-full shadow-sm flex items-center justify-center hover:shadow-md hover:border-primary-500 hover:border-2 transition-all"
                title="GitHub"
              >
                <Github size={20} className="text-primary-600" />
              </a>
              <a
                href={personalInfo.zhihu}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-100 rounded-full shadow-sm flex items-center justify-center hover:shadow-md hover:border-primary-500 hover:border-2 transition-all"
                title="知乎"
              >
                <BookOpen size={20} className="text-primary-600" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 bg-primary-100 rounded-full shadow-sm flex items-center justify-center hover:shadow-md hover:border-primary-500 hover:border-2 transition-all"
                title="邮箱"
              >
                <Mail size={20} className="text-primary-600" />
              </a>
              <button
                onClick={handleCopyWechat}
                className="w-10 h-10 bg-primary-100 rounded-full shadow-sm flex items-center justify-center hover:shadow-md hover:border-primary-500 hover:border-2 transition-all"
                title="复制微信"
              >
                <MessageCircle size={20} className="text-primary-600" />
              </button>
            </div>
            
            {/* 小红书信息 */}
            <div className="flex items-center justify-center md:justify-start gap-4 p-4 bg-primary-50 rounded-xl shadow-sm mb-8">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-200">
                <img 
                  src={xiaohongshuInfo.avatar} 
                  alt={xiaohongshuInfo.nickname} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-neutral-900">{xiaohongshuInfo.nickname}</h3>
                  <span className="text-xs text-neutral-500">{xiaohongshuInfo.id}</span>
                </div>
                <p className="text-sm text-neutral-600 mb-1">{xiaohongshuInfo.bio}</p>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-neutral-500">粉丝: {xiaohongshuInfo.followers}</span>
                  <a
                    href={xiaohongshuInfo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary-600 hover:text-primary-700 flex items-center gap-1"
                  >
                    查看主页
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* 个人头像 */}
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-primary-100 fade-in">
            <img 
              src={personalInfo.avatar} 
              alt={personalInfo.name} 
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero
