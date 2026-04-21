import React, { useState } from 'react'
import { usePortfolio } from '../context/PortfolioContext'
import { ExternalLink, Clock, User, CheckCircle, Edit2 } from 'lucide-react'
import { ProjectEditor } from './InlineEditors'

const Projects = () => {
  const { projects, setProjects } = usePortfolio()
  const [isEditing, setIsEditing] = useState(false)

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div className="text-center flex-1">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              项目经历
            </h2>
            <p className="text-neutral-600">
              突出个人贡献与项目成果
            </p>
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
          <ProjectEditor data={projects} setData={setProjects} onCancel={() => setIsEditing(false)} />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md border border-neutral-100 p-6 hover:shadow-xl transition-all hover:border-primary-300"
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
                  <Clock size={12} />
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
                    className="px-2.5 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-2.5 mb-4">
                {project.contribution.slice(0, 3).map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-neutral-600">
                    <CheckCircle size={12} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
                {project.contribution.length > 3 && (
                  <p className="text-xs text-neutral-400 ml-4">
                    +{project.contribution.length - 3} 更多...
                  </p>
                )}
              </div>

              <div className="bg-gradient-to-r from-primary-50 to-orange-50 rounded-lg p-3 mb-4">
                <p className="text-xs text-primary-700">
                  <span className="font-medium">成果：</span>
                  {project.result}
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
