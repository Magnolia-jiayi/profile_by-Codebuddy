import React, { useState } from 'react'
import { usePortfolio } from '../context/PortfolioContext'
import { X, Plus, Trash2, Save, Download, Upload } from 'lucide-react'

const Editor = ({ onClose }) => {
  const {
    personalInfo,
    setPersonalInfo,
    education,
    setEducation,
    internships,
    setInternships,
    projects,
    setProjects,
    skills,
    setSkills,
    portfolioItems,
    setPortfolioItems,
    xiaohongshuInfo,
    setXiaohongshuInfo,
    exportData,
    importData,
  } = usePortfolio()

  const [activeTab, setActiveTab] = useState('personal')

  const handleFileImport = async (e) => {
    const file = e.target.files[0]
    if (file) {
      try {
        await importData(file)
        alert('导入成功！')
      } catch (error) {
        alert('导入失败，请检查文件格式')
      }
    }
  }

  const tabs = [
    { id: 'personal', label: '个人信息' },
    { id: 'education', label: '教育背景' },
    { id: 'internship', label: '实习经历' },
    { id: 'project', label: '项目经历' },
    { id: 'skills', label: '专业技能' },
    { id: 'portfolio', label: '作品集' },
    { id: 'xiaohongshu', label: '小红书' },
  ]

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-200">
          <h2 className="text-2xl font-bold text-neutral-900">内容编辑器</h2>
          <div className="flex items-center gap-3">
            <button
              onClick={exportData}
              className="flex items-center gap-2 px-3 py-2 text-sm text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
            >
              <Download size={16} />
              导出
            </button>
            <label className="flex items-center gap-2 px-3 py-2 text-sm text-primary-600 hover:bg-primary-50 rounded-lg transition-colors cursor-pointer">
              <Upload size={16} />
              导入
              <input type="file" accept=".json" onChange={handleFileImport} className="hidden" />
            </label>
            <button
              onClick={onClose}
              className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-neutral-200 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'personal' && <PersonalEditor data={personalInfo} setData={setPersonalInfo} />}
          {activeTab === 'education' && <EducationEditor data={education} setData={setEducation} />}
          {activeTab === 'internship' && <InternshipEditor data={internships} setData={setInternships} />}
          {activeTab === 'project' && <ProjectEditor data={projects} setData={setProjects} />}
          {activeTab === 'skills' && <SkillsEditor data={skills} setData={setSkills} />}
          {activeTab === 'portfolio' && <PortfolioEditor data={portfolioItems} setData={setPortfolioItems} />}
          {activeTab === 'xiaohongshu' && <XiaohongshuEditor data={xiaohongshuInfo} setData={setXiaohongshuInfo} />}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-neutral-200 bg-neutral-50">
          <p className="text-sm text-neutral-500">
            所有更改会自动保存到本地浏览器
          </p>
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-6 py-2.5 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors"
          >
            <Save size={18} />
            完成
          </button>
        </div>
      </div>
    </div>
  )
}

// 个人信息编辑器
const PersonalEditor = ({ data, setData }) => {
  const handleChange = (field, value) => {
    setData({ ...data, [field]: value })
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-2">姓名</label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-2">应聘岗位</label>
        <input
          type="text"
          value={data.position}
          onChange={(e) => handleChange('position', e.target.value)}
          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-2">头像 URL</label>
        <input
          type="text"
          value={data.avatar}
          onChange={(e) => handleChange('avatar', e.target.value)}
          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-2">邮箱</label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-2">微信号</label>
        <input
          type="text"
          value={data.wechat}
          onChange={(e) => handleChange('wechat', e.target.value)}
          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-2">位置</label>
        <input
          type="text"
          value={data.location}
          onChange={(e) => handleChange('location', e.target.value)}
          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>
    </div>
  )
}

// 教育背景编辑器
const EducationEditor = ({ data, setData }) => {
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
    <div className="space-y-6 max-w-2xl">
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
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-2">学位</label>
        <input
          type="text"
          value={data.degree}
          onChange={(e) => handleChange('degree', e.target.value)}
          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
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

// 实习经历编辑器
const InternshipEditor = ({ data, setData }) => {
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
    <div className="space-y-6">
      <button
        onClick={addInternship}
        className="flex items-center gap-2 px-4 py-2.5 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors"
      >
        <Plus size={18} />
        添加实习经历
      </button>

      {data.map((item, index) => (
        <div key={item.id} className="bg-neutral-50 rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">实习 #{index + 1}</h3>
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

// 项目经历编辑器
const ProjectEditor = ({ data, setData }) => {
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
    <div className="space-y-6">
      <button
        onClick={addProject}
        className="flex items-center gap-2 px-4 py-2.5 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors"
      >
        <Plus size={18} />
        添加项目经历
      </button>

      {data.map((item, index) => (
        <div key={item.id} className="bg-neutral-50 rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">项目 #{index + 1}</h3>
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
              rows={3}
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

// 专业技能编辑器（简化版）
const SkillsEditor = ({ data, setData }) => {
  return (
    <div className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-sm text-yellow-800">
          专业技能编辑器正在开发中，您可以通过修改代码来调整技能分类。
          <br />
          当前分类：{data.categories.map(c => c.title).join('、')}
        </p>
      </div>
    </div>
  )
}

// 作品集编辑器
const PortfolioEditor = ({ data, setData }) => {
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

  return (
    <div className="space-y-6">
      <button
        onClick={addItem}
        className="flex items-center gap-2 px-4 py-2.5 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors"
      >
        <Plus size={18} />
        添加作品
      </button>

      {data.map((item, index) => (
        <div key={item.id} className="bg-neutral-50 rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">作品 #{index + 1}</h3>
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
            <label className="block text-sm font-medium text-neutral-700 mb-2">描述</label>
            <textarea
              value={item.description}
              onChange={(e) => updateItem(index, 'description', e.target.value)}
              rows={2}
              className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">技术栈（用逗号分隔）</label>
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
        </div>
      ))}
    </div>
  )
}

// 小红书编辑器
const XiaohongshuEditor = ({ data, setData }) => {
  const handleChange = (field, value) => {
    setData({ ...data, [field]: value })
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-2">昵称</label>
        <input
          type="text"
          value={data.nickname}
          onChange={(e) => handleChange('nickname', e.target.value)}
          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-2">ID</label>
        <input
          type="text"
          value={data.id}
          onChange={(e) => handleChange('id', e.target.value)}
          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-2">粉丝数</label>
        <input
          type="text"
          value={data.followers}
          onChange={(e) => handleChange('followers', e.target.value)}
          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-2">简介</label>
        <textarea
          value={data.bio}
          onChange={(e) => handleChange('bio', e.target.value)}
          rows={2}
          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-2">主页链接</label>
        <input
          type="text"
          value={data.url}
          onChange={(e) => handleChange('url', e.target.value)}
          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>
    </div>
  )
}

export default Editor
