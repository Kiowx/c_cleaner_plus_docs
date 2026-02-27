import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'C Cleaner Plus',
  description: 'Windows C 盘强力清理工具文档',
  
  // ⚠️ 关键：必须与仓库名完全一致，前后都要有斜杠
  base: '/c_cleaner_plus_docs/',
  
  lastUpdated: true,
  cleanUrls: true,

  // ✅ 添加 head 配置，确保资源加载
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]
  ],

  themeConfig: {
    logo: '/logo.png',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '功能', link: '/features/' },
      { text: '配置', link: '/config/' },
      { text: '安全', link: '/safety' },
      { text: 'FAQ', link: '/faq' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '入门指南',
          collapsed: false,
          items: [
            { text: '项目概述', link: '/guide/' },
            { text: '安装指南', link: '/guide/installation' },
            { text: '使用手册', link: '/guide/usage' },
          ]
        }
      ],
      '/features/': [
        {
          text: '功能特性',
          collapsed: false,
          items: [
            { text: '常规清理', link: '/features/' },
            { text: '高级清理', link: '/features/advanced' },
            { text: '应用卸载', link: '/features/uninstall' },
          ]
        }
      ],
      '/config/': [
        {
          text: '配置说明',
          collapsed: false,
          items: [
            { text: '配置文件', link: '/config/' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Kiowx/c_cleaner_plus' }
    ],

    footer: {
      message: '基于 MIT 许可证发布',
      copyright: 'Copyright © 2024-present Kiowx'
    },

    search: {
      provider: 'local'
    }
  },

  markdown: {
    lineNumbers: true,
  },
})
