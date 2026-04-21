import React, { useState } from 'react'
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Education from './components/Education'
import Internship from './components/Internship'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Editor from './components/Editor'
import { navItems } from './data/portfolio'
import { Edit } from 'lucide-react'

function AppContent() {
  const { personalInfo, education, internships, projects, skills, portfolioItems, xiaohongshuInfo } = usePortfolio()
  const [showEditor, setShowEditor] = useState(false)

  const handleDownloadResume = () => {
    alert('PDF 简历下载功能 - 请配置实际的 PDF 文件路径')
  }

  return (
    <div className="min-h-screen">
      <Header navItems={navItems} onDownloadResume={handleDownloadResume} />
      <main>
        {/* P0 核心简历模块 */}
        <Hero />
        <Education />
        <Internship />
        <Projects />
        <Skills />

        {/* P1 深度背书模块 */}
        <Portfolio />

        {/* P2 通用模块 */}
        <Contact />
      </main>
      <Footer />

      {/* 编辑器入口按钮 */}
      <button
        onClick={() => setShowEditor(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:shadow-xl z-40"
        title="打开内容编辑器"
      >
        <Edit size={24} />
      </button>

      {/* 编辑器弹窗 */}
      {showEditor && <Editor onClose={() => setShowEditor(false)} />}
    </div>
  )
}

function App() {
  return (
    <PortfolioProvider>
      <AppContent />
    </PortfolioProvider>
  )
}

export default App
