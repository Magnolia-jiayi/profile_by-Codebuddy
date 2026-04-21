import React, { useState } from 'react'
import { usePortfolio } from '../context/PortfolioContext'
import { Briefcase, MapPin, Award, Target, Edit2 } from 'lucide-react'
import { InternshipEditor } from './InlineEditors'

const Internship = () => {
  const { internships, setInternships } = usePortfolio()
  const [isEditing, setIsEditing] = useState(false)

  return (
    <section id="internship" className="py-20 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div className="text-center flex-1">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              实习经历
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
          <InternshipEditor data={internships} setData={setInternships} onCancel={() => setIsEditing(false)} />
        ) : (
          <div className="space-y-6">
          {internships.map((internship, index) => (
            <div
              key={internship.id}
              className="relative pl-8 pb-8 border-l-2 border-primary-200 last:pb-0 last:border-l-0"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full ring-4 ring-white"></div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-1">
                      {internship.company}
                    </h3>
                    <p className="text-primary-600 font-medium">
                      {internship.position}
                    </p>
                  </div>
                  <div className="mt-3 sm:mt-0 flex flex-wrap gap-3 text-sm text-neutral-500">
                    <span className="flex items-center gap-1 bg-neutral-100 px-3 py-1 rounded-full">
                      <Calendar size={14} />
                      {internship.period}
                    </span>
                    <span className="flex items-center gap-1 bg-neutral-100 px-3 py-1 rounded-full">
                      <MapPin size={14} />
                      {internship.location}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-neutral-700 font-medium mb-2">
                      <Target size={16} className="text-primary-500" />
                      核心职责
                    </div>
                    <ul className="space-y-1.5 ml-6">
                      {internship.responsibilities.map((item, i) => (
                        <li key={i} className="text-neutral-600 text-sm leading-relaxed">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-primary-50 to-orange-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-primary-700 text-sm">
                      <Award size={16} />
                      <span className="font-medium">核心成果：</span>
                      <span>{internship.achievements}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>
    </section>
  )
}

// Helper icon
function Calendar({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

export default Internship
