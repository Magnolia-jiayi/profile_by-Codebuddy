import React, { useState } from 'react'
import { usePortfolio } from '../context/PortfolioContext'
import { Database, Cpu, Box, Edit2 } from 'lucide-react'
import PasswordModal from './PasswordModal'
import SectionTitle from './SectionTitle'
import { verifyPassword } from '../utils/password'

const Skills = () => {
  const { skills, setSkills } = usePortfolio()
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [passwordError, setPasswordError] = useState('')
  const [isEditing, setIsEditing] = useState(false)

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
  const icons = {
    '数据': Database,
    'AI技术': Cpu,
    '产品': Box,
  }

  return (
    <section id="skills" className="my-8 py-16 bg-white rounded-2xl shadow-lg border border-neutral-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <SectionTitle 
            title="专业技能" 
            subtitle="核心能力概览"
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

        <div className="grid md:grid-cols-3 gap-6">
          {skills.categories.map((category, index) => {
            const Icon = icons[category.title]
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
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
                      <span className="text-primary-600 mt-0.5">•</span>
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