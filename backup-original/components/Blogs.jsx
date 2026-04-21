import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Edit2 } from 'lucide-react';
import BlogCard from './BlogCard';
import SectionTitle from './SectionTitle';
import PasswordModal from './PasswordModal';
import { verifyPassword } from '../utils/password';

const Blogs = () => {
  const { blogs, setBlogs } = usePortfolio();
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setShowPasswordModal(true);
  };

  const handlePasswordVerify = async (password) => {
    const isValid = await verifyPassword(password);
    if (isValid) {
      setShowPasswordModal(false);
      setIsEditing(true);
    } else {
      setPasswordError('密码错误，请重试');
    }
  };

  return (
    <section id="blogs" className="my-8 py-20 bg-white rounded-2xl shadow-lg border border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <SectionTitle 
            title="技术博客" 
            subtitle="分享技术见解与学习心得"
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
          <div className="bg-neutral-50 rounded-xl p-6 border-2 border-primary-300">
            <p className="text-neutral-600">博客编辑功能开发中...</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;