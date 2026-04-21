import React, { createContext, useContext, useState, useEffect } from 'react'
import {
  initialPersonalInfo,
  initialEducation,
  initialInternships,
  initialProjects,
  initialSkills,
  initialPortfolioItems,
  initialLearningNotes,
  initialXiaohongshuInfo,
  initialSocialLinks,
} from '../data/portfolio'

const PortfolioContext = createContext(null)

export const usePortfolio = () => {
  const context = useContext(PortfolioContext)
  if (!context) {
    throw new Error('usePortfolio must be used within PortfolioProvider')
  }
  return context
}

export const PortfolioProvider = ({ children }) => {
  // 从 localStorage 加载数据，如果没有则使用初始数据
  const [personalInfo, setPersonalInfo] = useState(() => {
    const saved = localStorage.getItem('personalInfo')
    return saved ? JSON.parse(saved) : initialPersonalInfo
  })

  const [education, setEducation] = useState(() => {
    const saved = localStorage.getItem('education')
    return saved ? JSON.parse(saved) : initialEducation
  })

  const [internships, setInternships] = useState(() => {
    const saved = localStorage.getItem('internships')
    return saved ? JSON.parse(saved) : initialInternships
  })

  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('projects')
    return saved ? JSON.parse(saved) : initialProjects
  })

  const [skills, setSkills] = useState(() => {
    const saved = localStorage.getItem('skills')
    return saved ? JSON.parse(saved) : initialSkills
  })

  const [portfolioItems, setPortfolioItems] = useState(() => {
    const saved = localStorage.getItem('portfolioItems')
    return saved ? JSON.parse(saved) : initialPortfolioItems
  })

  const [xiaohongshuInfo, setXiaohongshuInfo] = useState(() => {
    const saved = localStorage.getItem('xiaohongshuInfo')
    return saved ? JSON.parse(saved) : initialXiaohongshuInfo
  })

  const [learningNotes, setLearningNotes] = useState(() => {
    const saved = localStorage.getItem('learningNotes')
    return saved ? JSON.parse(saved) : initialLearningNotes
  })

  const [socialLinks, setSocialLinks] = useState(() => {
    const saved = localStorage.getItem('socialLinks')
    return saved ? JSON.parse(saved) : initialSocialLinks
  })

  // 保存到 localStorage
  useEffect(() => {
    localStorage.setItem('personalInfo', JSON.stringify(personalInfo))
  }, [personalInfo])

  useEffect(() => {
    localStorage.setItem('education', JSON.stringify(education))
  }, [education])

  useEffect(() => {
    localStorage.setItem('internships', JSON.stringify(internships))
  }, [internships])

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects))
  }, [projects])

  useEffect(() => {
    localStorage.setItem('skills', JSON.stringify(skills))
  }, [skills])

  useEffect(() => {
    localStorage.setItem('portfolioItems', JSON.stringify(portfolioItems))
  }, [portfolioItems])

  useEffect(() => {
    localStorage.setItem('xiaohongshuInfo', JSON.stringify(xiaohongshuInfo))
  }, [xiaohongshuInfo])

  useEffect(() => {
    localStorage.setItem('learningNotes', JSON.stringify(learningNotes))
  }, [learningNotes])

  useEffect(() => {
    localStorage.setItem('socialLinks', JSON.stringify(socialLinks))
  }, [socialLinks])

  // 导出所有数据
  const exportData = () => {
    const data = {
      personalInfo,
      education,
      internships,
      projects,
      skills,
      portfolioItems,
      learningNotes,
      xiaohongshuInfo,
      socialLinks,
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'portfolio-data.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  // 导入数据
  const importData = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result)
          if (data.personalInfo) setPersonalInfo(data.personalInfo)
          if (data.education) setEducation(data.education)
          if (data.internships) setInternships(data.internships)
          if (data.projects) setProjects(data.projects)
          if (data.skills) setSkills(data.skills)
          if (data.portfolioItems) setPortfolioItems(data.portfolioItems)
          if (data.xiaohongshuInfo) setXiaohongshuInfo(data.xiaohongshuInfo)
          if (data.learningNotes) setLearningNotes(data.learningNotes)
          if (data.socialLinks) setSocialLinks(data.socialLinks)
          resolve(true)
        } catch (error) {
          reject(error)
        }
      }
      reader.readAsText(file)
    })
  }

  const value = {
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
    learningNotes,
    setLearningNotes,
    xiaohongshuInfo,
    setXiaohongshuInfo,
    socialLinks,
    setSocialLinks,
    exportData,
    importData,
  }

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>
}
