import React from 'react';
import { ExternalLink } from 'lucide-react';

const PortfolioItem = ({ item, onClick }) => {
  return (
    <div
      onClick={() => onClick(item)}
      className="bg-white rounded-xl shadow-md border border-neutral-100 overflow-hidden hover:shadow-lg transition-all group cursor-pointer card-hover"
    >
      <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-50 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300">
        {item.image}
      </div>

      <div className="p-5">
        <span className="inline-block px-2.5 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium mb-3">
          {item.category}
        </span>

        <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
          {item.title}
        </h3>

        <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {item.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-neutral-400">
            {item.date}
          </span>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700 font-medium group/link"
          >
            查看详情
            <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
