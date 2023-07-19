import { defaultTheme } from 'vuepress'
export default {
  base: '/',
  lang: 'zh-CN',
  title: '胡熙国',
  description: 'my blogs',
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: 'SSR入门',
        link: 'http://nuxt.yunog.cn'
      },
      {
        text: 'echart-demo',
        link: 'http://echart.yunog.cn'
      },
      {
        text: '个人音乐',
        link: 'http://music.yunog.cn'
      },
      {
        text: 'Github',
        link: 'https://github.com/huxiguo'
      },
      {
        text: '首页',
        link: '/'
      },
    ],
    sidebar: [
      // html
      {
        text: 'HTML',
        collapsible: true,
        children: [
          '/HTML/doctype',
          '/HTML/HTML语义化',
          '/HTML/Cookie与Session',
          '/HTML/HTML5新特性',
          '/HTML/LocalStorage与SessionStorage',
          '/HTML/前端性能优化方案',
          '/HTML/DOM和BOM的区别',
          '/HTML/行内元素和块级元素',
        ]
      },
      // css
      {
        text: 'CSS',
        collapsible: true,
        children: [
          '/CSS/CSS引入方式',
          '/CSS/css',
          '/CSS/CSS盒子模型',
          '/CSS/CSS选择器',
          '/CSS/CSS样式优先级',
          '/CSS/Position定位',
          '/CSS/Float浮动',
          '/CSS/Flex布局',
          '/CSS/Grid布局',
          '/CSS/布局垂直居中',
          '/CSS/实现三栏布局',
          '/CSS/CSS隐藏元素的方法',
        ]
      },
      // js
      {
        text: 'javaScript',
        collapsible: true,
        children: [
          '/js/ES6新特性',
          '/js/JS变量提升',
          '/js/作用域与作用域链',
          '/js/data_type',
          '/js/type_conversion',
          '/js/eq',
          '/js/inheritance',
          '/js/copy',
          '/js/array',
          '/js/Symbol',
          '/js/promise',
          '/js/defineProperty',
          '/js/Js模块化导入导出',
          '/js/let与const',
          '/js/防抖与节流',
          '/js/函数声明与函数表达式',
          '/js/Js箭头函数',
          '/js/事件循环',
          '/js/uniapp-websocket',
          '/js/大文件断点上传',
          '/js/上拉加载下拉刷新'
        ]
      },
      // vue
      {
        text: 'Vue',
        collapsible: true,
        children: [
          {
            text: 'vue2',
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
            text: 'vue3',
            collapsible: true,
            children: [
              '/vue/vue3/README.md',
              '/vue/vue3/create.md',
              '/vue/vue3/analyze.md',
              '/vue/vue3/composition.md',
              '/vue/vue3/vue-3.3.md'
            ]
          },
          '/vue/SPA单页应用的优缺点',
          '/vue/MVVM',
          '/vue/Vue2数据双向绑定',
          '/vue/Vue_cli',
          '/vue/vite',
        ]
      },
      // react
      {
        text: 'React',
        collapsible: true,
        children: [
          '/React/base/accidence',
          '/React/base/jsx',
          '/React/base/component',
          '/React/base/event',
          '/React/base/state',
          '/React/base/Props',
          '/React/base/Refs',
          '/React/base/active',
        ]
      },
      // ts
      {
        text: 'TypeScript',
        collapsible: true,
        children: [
          '/TypeScript/base',
          '/TypeScript/type',
          '/TypeScript/high_type',
          '/TypeScript/typefile',
          '/TypeScript/config',
        ]
      },
      // leetcode
      {
        text: 'leetcode',
        collapsible: true,
        children: [
          '/leetcode/maximum-split-of-positive-even-integers',
          '/leetcode/remove-digit-from-number-to-maximize-result',
          '/leetcode/valid-palindrome',
          '/leetcode/视频拼接',
        ]
      },
      // 工程化
      {
        text: '工程化',
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
          '/project/Webpack/base/optimizeCss.md',
          '/project/Webpack/senior/README.md',
          '/project/Webpack/senior/enhanceExperience.md',
          '/project/Webpack/senior/liftingSpeed.md',
          '/project/Webpack/senior/reduceVolume.md',
          '/project/Webpack/senior/optimizePerformance.md',
          '/project/Webpack/senior/summary.md',
          '/project/Webpack/project/README.md',
          '/project/Webpack/project/vue-cli.md',
          '/project/Vite/BuildTools/README.md'
        ]
      },
      // SSR
      {
        text: 'SSR',
        collapsible: true,
        children: [
          '/SSR/Node/vue3NodeSSR.md',
          '/SSR/Node/SSRHydration.md',
          '/SSR/Node/vueSSRRouter.md',
          '/SSR/Node/vueSSRPinia.md',
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
      // git
      {
        text: 'Git',
        collapsible: true,
        children: []
      },
      // 指令
      {
        text: '指令',
        collapsible: true,
        children: [
          '/Git/git.md',
          '/Git/github.md',
          '/command/linux_command.md'
        ]
      },
      // js面试题
      {
        text: 'js面试题',
        collapsible: true,
        children: [
          '/interview-js/箭头函数和普通函数的区别'
        ]
      },
      // CSS面试题
      {
        text: 'CSS面试题',
        collapsible: true,
        children: [
          '/interview-css/重绘和重排'
        ]
      },
      // 浏览器面试题
      {
        text: '浏览器面试题',
        collapsible: true,
        children: [
          '/interview-broswer/cookie'
        ]
      },
      // 网络面试题
      {
        text: '网络面试题',
        collapsible: true,
        children: [
          '/interview-network/TCP-IP协议',
          '/interview-network/http状态码',
          '/interview-network/TCP三次握手四次挥手',
        ]
      },
      // 框架面试题
      {
        text: '框架面试题',
        collapsible: true,
        children: [
          '/interview-frame/npminstall'
        ]
      },
      // 手写代码题
      {
        text: '手写代码题',
        collapsible: true,
        children: [
          '/interview-code/apply-call-bind'
        ]
      },
      // 面试
      {
        text: '面试',
        collapsible: true,
        children: [
          '/interview-exp/2023-07-12',
          '/interview-exp/2023-07-19',
        ]
      }
    ],
    sidebarDepth: 0,
    lastUpdated: false,
    contributors: true,
    contributorsText: '贡献者'
  })
}
