import React, { useState } from 'react'
import { usePortfolio } from '../context/PortfolioContext'
import { GraduationCap, Calendar, TrendingUp, Edit2 } from 'lucide-react'
import { EducationEditor } from './InlineEditors'
import PasswordModal from './PasswordModal'
import SectionTitle from './SectionTitle'
import { verifyPassword } from '../utils/password'

const Education = () => {
  const { education, setEducation } = usePortfolio()
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

  return (
    <section id="education" className="my-8 py-20 bg-neutral-50 rounded-2xl shadow-lg border border-neutral-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <SectionTitle 
            title="教育背景" 
            subtitle="学术经历与课程学习"
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
          <EducationEditor data={education} setData={setEducation} onCancel={() => setIsEditing(false)} />
        ) : (
          <div className="bg-white rounded-2xl shadow-lg border border-neutral-100 p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                {education.school}
              </h3>
              <p className="text-xl text-neutral-600">
                {education.major} · {education.degree}
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-4 text-sm text-neutral-500">
              <span className="flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-lg shadow-sm">
                <Calendar size={16} className="text-primary-600" />
                {education.period}
              </span>
              <span className="flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-lg shadow-sm">
                <TrendingUp size={16} className="text-primary-600" />
                GPA: {education.gpa}
              </span>
            </div>
          </div>

          <div className="border-t border-neutral-200 pt-6">
            <h4 className="text-sm font-medium text-neutral-500 mb-3">
              主修课程
            </h4>
            <div className="flex flex-wrap gap-2">
              {education.courses.map((course, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-primary-50 text-primary-600 rounded-full text-sm font-medium shadow-sm"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  )
}

export default Education