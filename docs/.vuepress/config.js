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
          children: ['/Webpack/README.md']
        },
        {
          text: 'Vue',
          collapsible: true,
          children: ['/Vue/README.md', '/Vue/source/README.md']
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
          text: '工具集合',
          collapsible: true,
          children: ['/utils/README.md']
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
          text: 'OS',
          collapsible: true,
          children: ['/OS/README.md']
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
            '/guide/Array.md',
            '/guide/Promise.md',
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
        },
        {
          text: '编译配置文件',
          collapsible: true,
          children: ['/TypeScript/config.md']
        }
      ],
      '/vue': [
        {
          text: 'Vue',
          collapsible: true,
          children: [
            '/vue/vue2.md',
            '/vue/communication.md',
            '/vue/proxy.md',
            '/vue/vuex.md',
            '/vue/vueRouter.md',
            '/vue/VRouter.md'
          ]
        },
        {
          text: 'Vue3',
          collapsible: true,
          children: [
            '/vue/vue3/README.md',
            '/vue/vue3/create.md',
            '/vue/vue3/analyze.md',
            '/vue/vue3/composition.md'
          ]
        },
        {
          text: 'Vue Cli指令',
          collapsible: true,
          children: ['/vue/Vue_cli.md']
        },
        {
          text: 'Vite',
          collapsible: true,
          children: ['/vue/vite/README.md']
        },
        {
          text: 'Vue源码',
          collapsible: true,
          children: ['/vue/source/README.md']
        }
      ],
      '/React/': [
        {
          text: 'React入门',
          collapsible: true,
          children: [
            '/React/base/accidence.md',
            '/React/base/jsx.md',
            '/React/base/commponet.md',
            '/React/base/event.md',
            '/React/base/state.md',
            '/React/base/Props.md',
            '/React/base/Refs.md',
            '/React/base/active.md'
          ]
        },
        {
          text: 'React 中的 Ajax',
          collapsible: true,
          children: ['/React/ajax/README.md','/React/ajax/axios.md','/React/ajax/proxy.md']
        },
        {
          text: '消息订阅与发布',
          collapsible: true,
          children: ['/React/pubSub/README.md']
        },
        {
          text: 'router',
          collapsible: true,
          children: ['/React/router/README.md','/React/router/v5.md','/React/router/v6.md']
        },
        {
          text: 'redux',
          collapsible: true,
          children: ['/React/redux/README.md']
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
      '/OS/': [
        {
          text: '操作系统',
          collapsible: true,
          children: ['/OS/system.md']
        }
      ],
      '/js/': [
        {
          text: 'javascript',
          collapsible: true,
          children: ['/js/js.md']
        }
      ],
      '/utils/': [
        {
          text: 'javascript',
          collapsible: true,
          children: ['/utils/js/README.md']
        },
        {
          text: 'css',
          collapsible: true,
          children: ['/utils/css/README.md']
        },
        {
          text: '编程工具',
          collapsible: true,
          children: ['/utils/codeDools/README.md']
        },
        {
          text: 'vue',
          collapsible: true,
          children: ['/utils/vue/README.md']
        },
        {
          text: '后端',
          collapsible: true,
          children: ['/utils/rear/README.md']
        },
      ],
      '/node/': [
        {
          text: 'nodejs',
          collapsible: true,
          children: ['/node/node.md']
        },
        {
          text: 'api开发',
          collapsible: true,
          children: ['/node/api_serve.md']
        }
      ],
      '/Webpack/': [
        {
          text: '基础',
          collapsible: true,
          children: [
            '/Webpack/base/README.md',
            '/Webpack/base/base.md',
            '/Webpack/base/config.md',
            '/Webpack/base/development.md',
            '/Webpack/base/css.md',
            '/Webpack/base/image.md',
            '/Webpack/base/output.md',
            '/Webpack/base/clean.md',
            '/Webpack/base/font.md',
            '/Webpack/base/javascript.md',
            '/Webpack/base/html.md',
            '/Webpack/base/serve.md',
            '/Webpack/base/production.md',
            '/Webpack/base/optimizeCss.md'
          ]
        },
        {
          text: '高级',
          collapsible: true,
          children: [
            '/Webpack/senior/README.md',
            '/Webpack/senior/enhanceExperience.md',
            '/Webpack/senior/liftingSpeed.md',
            '/Webpack/senior/reduceVolume.md',
            '/Webpack/senior/optimizePerformance.md',
            '/Webpack/senior/summary.md'
          ]
        },
        {
          text: '项目',
          collapsible: true,
          children: [
            '/Webpack/project/README.md',
            '/Webpack/project/vue-cli.md'
          ]
        }
      ]
    },
    lastUpdated: true,
    lastUpdatedText: '最近更新',
    contributors: true,
    contributorsText: '贡献者'
  })
}
