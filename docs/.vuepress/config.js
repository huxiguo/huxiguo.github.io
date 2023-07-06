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
          text: '面试题',
          collapsible: true,
          children: ['/interview/README.md']
        },
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
          text: 'python',
          collapsible: true,
          children: ['/python/README.md']
        },
        {
          text: '工程化',
          collapsible: true,
          children: ['/project/Webpack/README.md', '/project/Vite/README.md']
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
          text: 'SSR',
          collapsible: true,
          children: ['/SSR/README.md']
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
          children: ['/guide/Symbol.md', '/guide/Prototype.md', '/guide/Destructuring.md', '/guide/Object.md', '/guide/Array.md', '/guide/Promise.md']
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
          children: ['/vue/vue2.md', '/vue/communication.md', '/vue/proxy.md', '/vue/vuex.md', '/vue/vueRouter.md', '/vue/VRouter.md']
        },
        {
          text: 'Vue3',
          collapsible: true,
          children: [
            '/vue/vue3/README.md',
            '/vue/vue3/create.md',
            '/vue/vue3/analyze.md',
            '/vue/vue3/composition.md',
            '/vue/vue3/vue-3.3.md'
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
          children: ['/React/base/accidence.md', '/React/base/jsx.md', '/React/base/commponet.md', '/React/base/event.md', '/React/base/state.md', '/React/base/Props.md', '/React/base/Refs.md', '/React/base/active.md']
        },
        {
          text: 'React 中的 Ajax',
          collapsible: true,
          children: ['/React/ajax/README.md', '/React/ajax/axios.md', '/React/ajax/proxy.md']
        },
        {
          text: '消息订阅与发布',
          collapsible: true,
          children: ['/React/pubSub/README.md']
        },
        {
          text: 'router',
          collapsible: true,
          children: ['/React/router/README.md', '/React/router/v5.md', '/React/router/v6.md']
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
          children: ['/js/data_type.md']
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
        }
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
      '/project/Webpack/': [
        {
          text: '基础',
          collapsible: true,
          children: [
            '/project/Webpack/base/README.md',
            '/project/Webpack/base/base.md',
            '/project/Webpack/base/config.md',
            '/project/Webpack/base/development.md',
            '/project/Webpack/base/css.md',
            '/project/Webpack/base/image.md',
            '/project/Webpack/base/output.md',
            '/project/Webpack/base/clean.md',
            '/project/Webpack/base/font.md',
            '/project/Webpack/base/javascript.md',
            '/project/Webpack/base/html.md',
            '/project/Webpack/base/serve.md',
            '/project/Webpack/base/production.md',
            '/project/Webpack/base/optimizeCss.md'
          ]
        },
        {
          text: '高级',
          collapsible: true,
          children: ['/project/Webpack/senior/README.md', '/project/Webpack/senior/enhanceExperience.md', '/project/Webpack/senior/liftingSpeed.md', '/project/Webpack/senior/reduceVolume.md', '/project/Webpack/senior/optimizePerformance.md', '/project/Webpack/senior/summary.md']
        },
        {
          text: '项目',
          collapsible: true,
          children: ['/project/Webpack/project/README.md', '/project/Webpack/project/vue-cli.md']
        }
      ],
      '/project/Vite/': [
        {
          text: '构建工具',
          collapsible: true,
          children: ['/project/Vite/BuildTools/README.md']
        },
        {
          text: 'Vite VS webpack',
          collapsible: true,
          children: ['/project/Vite/Compare/README.md']
        }
      ],
      '/python/base/': [
        {
          text: '基础',
          // collapsible: true,
          children: ['/python/base/README.md', '/python/base/func.md', '/python/base/list.md', '/python/base/tuple.md', '/python/base/str.md', '/python/base/slice.md', '/python/base/set.md', '/python/base/dict.md', '/python/base/file.md', '/python/base/module.md']
        }
      ],
      '/python/project/': [
        {
          text: '数据可视化',
          // collapsible: true,
          children: ['/python/project/README.md']
        }
      ],
      '/python/object/': [
        {
          text: '面向对象',
          // collapsible: true,
          children: ['/python/object/README.md']
        }
      ],
      '/interview/': [
        // vue
        {
          text: 'Vue系列',
          collapsable: false,
          children: [
            '/interview/vue/vue',
            '/interview/vue/spa',
            '/interview/vue/show_if',
            '/interview/vue/new_vue',
            '/interview/vue/lifecycle',
            '/interview/vue/if_for',
            '/interview/vue/first_page_time',
            '/interview/vue/data',
            '/interview/vue/data_object_add_attrs',
            '/interview/vue/components_plugin',
            '/interview/vue/communication',
            '/interview/vue/bind',
            '/interview/vue/nexttick',
            '/interview/vue/mixin',
            '/interview/vue/slot',
            '/interview/vue/observable',
            '/interview/vue/key',
            '/interview/vue/keepalive',
            '/interview/vue/modifier',
            '/interview/vue/directive',
            '/interview/vue/filter',
            '/interview/vue/vnode',
            '/interview/vue/diff',
            '/interview/vue/axios',
            '/interview/vue/axiosCode',
            '/interview/vue/ssr',
            '/interview/vue/structure',
            '/interview/vue/permission',
            '/interview/vue/cors',
            '/interview/vue/404',
            '/interview/vue/error',
            '/interview/vue/vue3_vue2'
          ]
        },
        // vue3
        {
          text: 'Vue3系列',
          collapsable: true,
          children: ['/interview/vue3/goal.md', '/interview/vue3/performance', '/interview/vue3/proxy', '/interview/vue3/composition', '/interview/vue3/treeshaking', '/interview/vue3/modal_component']
        },
        // ES6
        {
          text: 'ES6系列',
          collapsable: true,
          children: ['/interview/es6/var_let_const', '/interview/es6/array', '/interview/es6/object', '/interview/es6/function', '/interview/es6/set_map', '/interview/es6/promise', '/interview/es6/generator', '/interview/es6/proxy', '/interview/es6/module', '/interview/es6/decorator']
        },
        // JavaScript
        {
          text: 'JavaScript系列',
          collapsable: true,
          children: [
            '/interview/JavaScript/data_type',
            '/interview/JavaScript/array_api',
            '/interview/JavaScript/string_api',
            '/interview/JavaScript/type_conversion',
            '/interview/JavaScript/== _===',
            '/interview/JavaScript/copy',
            '/interview/JavaScript/closure',
            '/interview/JavaScript/scope',
            '/interview/JavaScript/prototype',
            '/interview/JavaScript/inherit',
            '/interview/JavaScript/this',
            '/interview/JavaScript/context_stack',
            '/interview/JavaScript/event_Model',
            '/interview/JavaScript/typeof_instanceof',
            '/interview/JavaScript/event_agent',
            '/interview/JavaScript/new',
            '/interview/JavaScript/ajax',
            '/interview/JavaScript/bind_call_apply',
            '/interview/JavaScript/regexp',
            '/interview/JavaScript/event_loop',
            '/interview/JavaScript/Dom',
            '/interview/JavaScript/BOM',
            '/interview/JavaScript/tail_recursion',
            '/interview/JavaScript/memory_leak',
            '/interview/JavaScript/cache',
            '/interview/JavaScript/functional_programming',
            '/interview/JavaScript/function_cache',
            '/interview/JavaScript/loss_accuracy',
            '/interview/JavaScript/debounce_throttle',
            '/interview/JavaScript/visible',
            '/interview/JavaScript/continue_to_upload',
            '/interview/JavaScript/pull_up_loading_pull_down_refresh',
            '/interview/JavaScript/single_sign',
            '/interview/JavaScript/security'
          ]
        },
        // CSS
        {
          text: 'CSS系列',
          collapsable: true,
          children: [
            '/interview/css/box',
            '/interview/css/selector',
            '/interview/css/em_px_rem_vh_vw',
            '/interview/css/dp_px_dpr_ppi',
            '/interview/css/hide_attributes',
            '/interview/css/BFC',
            '/interview/css/center',
            '/interview/css/column_layout',
            '/interview/css/flexbox',
            '/interview/css/grid',
            '/interview/css/css3_features',
            '/interview/css/animation',
            '/interview/css/layout_painting',
            '/interview/css/responsive_layout',
            '/interview/css/css_performance',
            '/interview/css/single_multi_line',
            '/interview/css/visual_scrolling',
            '/interview/css/triangle',
            '/interview/css/less_12px',
            '/interview/css/sass_less_stylus'
          ]
        },
        // Webpack
        {
          text: 'Webpack系列',
          collapsable: true,
          children: [
            '/interview/webpack/webpack',
            '/interview/webpack/build_process',
            '/interview/webpack/Loader',
            '/interview/webpack/Plugin',
            '/interview/webpack/Loader_Plugin',
            '/interview/webpack/HMR',
            '/interview/webpack/proxy',
            '/interview/webpack/performance',
            '/interview/webpack/improve_build',
            '/interview/webpack/Rollup_Parcel_snowpack_Vite'
          ]
        },
        // HTTP
        {
          text: 'HTTP系列',
          collapsable: true,
          children: [
            '/interview/http/HTTP_HTTPS',
            '/interview/http/HTTPS',
            '/interview/http/UDP_TCP',
            '/interview/http/OSI',
            '/interview/http/TCP_IP',
            '/interview/http/DNS',
            '/interview/http/CDN',
            '/interview/http/1.0_1.1_2.0',
            '/interview/http/status',
            '/interview/http/GET_POST',
            '/interview/http/headers',
            '/interview/http/after_url',
            '/interview/http/handshakes_waves',
            '/interview/http/WebSocket'
          ]
        },
        // NodeJS
        {
          text: 'NodeJS系列',
          collapsable: true,
          children: [
            '/interview/NodeJS/nodejs',
            '/interview/NodeJS/global',
            '/interview/NodeJS/process',
            '/interview/NodeJS/fs',
            '/interview/NodeJS/Buffer',
            '/interview/NodeJS/Stream',
            '/interview/NodeJS/EventEmitter',
            '/interview/NodeJS/event_loop',
            '/interview/NodeJS/require_order',
            '/interview/NodeJS/middleware',
            '/interview/NodeJS/jwt',
            '/interview/NodeJS/file_upload',
            '/interview/NodeJS/paging',
            '/interview/NodeJS/performance'
          ]
        },
        // React
        {
          text: 'React系列',
          collapsable: true,
          children: [
            '/interview/React/React',
            '/interview/React/Real DOM_Virtual DOM',
            '/interview/React/life cycle',
            '/interview/React/state_props',
            '/interview/React/super()_super(props)',
            '/interview/React/setState',
            '/interview/React/SyntheticEvent',
            '/interview/React/Binding events',
            '/interview/React/Building components',
            '/interview/React/communication',
            '/interview/React/key',
            '/interview/React/React refs',
            '/interview/React/class_function component',
            '/interview/React/controlled_Uncontrolled',
            '/interview/React/High order components',
            '/interview/React/React Hooks',
            '/interview/React/import css',
            '/interview/React/animation',
            '/interview/React/redux',
            '/interview/React/Redux Middleware',
            '/interview/React/how to use redux',
            '/interview/React/React Router',
            '/interview/React/React Router model',
            '/interview/React/immutable',
            '/interview/React/render',
            '/interview/React/improve_render',
            '/interview/React/diff',
            '/interview/React/Fiber',
            '/interview/React/JSX to DOM',
            '/interview/React/Improve performance',
            '/interview/React/capture error',
            '/interview/React/server side rendering',
            '/interview/React/summary'
          ]
        },
        // Git
        {
          text: '版本控制系列',
          collapsable: true,
          children: [
            '/interview/git/Version control',
            '/interview/git/Git',
            '/interview/git/fork_clone_branch',
            '/interview/git/command',
            '/interview/git/HEAD_tree_index',
            '/interview/git/git pull _git fetch',
            '/interview/git/git stash',
            '/interview/git/git rebase_ git merge',
            '/interview/git/conflict',
            '/interview/git/git reset_ git revert'
          ]
        },
        // TypeScript
        {
          text: 'TypeScript 系列',
          collapsable: true,
          children: [
            '/interview/typescript/typescript_javascript',
            '/interview/typescript/data_type',
            '/interview/typescript/enum',
            '/interview/typescript/interface',
            '/interview/typescript/class',
            '/interview/typescript/function',
            '/interview/typescript/generic',
            '/interview/typescript/high type',
            '/interview/typescript/decorator',
            '/interview/typescript/namespace_module',
            '/interview/typescript/react',
            '/interview/typescript/vue'
          ]
        },
        // 算法数据解构
        {
          text: '算法与数据结构系列',
          collapsable: true,
          children: [
            '/interview/algorithm/Algorithm',
            '/interview/algorithm/time_space',
            '/interview/algorithm/structure',
            '/interview/algorithm/stack_queue',
            '/interview/algorithm/Linked List',
            '/interview/algorithm/set',
            '/interview/algorithm/tree',
            '/interview/algorithm/Heap',
            '/interview/algorithm/graph',
            '/interview/algorithm/sort',
            '/interview/algorithm/bubbleSort',
            '/interview/algorithm/selectionSort',
            '/interview/algorithm/insertionSort',
            '/interview/algorithm/mergeSort',
            '/interview/algorithm/quickSort',
            '/interview/algorithm/BinarySearch',
            '/interview/algorithm/design1',
            '/interview/algorithm/design2'
          ]
        },
        // weApp
        {
          text: '小程序系列',
          collapsable: true,
          children: ['/interview/applet/applet', '/interview/applet/lifecycle', '/interview/applet/navigate', '/interview/applet/optimization', '/interview/applet/login', '/interview/applet/publish', '/interview/applet/requestPayment', '/interview/applet/WebView_jscore']
        },
        // 设计模式
        {
          text: '设计模式系列',
          collapsable: true,
          children: ['/interview/design/design', '/interview/design/Singleton Pattern', '/interview/design/Factory  Pattern', '/interview/design/Strategy Pattern', '/interview/design/Proxy Pattern', '/interview/design/Observer  Pattern']
        }
      ],
      '/SSR/': [
        // node
        {
          text: 'Node',
          collapsable: false,
          children: [
            '/SSR/Node/vue3NodeSSR.md',
            '/SSR/Node/SSRHydration.md',
            '/SSR/Node/vueSSRRouter.md',
            '/SSR/Node/vueSSRPinia.md'
          ]
        },
        // nuxt
        {
          text: 'Nuxt',
          collapsable: false,
          children: [
            '/SSR/Nuxt/what.md',
            '/SSR/Nuxt/start.md',
            '/SSR/Nuxt/directory.md',
            '/SSR/Nuxt/nuxtConfig.md',
            '/SSR/Nuxt/components.md',
            '/SSR/Nuxt/css.md',
            '/SSR/Nuxt/assest.md',
            '/SSR/Nuxt/page.md',
            '/SSR/Nuxt/router.md',
            '/SSR/Nuxt/layout.md',
            '/SSR/Nuxt/randerMode.md',
            '/SSR/Nuxt/plugin.md',
            '/SSR/Nuxt/lifecycle.md',
            '/SSR/Nuxt/fetch.md',
            '/SSR/Nuxt/api.md',
            '/SSR/Nuxt/state.md',
          ]
        },
        // next
        {
          text: 'Next',
          collapsable: false,
          children: [
            '/SSR/Next/what.md',
            '/SSR/Next/start.md',
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
