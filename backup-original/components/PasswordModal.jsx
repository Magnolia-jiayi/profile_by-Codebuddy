import React, { useState } from 'react';
import { X, Lock, AlertCircle } from 'lucide-react';

const PasswordModal = ({ isOpen, onVerify, onCancel, error }) => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await onVerify(password);
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 border-2 border-neutral-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-neutral-900">编辑验证</h3>
          <button
            onClick={onCancel}
            className="text-neutral-500 hover:text-primary-600 transition-colors"
            title="关闭"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              请输入编辑密码
            </label>
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-600" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="输入密码"
                className="w-full pl-10 pr-4 py-3 bg-white border border-neutral-200 rounded-lg text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500 transition-all"
              />
            </div>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-primary-50 border border-primary-200 rounded-lg flex items-center gap-2">
              <AlertCircle size={18} className="text-primary-600 flex-shrink-0" />
              <span className="text-primary-700 text-sm">{error}</span>
            </div>
          )}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 px-4 py-3 border border-neutral-200 text-neutral-700 font-medium rounded-lg hover:bg-neutral-50 hover:text-primary-600 transition-colors"
            >
              取消
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 px-4 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? '验证中...' : '验证'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordModal;
