import { defaultTheme } from 'vuepress'
export default {
  base: '/',
  lang: 'zh-CN',
  title: 'huxiguo',
  description: 'my blogs',
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: 'Nuxtjs',
        link: 'http://nuxt.yunog.cn'
      },
      {
        text: 'echart',
        link: 'http://echart.yunog.cn'
      },
      {
        text: 'React-music',
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
        ]
      },
      // css
      {
        text: 'CSS',
        collapsible: true,
        children: [
          '/CSS/css',
        ]
      },
      // js
      {
        text: 'javaScript',
        collapsible: true,
        children: [
          '/js/data_type',
          '/js/type_conversion',
          '/js/eq',
          '/js/inheritance',
          '/js/copy'
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
          '/vue/Vue_cli.md',
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
      // 指令
      {
        text: '指令',
        collapsible: true,
        children: [
          '/Git/git.md',
          '/Git/github.md',
          '/command/linux_command.md'
        ]
      }
    ],
    sidebarDepth: 0,
    contributors: true,
    contributorsText: '贡献者'
  })
}
