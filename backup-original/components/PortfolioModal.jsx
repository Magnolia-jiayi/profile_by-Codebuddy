import React from 'react';
import { X, ExternalLink, FileText } from 'lucide-react';

const PortfolioModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md z-10"
            title="关闭"
          >
            <X size={20} />
          </button>
          
          <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-50 flex items-center justify-center text-6xl">
            {item.image}
          </div>
        </div>
        
        <div className="p-6">
          <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-3">
            {item.category}
          </span>
          
          <h2 className="text-2xl font-bold text-neutral-900 mb-3">
            {item.title}
          </h2>
          
          <p className="text-neutral-600 mb-6">
            {item.description}
          </p>
          
          <div className="mb-6">
            <h3 className="text-sm font-medium text-neutral-700 mb-2">技术栈</h3>
            <div className="flex flex-wrap gap-2">
              {item.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-sm font-medium text-neutral-700 mb-2">项目信息</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-xs text-neutral-500">分类</span>
                <p className="text-sm font-medium">{item.subcategory || '未分类'}</p>
              </div>
              <div>
                <span className="text-xs text-neutral-500">日期</span>
                <p className="text-sm font-medium">{item.date}</p>
              </div>
            </div>
          </div>
          
          {(item.attachments || []).length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-neutral-700 mb-2">附件</h3>
              <div className="space-y-2">
                {(item.attachments || []).map((attachment, index) => (
                  <a
                    key={index}
                    href={attachment.dataUrl}
                    download={attachment.name}
                    className="flex items-center gap-2 p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors"
                  >
                    <FileText size={18} className="text-primary-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-neutral-700 truncate">{attachment.name}</span>
                    <span className="text-xs text-neutral-400 ml-auto">
                      {(attachment.size / 1024).toFixed(1)} KB
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex gap-3">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center gap-2 btn-primary"
            >
              访问项目
              <ExternalLink size={18} />
            </a>
            <button
              onClick={onClose}
              className="px-6 py-3 border border-neutral-300 text-neutral-700 font-medium rounded-lg hover:bg-neutral-50 transition-colors"
            >
              关闭
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
