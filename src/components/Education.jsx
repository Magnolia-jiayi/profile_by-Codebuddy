import React, { useState } from 'react'
import { usePortfolio } from '../context/PortfolioContext'
import { GraduationCap, Calendar, TrendingUp, Edit2 } from 'lucide-react'
import { EducationEditor } from './InlineEditors'

const Education = () => {
  const { education, setEducation } = usePortfolio()
  const [isEditing, setIsEditing] = useState(false)

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div className="text-center flex-1">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              教育背景
            </h2>
          </div>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 bg-primary-100 hover:bg-primary-200 text-primary-600 rounded-lg transition-colors"
              title="编辑"
            >
              <Edit2 size={20} />
            </button>
          )}
        </div>

        {isEditing ? (
          <EducationEditor data={education} setData={setEducation} onCancel={() => setIsEditing(false)} />
        ) : (
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg border border-primary-100 p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                {education.school}
              </h3>
              <p className="text-xl text-neutral-700">
                {education.major} · {education.degree}
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-4 text-sm text-neutral-600">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Calendar size={16} />
                {education.period}
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <TrendingUp size={16} />
                GPA: {education.gpa}
              </span>
            </div>
          </div>

          <div className="border-t border-primary-200 pt-6">
            <h4 className="text-sm font-medium text-neutral-500 mb-3">
              主修课程
            </h4>
            <div className="flex flex-wrap gap-2">
              {education.courses.map((course, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-white text-primary-700 rounded-full text-sm font-medium shadow-sm"
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
