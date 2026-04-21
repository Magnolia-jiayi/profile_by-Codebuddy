import React from 'react';
import { ExternalLink, Calendar, Tag } from 'lucide-react';

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden card-hover">
      {/* 博客封面图 */}
      {blog.image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
      )}
      
      {/* 博客内容 */}
      <div className="p-6">
        {/* 分类标签 */}
        <div className="flex items-center gap-2 mb-3">
          <Tag size={14} className="text-primary-600" />
          <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
            {blog.category}
          </span>
        </div>
        
        {/* 标题 */}
        <h3 className="text-lg font-bold text-neutral-900 mb-2 line-clamp-2">
          {blog.title}
        </h3>
        
        {/* 摘要 */}
        <p className="text-sm text-neutral-600 mb-4 line-clamp-3">
          {blog.description}
        </p>
        
        {/* 元信息 */}
        <div className="flex items-center justify-between text-xs text-neutral-500 mb-4">
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>{blog.readTime}</span>
          </div>
        </div>
        
        {/* 链接按钮 */}
        <a
          href={blog.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors btn-primary"
        >
          阅读全文
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default BlogCard;