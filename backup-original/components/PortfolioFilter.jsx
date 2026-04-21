import React from 'react';

const PortfolioFilter = ({ categories, selectedCategory, onCategoryChange, techStacks, selectedTech, onTechChange }) => {
  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-4 mb-6">
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === 'all' 
              ? 'bg-primary-500 text-white' 
              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
          }`}
        >
          全部
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category 
                ? 'bg-primary-500 text-white' 
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {techStacks.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-sm font-medium text-neutral-700 mr-2">技术栈:</span>
          {techStacks.map((tech) => (
            <button
              key={tech}
              onClick={() => onTechChange(tech)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                selectedTech === tech 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {tech}
            </button>
          ))}
          {selectedTech && (
            <button
              onClick={() => onTechChange(null)}
              className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors"
            >
              清除
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default PortfolioFilter;
