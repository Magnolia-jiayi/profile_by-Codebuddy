import React, { useState } from 'react'
import { usePortfolio } from '../context/PortfolioContext'
import { ExternalLink, BookOpen, Edit2, FileText } from 'lucide-react'
import { PortfolioEditor } from './InlineEditors'

const Portfolio = () => {
  const { portfolioItems, learningNotes, setPortfolioItems, setLearningNotes } = usePortfolio()
  const [isEditing, setIsEditing] = useState(false)

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div className="text-center flex-1">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              作品集
            </h2>
            <p className="text-neutral-600">
              展示具体的项目成果
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
          <PortfolioEditor
            data={portfolioItems}
            setData={setPortfolioItems}
            learningNotes={learningNotes}
            setLearningNotes={setLearningNotes}
            onCancel={() => setIsEditing(false)}
          />
        ) : (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md border border-neutral-100 overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-50 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300">
                {item.image}
              </div>

              <div className="p-5">
                <span className="inline-block px-2.5 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium mb-3">
                  {item.category}
                </span>

                <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={item.url}
                  className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700 font-medium group/link"
                >
                  查看详情
                  <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>

                {/* 附件列表 */}
                {(item.attachments || []).length > 0 && (
                  <div className="mt-4 pt-4 border-t border-neutral-100">
                    <p className="text-xs text-neutral-500 mb-2">附件:</p>
                    <div className="space-y-2">
                      {(item.attachments || []).map((attachment, attachmentIndex) => (
                        <a
                          key={attachmentIndex}
                          href={attachment.dataUrl}
                          download={attachment.name}
                          className="flex items-center gap-2 p-2 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors"
                        >
                          <FileText size={16} className="text-primary-600 flex-shrink-0" />
                          <span className="text-xs font-medium text-neutral-700 truncate">{attachment.name}</span>
                          <span className="text-xs text-neutral-400">
                            ({(attachment.size / 1024).toFixed(1)} KB)
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 学习复盘入口 */}
        <div className="bg-gradient-to-br from-primary-500 to-orange-500 rounded-2xl shadow-lg p-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <BookOpen size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  {learningNotes.title}
                </h3>
                <p className="text-white/90 text-sm mb-4">
                  {learningNotes.description}
                </p>
              </div>
            </div>

            <a
              href={learningNotes.feishuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 font-medium rounded-xl hover:bg-white/90 transition-colors"
            >
              访问飞书文档
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Portfolio
