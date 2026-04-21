import React, { useState } from 'react'
import { usePortfolio } from '../context/PortfolioContext'
import { ExternalLink, Clock, User, CheckCircle, Edit2 } from 'lucide-react'
import { ProjectEditor } from './InlineEditors'
import PasswordModal from './PasswordModal'
import SectionTitle from './SectionTitle'
import { verifyPassword } from '../utils/password'

const Projects = () => {
  const { projects, setProjects } = usePortfolio()
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
    <section id="projects" className="my-8 py-20 bg-neutral-50 rounded-2xl shadow-lg border border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <SectionTitle 
            title="项目经历" 
            subtitle="突出个人贡献与项目成果"
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
          <ProjectEditor data={projects} setData={setProjects} onCancel={() => setIsEditing(false)} />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md border border-neutral-100 p-6 hover:shadow-xl transition-all hover:border-primary-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary-600">{project.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-neutral-500 mb-4">
                <span className="flex items-center gap-1">
                  <Clock size={12} className="text-primary-600" />
                  {project.period}
                </span>
              </div>

              <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-primary-50 text-primary-600 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-2.5 mb-4">
                {project.contribution.slice(0, 3).map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-neutral-600">
                    <CheckCircle size={12} className="text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
                {project.contribution.length > 3 && (
                  <p className="text-xs text-neutral-500 ml-4">
                    +{project.contribution.length - 3} 更多...
                  </p>
                )}
              </div>

              <div className="bg-primary-50 rounded-lg p-3 mb-4">
                <p className="text-xs text-primary-600">
                  <span className="font-medium">成果：</span>
                  <span className="text-neutral-600">{project.result}</span>
                </p>
              </div>

              {project.feishuUrl && (
                <a
                  href={project.feishuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  查看详情
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
        )}
      </div>
    </section>
  )
}

export default Projects