import React from 'react'
import { socialLinks } from '../data/portfolio'
import { Github, BookOpen, Mail, MessageCircle } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <h3 className="text-xl font-bold mb-4">张同学</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              研二在读学生，专注于产品运营和数据分析领域。
              通过结构化的经历展示与深度的学习复盘，展示专业能力与持续学习能力。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">快速导航</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  首页
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-white transition-colors">
                  教育背景
                </a>
              </li>
              <li>
                <a href="#internship" className="hover:text-white transition-colors">
                  实习经历
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  项目经历
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  专业技能
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  作品集
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  联系我
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">社交媒体</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = { Github, BookOpen, Mail, MessageCircle }[link.icon]
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
                    aria-label={link.name}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-neutral-800 text-center text-neutral-400 text-sm">
          <p>© {currentYear} 张同学. All rights reserved.</p>
          <p className="mt-2">用 ❤️ 和 React 构建</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
