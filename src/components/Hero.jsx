import React from 'react'
import { usePortfolio } from '../context/PortfolioContext'
import { Download, Mail, MapPin } from 'lucide-react'

const Hero = () => {
  const { personalInfo } = usePortfolio()

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-32 h-32 mx-auto rounded-full ring-4 ring-primary-100 shadow-lg"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
            {personalInfo.name}
          </h1>

          <p className="text-xl sm:text-2xl text-primary-600 font-medium mb-6">
            {personalInfo.position}
          </p>

          <div className="flex items-center justify-center gap-6 text-neutral-600 mb-8">
            <span className="flex items-center gap-2">
              <MapPin size={18} />
              {personalInfo.location}
            </span>
            <span className="flex items-center gap-2">
              <Mail size={18} />
              {personalInfo.email}
            </span>
          </div>

          <button
            onClick={() => alert('PDF 简历下载功能 - 请配置实际的 PDF 文件路径')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white text-lg font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-primary-500/30"
          >
            <Download size={20} />
            下载 PDF 简历
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
