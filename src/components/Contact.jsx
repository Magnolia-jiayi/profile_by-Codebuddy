import React, { useState } from 'react'
import { usePortfolio } from '../context/PortfolioContext'
import { Copy, Check, ExternalLink } from 'lucide-react'
import { Github, BookOpen, Mail, MessageCircle } from 'lucide-react'

const Contact = () => {
  const { personalInfo, xiaohongshuInfo, socialLinks } = usePortfolio()
  const [copied, setCopied] = useState('')

  const handleCopy = (type, value) => {
    navigator.clipboard.writeText(value)
    setCopied(type)
    setTimeout(() => setCopied(''), 2000)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            联系我
          </h2>
        </div>

        {/* 小红书博主模块 */}
        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-lg p-8 mb-8 text-white">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src={xiaohongshuInfo.avatar}
                alt={xiaohongshuInfo.nickname}
                className="w-16 h-16 rounded-full ring-4 ring-white/30"
              />
              <div>
                <p className="text-2xl font-bold mb-1">
                  {xiaohongshuInfo.nickname}
                </p>
                <p className="text-red-100 text-sm mb-2">{xiaohongshuInfo.id}</p>
                <p className="text-red-50 text-sm">{xiaohongshuInfo.bio}</p>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-3xl font-bold mb-1">{xiaohongshuInfo.followers}</p>
              <p className="text-red-100 text-sm mb-3">粉丝数</p>
              <a
                href={xiaohongshuInfo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-red-600 font-medium rounded-lg hover:bg-white/90 transition-colors"
              >
                访问主页
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* 联系方式 */}
        <div className="bg-white rounded-2xl shadow-lg border border-neutral-100 p-8">
          <div className="space-y-5">
            {/* 邮箱 */}
            <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 mb-1">邮箱</p>
                  <p className="font-medium text-neutral-900">{personalInfo.email}</p>
                </div>
              </div>
              <button
                onClick={() => handleCopy('email', personalInfo.email)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 hover:border-primary-500 hover:text-primary-600 rounded-lg text-sm font-medium transition-all"
              >
                {copied === 'email' ? (
                  <>
                    <Check size={16} />
                    已复制
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    复制
                  </>
                )}
              </button>
            </div>

            {/* 微信 */}
            <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 2C5.5 2 3.5 4 3.5 6.5c0 1.5.7 2.8 1.8 3.7l-.5 1.8 1.9-.7c.8.3 1.6.5 2.3.5.1 0 .2 0 .3 0-.2-.6-.3-1.2-.3-1.9 0-3 2.5-5.5 5.5-5.5.3 0 .6 0 .9.1C14.7 2.8 11.5 2 8 2zM6 5.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm4 0c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm5 3c-2.8 0-5 2-5 4.5s2.2 4.5 5 4.5c.8 0 1.5-.2 2.2-.4l1.6.6-.4-1.5c.9-.7 1.6-1.9 1.6-3.2 0-2.5-2.2-4.5-5-4.5zm-2 2c.4 0 .8.3.8.7s-.4.8-.8.8-.8-.3-.8-.8.4-.7.8-.7zm4 0c.4 0 .8.3.8.7s-.4.8-.8.8-.8-.3-.8-.8.4-.7.8-.7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-neutral-500 mb-1">微信</p>
                  <p className="font-medium text-neutral-900">{personalInfo.wechat}</p>
                </div>
              </div>
              <button
                onClick={() => handleCopy('wechat', personalInfo.wechat)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 hover:border-green-500 hover:text-green-600 rounded-lg text-sm font-medium transition-all"
              >
                {copied === 'wechat' ? (
                  <>
                    <Check size={16} />
                    已复制
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    复制
                  </>
                )}
              </button>
            </div>

            {/* 位置 */}
            <div className="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-1">所在地区</p>
                <p className="font-medium text-neutral-900">{personalInfo.location}</p>
              </div>
            </div>
          </div>

          {/* 社交媒体链接 */}
          <div className="mt-8 pt-8 border-t border-neutral-100">
            <p className="text-sm text-neutral-500 mb-4 text-center">
              通过社交媒体也可以找到我
            </p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((link) => {
                const Icon = { Github, BookOpen, Mail, MessageCircle }[link.icon]
                const isWechat = link.action === 'copy-wechat'
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    onClick={isWechat ? () => handleCopy('wechat', personalInfo.wechat) : undefined}
                    target={!isWechat ? '_blank' : undefined}
                    rel={!isWechat ? 'noopener noreferrer' : undefined}
                    className="p-3 bg-white rounded-xl shadow-md border border-neutral-100 hover:border-primary-500 hover:text-primary-600 transition-all hover:shadow-lg"
                    aria-label={link.name}
                    title={link.name}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Helper icon
function MapPin({ size }) {
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
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export default Contact
