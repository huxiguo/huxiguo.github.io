import { defaultTheme } from 'vuepress'
export default {
  base: '/',
  lang: 'zh-CN',
  title: 'seekhoo',
  description: 'my blogs',
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
          text: 'CSS',
          collapsible: true,
          children: ['/CSS/README.md']
        },
        {
          text: 'javaScript',
          collapsible: true,
          children: ['/js/README.md']
        },
        {
          text: 'ES6',
          collapsible: true,
          children: ['/guide/guide1.md']
        },
        {
          text: 'TypeScript',
          collapsible: true,
          children: ['/TypeScript/README.md']
        },
        {
          text: '工程化',
          collapsible: true,
          children: ['/project/README.md']
        },
        {
          text: 'Vue',
          collapsible: true,
          children: ['/Vue/README.md']
        },
        {
          text: 'React',
          collapsible: true,
          children: ['/React/README.md']
        },
        {
          text: 'node.js',
          collapsible: true,
          children: ['/node/README.md']
        },
        {
          text: '指令',
          collapsible: true,
          children: ['/command/README.md']
        },
        {
          text: 'eCharts',
          collapsible: true,
          children: ['/eCharts/option.md']
        },
        {
          text: 'register',
          collapsible: true,
          children: ['/register/TencentCloud.md']
        },
        {
          text: 'Graduation_project',
          collapsible: true,
          children: ['/Graduation_Project/train.md']
        },
        {
          text: 'STM32',
          collapsible: true,
          children: ['/STM32/README.md']
        }
      ],
      '/command/': [
        {
          text: 'Linux指令',
          collapsible: true,
          children: ['/command/linux_command.md']
        },
        {
          text: 'Git指令',
          collapsible: true,
          children: ['/Git/git.md']
        }
      ],
      '/eCharts/': [
        {
          text: '基础配置项',
          collapsible: true,
          children: ['/echarts/option.md']
        }
      ],
      '/Graduation_Project/': [
        {
          text: '毕业设计思路',
          collapsible: true,
          children: ['/Graduation_Project/train.md']
        }
      ],
      '/guide/': [
        {
          text: 'ES6',
          collapsible: true,
          children: [
            '/guide/Symbol.md',
            '/guide/Prototype.md',
            '/guide/Destructuring.md',
            '/guide/Object.md',
            '/guide/Array.md'
          ]
        }
      ],
      '/register/': [
        {
          text: 'register',
          collapsible: true,
          children: ['/register/TencentCloud.md']
        }
      ],
      '/TypeScript/': [
        {
          text: '开始使用',
          collapsible: true,
          children: ['/TypeScript/base.md']
        },
        {
          text: '类型',
          collapsible: true,
          children: ['/TypeScript/type.md', '/TypeScript/high_type.md']
        },
        {
          text: '类型声明文件',
          collapsible: true,
          children: ['/TypeScript/typeFile.md']
        }
      ],
      '/vue': [
        {
          text: 'Vue',
          collapsible: true,
          children: ['/vue/vue2.md', '/vue/communication.md', '/vue/vuex.md']
        },
        {
          text: 'Vue Cli指令',
          collapsible: true,
          children: ['/vue/Vue_cli.md']
        }
      ],
      '/React/': [
        {
          text: 'React入门',
          collapsible: true,
          children: [
            '/React/accidence.md',
            '/React/jsx.md',
            '/React/commponet.md',
            '/React/event.md',
            '/React/state.md',
            '/React/Props.md',
            '/React/Refs.md',
            '/React/active.md'
          ]
        }
      ],
      '/Git/': [
        {
          text: 'Git指令',
          collapsible: true,
          children: ['/Git/git.md']
        },
        {
          text: 'Github',
          collapsible: true,
          children: ['/Git/github.md']
        }
      ],
      '/STM32/': [
        {
          text: '时钟',
          collapsible: true,
          children: ['/STM32/clock.md']
        },
        {
          text: 'GPIO',
          collapsible: true,
          children: ['/STM32/GPIO.md']
        },
        {
          text: '串行通信',
          collapsible: true,
          children: ['/STM32/Serial.md']
        }
      ],
      '/CSS/': [
        {
          text: 'CSS基础',
          collapsible: true,
          children: ['/CSS/css.md']
        }
      ],
      '/js/': [
        {
          text: 'javascript',
          collapsible: true,
          children: ['/js/js.md']
        }
      ],
      '/node/': [
        {
          text: 'nodejs',
          collapsible: true,
          children: ['/node/node.md']
        }
      ],
      '/project/': [
        {
          text: '工程化',
          collapsible: true,
          children: ['/project/project.md']
        }
      ]
    },
    lastUpdated: true,
    lastUpdatedText: '最近更新',
    contributors: true,
    contributorsText: '贡献者'
  })
}
