import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Palette } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors"
      title={theme === 'blue' ? '切换到紫色系' : '切换到蓝色系'}
    >
      <Palette size={20} className="text-neutral-700" />
    </button>
  );
};

export default ThemeToggle;
