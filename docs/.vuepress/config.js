import { defaultTheme } from 'vuepress'
export default {
  lang: 'zh-CN',
  title: 'huxg的笔记',
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
          text: 'Linux',
          collapsible: true,
          children: ['/command/linux_command.md']
        },
        {
          text: 'ES6',
          collapsible: true,
          children: ['/guide/guide1.md']
        }
      ]
    }
  })
}
