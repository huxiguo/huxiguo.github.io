import { defaultTheme } from 'vuepress'
export default {
  base: '/',
  lang: 'zh-CN',
  title: 'seekhoo',
  description: '这是我的第一个 VuePress 站点',
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: 'Github',
        link: 'https://github.com'
      }
    ],
    sidebar: {
      '/': [
        {
          text: '指令',
          children: ['/command/README.md']
        },
        {
          text: 'TypeScript',
          children: ['/TypeScript/README.md']
        },
        {
          text: 'ES6',
          children: ['/guide/guide1.md']
        },
        {
          text: 'register',
          children: ['/register/TencentCloud.md']
        },
        {
          text: 'Graduation_project',
          children: ['/Graduation_Project/train.md']
        }
      ],
      '/command/': [
        {
          text: 'Linux指令',
          children: ['/command/linux_command.md']
        },
        {
          text: 'Vuecli指令',
          children: ['/command/Vue_cli.md']
        }
      ],
      '/Graduation_Project': [
        {
          text: '毕业设计思路',
          children: ['/Graduation_Project/train.md']
        }
      ],
      '/guide': [
        {
          text: 'ES6',
          children: ['/guide/guide1.md']
        }
      ],
      '/register': [
        {
          text: 'register',
          children: ['/register/TencentCloud.md']
        }
      ],
      '/TypeScript': [
        {
          text: '开始使用',
          children: ['/TypeScript/base.md']
        },
        {
          text: '类型',
          children: ['/TypeScript/type.md','/TypeScript/high_type.md']
        }
      ]
    },
    lastUpdated: true,
    lastUpdatedText: '最近更新',
    contributors: true,
    contributorsText:'贡献者'
  })
}
