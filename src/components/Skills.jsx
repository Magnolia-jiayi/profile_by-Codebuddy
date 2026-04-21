import React from 'react'
import { usePortfolio } from '../context/PortfolioContext'
import { Database, Cpu, Box } from 'lucide-react'

const Skills = () => {
  const { skills } = usePortfolio()
  const icons = {
    '数据': Database,
    'AI技术': Cpu,
    '产品': Box,
  }

  return (
    <section id="skills" className="py-16 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">
            专业技能
          </h2>
          <p className="text-sm text-neutral-600">
            核心能力概览
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.categories.map((category, index) => {
            const Icon = icons[category.title]
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-neutral-600 flex items-start gap-2"
                    >
                      <span className="text-primary-500 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
