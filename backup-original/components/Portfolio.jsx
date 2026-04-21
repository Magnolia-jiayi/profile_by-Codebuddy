import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Edit2, BookOpen, ExternalLink } from 'lucide-react';
import { PortfolioEditor } from './InlineEditors';
import PortfolioFilter from './PortfolioFilter';
import PortfolioItem from './PortfolioItem';
import PortfolioModal from './PortfolioModal';
import PasswordModal from './PasswordModal';
import SectionTitle from './SectionTitle';
import { verifyPassword } from '../utils/password';

const Portfolio = () => {
  const { portfolioItems, setPortfolioItems } = usePortfolio();
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [passwordError, setPasswordError] = useState('')
  const [isEditing, setIsEditing] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTech, setSelectedTech] = useState(null);
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [categories, setCategories] = useState([]);
  const [techStacks, setTechStacks] = useState([]);

  const handleEditClick = () => {
    setShowPasswordModal(true)
  }

  const handlePasswordVerify = async (password) => {
    const isValid = await verifyPassword(password)
    if (isValid) {
      setShowPasswordModal(false)
      setIsEditing(true)
    } else {
      setPasswordError('密码错误，请重试')
    }
  }

  // 提取所有分类和技术栈
  useEffect(() => {
    const uniqueCategories = [...new Set(portfolioItems.map(item => item.category))];
    setCategories(uniqueCategories);
    
    const allTech = portfolioItems.flatMap(item => item.tech);
    const uniqueTech = [...new Set(allTech)];
    setTechStacks(uniqueTech);
  }, [portfolioItems]);

  // 筛选作品
  useEffect(() => {
    let result = portfolioItems;
    
    if (selectedCategory !== 'all') {
      result = result.filter(item => item.category === selectedCategory);
    }
    
    if (selectedTech) {
      result = result.filter(item => item.tech.includes(selectedTech));
    }
    
    setFilteredItems(result);
  }, [portfolioItems, selectedCategory, selectedTech]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleTechChange = (tech) => {
    setSelectedTech(tech === selectedTech ? null : tech);
  };

  return (
    <section id="portfolio" className="my-8 py-20 bg-neutral-50 rounded-2xl shadow-lg border border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <SectionTitle 
            title="作品集" 
            subtitle="展示具体的项目成果"
          />
          {!isEditing && (
            <button
              onClick={handleEditClick}
              className="p-2 bg-primary-100 hover:bg-primary-200 text-primary-600 rounded-lg transition-colors"
              title="编辑"
            >
              <Edit2 size={20} />
            </button>
          )}
        </div>

        <PasswordModal
          isOpen={showPasswordModal}
          onVerify={handlePasswordVerify}
          onCancel={() => setShowPasswordModal(false)}
          error={passwordError}
        />

        {isEditing ? (
          <PortfolioEditor
            data={portfolioItems}
            setData={setPortfolioItems}
            onCancel={() => setIsEditing(false)}
          />
        ) : (
          <>
            {/* 筛选器 */}
            <PortfolioFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              techStacks={techStacks}
              selectedTech={selectedTech}
              onTechChange={handleTechChange}
            />

            {/* 作品列表 */}
            {filteredItems.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {filteredItems.map((item) => (
                  <PortfolioItem
                    key={item.id}
                    item={item}
                    onClick={handleItemClick}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-neutral-50 rounded-xl mb-16">
                <p className="text-neutral-500">没有找到符合条件的作品</p>
              </div>
            )}
          </>
        )}

        {/* 作品详情模态框 */}
        <PortfolioModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      </div>
    </section>
  );
};

export default Portfolio;