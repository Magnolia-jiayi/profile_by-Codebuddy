import React from 'react'
import { Plus, Trash2, Save, X, FileText } from 'lucide-react'

// 教育背景内联编辑器
export const EducationEditor = ({ data, setData, onCancel }) => {
  const handleChange = (field, value) => {
    setData({ ...data, [field]: value })
  }

  const handleCourseChange = (index, value) => {
    const newCourses = [...data.courses]
    newCourses[index] = value
    setData({ ...data, courses: newCourses })
  }

  const addCourse = () => {
    setData({ ...data, courses: [...data.courses, ''] })
  }

  const removeCourse = (index) => {
    const newCourses = data.courses.filter((_, i) => i !== index)
    setData({ ...data, courses: newCourses })
  }

  return (
    <div className="bg-neutral-50 rounded-xl p-6 space-y-4 border-2 border-primary-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-primary-700">编辑教育背景</h3>
        <div className="flex gap-2">
          <button
            onClick={onCancel}
            className="flex items-center gap-2 px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-200 rounded-lg transition-colors"
          >
            <X size={16} />
            取消
          </button>
          <button
            onClick={onCancel}
            className="flex items-center gap-2 px-4 py-2 text-sm bg-primary-500 text-white hover:bg-primary-600 rounded-lg transition-colors"
          >
            <Save size={16} />
            保存
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">学校</label>
          <input
            type="text"
            value={data.school}
            onChange={(e) => handleChange('school', e.target.value)}
            className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">专业</label>
          <input
            type="text"
            value={data.major}
            onChange={(e) => handleChange('major', e.target.value)}
            className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">学位</label>
          <input
            type="text"
            value={data.degree}
            onChange={(e) => handleChange('degree', e.target.value)}
            className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">时间段</label>
            <input
              type="text"
              value={data.period}
              onChange={(e) => handleChange('period', e.target.value)}
              className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">GPA</label>
            <input
              type="text"
              value={data.gpa}
              onChange={(e) => handleChange('gpa', e.target.value)}
              className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium text-neutral-700">主修课程</label>
          <button
            onClick={addCourse}
            className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700"
          >
            <Plus size={16} />
            添加课程
          </button>
        </div>
        <div className="space-y-2">
          {data.courses.map((course, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={course}
                onChange={(e) => handleCourseChange(index, e.target.value)}
                className="flex-1 px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                onClick={() => removeCourse(index)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// 实习经历内联编辑器
export const InternshipEditor = ({ data, setData, onCancel }) => {
  const addInternship = () => {
    setData([
      ...data,
      {
        id: Date.now(),
        company: '',
        position: '',
        period: '',
        location: '',
        responsibilities: [],
        achievements: '',
      },
    ])
  }

  const updateInternship = (index, field, value) => {
    const newData = [...data]
    newData[index] = { ...newData[index], [field]: value }
    setData(newData)
  }

  const removeInternship = (index) => {
    setData(data.filter((_, i) => i !== index))
  }

  return (
    <div className="bg-neutral-50 rounded-xl p-6 space-y-6 border-2 border-primary-300">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-primary-700">编辑实习经历</h3>
        <div className="flex gap-2">
          <button
            onClick={onCancel}
            className="flex items-center gap-2 px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-200 rounded-lg transition-colors"
          >
            <X size={16} />
            取消
          </button>
          <button
            onClick={onCancel}
            className="flex items-center gap-2 px-4 py-2 text-sm bg-primary-500 text-white hover:bg-primary-600 rounded-lg transition-colors"
          >
            <Save size={16} />
            保存
          </button>
        </div>
      </div>

      <button
        onClick={addInternship}
        className="flex items-center gap-2 px-4 py-2.5 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors"
      >
        <Plus size={18} />
        添加实习经历
      </button>

      {data.map((item, index) => (
        <div key={item.id} className="bg-white rounded-xl p-5 space-y-4 shadow-sm border border-neutral-200">
          <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-neutral-800">实习 #{index + 1}</h4>
            <button
              onClick={() => removeInternship(index)}
              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            >
              <Trash2 size={18} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">公司</label>
              <input
                type="text"
                value={item.company}
                onChange={(e) => updateInternship(index, 'company', e.target.value)}
                className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">职位</label>
              <input
                type="text"
                value={item.position}
                onChange={(e) => updateInternship(index, 'position', e.target.value)}
                className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">时间段</label>
              <input
                type="text"
                value={item.period}
                onChange={(e) => updateInternship(index, 'period', e.target.value)}
                className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">位置</label>
              <input
                type="text"
                value={item.location}
                onChange={(e) => updateInternship(index, 'location', e.target.value)}
                className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">核心成果</label>
            <input
              type="text"
              value={item.achievements}
              onChange={(e) => updateInternship(index, 'achievements', e.target.value)}
              className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-neutral-700">核心职责</label>
              <button
                onClick={() => {
                  const newResponsibilities = [...(item.responsibilities || []), '']
                  updateInternship(index, 'responsibilities', newResponsibilities)
                }}
                className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700"
              >
                <Plus size={16} />
                添加职责
              </button>
            </div>
            <div className="space-y-2">
              {(item.responsibilities || []).map((resp, rIndex) => (
                <div key={rIndex} className="flex gap-2">
                  <input
                    type="text"
                    value={resp}
                    onChange={(e) => {
                      const newResp = [...(item.responsibilities || [])]
                      newResp[rIndex] = e.target.value
                      updateInternship(index, 'responsibilities', newResp)
                    }}
                    className="flex-1 px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <button
                    onClick={() => {
                      const newResp = (item.responsibilities || []).filter((_, i) => i !== rIndex)
                      updateInternship(index, 'responsibilities', newResp)
                    }}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// 项目经历内联编辑器
export const ProjectEditor = ({ data, setData, onCancel }) => {
  const addProject = () => {
    setData([
      ...data,
      {
        id: Date.now(),
        title: '',
        role: '',
        period: '',
        description: '',
        contribution: [],
        result: '',
        tech: [],
        feishuUrl: '',
      },
    ])
  }

  const updateProject = (index, field, value) => {
    const newData = [...data]
    newData[index] = { ...newData[index], [field]: value }
    setData(newData)
  }

  const removeProject = (index) => {
    setData(data.filter((_, i) => i !== index))
  }

  return (
    <div className="bg-neutral-50 rounded-xl p-6 space-y-6 border-2 border-primary-300">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-primary-700">编辑项目经历</h3>
        <div className="flex gap-2">
          <button
            onClick={onCancel}
            className="flex items-center gap-2 px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-200 rounded-lg transition-colors"
          >
            <X size={16} />
            取消
          </button>
          <button
            onClick={onCancel}
            className="flex items-center gap-2 px-4 py-2 text-sm bg-primary-500 text-white hover:bg-primary-600 rounded-lg transition-colors"
          >
            <Save size={16} />
            保存
          </button>
        </div>
      </div>

      <button
        onClick={addProject}
        className="flex items-center gap-2 px-4 py-2.5 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors"
      >
        <Plus size={18} />
        添加项目经历
      </button>

      {data.map((item, index) => (
        <div key={item.id} className="bg-white rounded-xl p-5 space-y-4 shadow-sm border border-neutral-200">
          <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-neutral-800">项目 #{index + 1}</h4>
            <button
              onClick={() => removeProject(index)}
              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            >
              <Trash2 size={18} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">项目名称</label>
              <input
                type="text"
                value={item.title}
                onChange={(e) => updateProject(index, 'title', e.target.value)}
                className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">角色</label>
              <input
                type="text"
                value={item.role}
                onChange={(e) => updateProject(index, 'role', e.target.value)}
                className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">时间段</label>
            <input
              type="text"
              value={item.period}
              onChange={(e) => updateProject(index, 'period', e.target.value)}
              className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">项目描述</label>
            <textarea
              value={item.description}
              onChange={(e) => updateProject(index, 'description', e.target.value)}
              rows={2}
              className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-neutral-700">个人贡献</label>
              <button
                onClick={() => {
                  const newContribution = [...(item.contribution || []), '']
                  updateProject(index, 'contribution', newContribution)
                }}
                className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700"
              >
                <Plus size={16} />
                添加贡献
              </button>
            </div>
            <div className="space-y-2">
              {(item.contribution || []).map((contrib, cIndex) => (
                <div key={cIndex} className="flex gap-2">
                  <input
                    type="text"
                    value={contrib}
                    onChange={(e) => {
                      const newContrib = [...(item.contribution || [])]
                      newContrib[cIndex] = e.target.value
                      updateProject(index, 'contribution', newContrib)
                    }}
                    className="flex-1 px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <button
                    onClick={() => {
                      const newContrib = (item.contribution || []).filter((_, i) => i !== cIndex)
                      updateProject(index, 'contribution', newContrib)
                    }}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">成果</label>
            <textarea
              value={item.result}
              onChange={(e) => updateProject(index, 'result', e.target.value)}
              rows={2}
              className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">技术栈（用逗号分隔）</label>
            <input
              type="text"
              value={item.tech.join(', ')}
              onChange={(e) => updateProject(index, 'tech', e.target.value.split(',').map(s => s.trim()))}
              className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">飞书文档链接</label>
            <input
              type="text"
              value={item.feishuUrl}
              onChange={(e) => updateProject(index, 'feishuUrl', e.target.value)}
              className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

// 作品集编辑器
export const PortfolioEditor = ({ data, setData, onCancel }) => {
  const addItem = () => {
    setData([
      ...data,
      {
        id: Date.now(),
        title: '',
        category: '',
        image: '📱',
        description: '',
        tech: [],
        url: '',
        attachments: [],
      },
    ])
  }

  const updateItem = (index, field, value) => {
    const newData = [...data]
    newData[index] = { ...newData[index], [field]: value }
    setData(newData)
  }

  const removeItem = (index) => {
    setData(data.filter((_, i) => i !== index))
  }

  const handleFileUpload = async (index, event) => {
    const files = event.target.files
    if (files.length === 0) return

    const attachments = [...(data[index].attachments || [])]
    for (const file of files) {
      // 将文件转换为 Data URL
      const reader = new FileReader()
      reader.onload = (e) => {
        attachments.push({
          name: file.name,
          type: file.type,
          size: file.size,
          dataUrl: e.target.result,
        })
        updateItem(index, 'attachments', attachments)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeAttachment = (index, attachmentIndex) => {
    const attachments = [...(data[index].attachments || [])]
    attachments.splice(attachmentIndex, 1)
    updateItem(index, 'attachments', attachments)
  }

  return (
    <div className="bg-neutral-50 rounded-xl p-6 space-y-6 border-2 border-primary-300">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-primary-700">编辑作品集</h3>
        <div className="flex gap-2">
          <button
            onClick={onCancel}
            className="flex items-center gap-2 px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-200 rounded-lg transition-colors"
          >
            <X size={16} />
            取消
          </button>
          <button
            onClick={onCancel}
            className="flex items-center gap-2 px-4 py-2 text-sm bg-primary-500 text-white hover:bg-primary-600 rounded-lg transition-colors"
          >
            <Save size={16} />
            保存
          </button>
        </div>
      </div>

      <button
        onClick={addItem}
        className="flex items-center gap-2 px-4 py-2.5 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors"
      >
        <Plus size={18} />
        添加作品
      </button>

      {data.map((item, index) => (
        <div key={item.id} className="bg-white rounded-xl p-5 space-y-4 shadow-sm border border-neutral-200">
          <div className="flex items-center justify-between">
            <h4 className="text-md font-semibold text-neutral-800">作品 #{index + 1}</h4>
            <button
              onClick={() => removeItem(index)}
              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            >
              <Trash2 size={18} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">作品名称</label>
              <input
                type="text"
                value={item.title}
                onChange={(e) => updateItem(index, 'title', e.target.value)}
                className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">分类</label>
              <input
                type="text"
                value={item.category}
                onChange={(e) => updateItem(index, 'category', e.target.value)}
                className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">展示图标(emoji)</label>
            <input
              type="text"
              value={item.image}
              onChange={(e) => updateItem(index, 'image', e.target.value)}
              className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">描述</label>
            <textarea
              value={item.description}
              onChange={(e) => updateItem(index, 'description', e.target.value)}
              rows={2}
              className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">技术栈(用逗号分隔)</label>
            <input
              type="text"
              value={item.tech.join(', ')}
              onChange={(e) => updateItem(index, 'tech', e.target.value.split(',').map(s => s.trim()))}
              className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">链接</label>
            <input
              type="text"
              value={item.url}
              onChange={(e) => updateItem(index, 'url', e.target.value)}
              className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">附件上传</label>
            <label className="flex items-center gap-2 px-4 py-3 border-2 border-dashed border-neutral-300 rounded-lg cursor-pointer hover:border-primary-500 transition-colors">
              <Plus size={18} className="text-neutral-400" />
              <span className="text-sm text-neutral-600">点击上传附件(图片/PDF/PPT等)</span>
              <input
                type="file"
                multiple
                accept="image/*,.pdf,.ppt,.pptx,.doc,.docx"
                onChange={(e) => handleFileUpload(index, e)}
                className="hidden"
              />
            </label>
          </div>

          {/* 附件列表 */}
          {(item.attachments || []).length > 0 && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-neutral-700">已上传附件</label>
              <div className="space-y-2">
                {(item.attachments || []).map((attachment, attachmentIndex) => (
                  <div
                    key={attachmentIndex}
                    className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg border border-neutral-200"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <FileText size={18} className="text-primary-600 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-neutral-900 truncate">{attachment.name}</p>
                        <p className="text-xs text-neutral-500">
                          {(attachment.size / 1024).toFixed(1)} KB · {attachment.type}
                        </p>
                      </div>
                    </div>
                    {attachment.dataUrl && attachment.type.startsWith('image/') && (
                      <img
                        src={attachment.dataUrl}
                        alt={attachment.name}
                        className="w-16 h-16 object-cover rounded-lg border border-neutral-200"
                      />
                    )}
                    <button
                      onClick={() => removeAttachment(index, attachmentIndex)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors ml-2"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
