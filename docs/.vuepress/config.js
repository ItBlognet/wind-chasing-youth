import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
export default defineUserConfig({
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: '逆风少年',
      description: '如果你不去追求你想要的东西，你永远不会拥有它。',
      head: [['link', { rel: 'icon', href: '/images/favicon.png' }]],
    },
    '/en/': {
      lang: 'en-US',
      title: 'VuePress',
      description: 'Vue VuePress en',
    },
  },
  theme: defaultTheme({
    navbar: [
      // 嵌套 Group - 最大深度为 2
      {
        text: '前端',
        children: [
          {
            text: '基础',
            children: [{
              text: 'html',
              link: '/前端/html.md'
            },{
              text: 'css',
              link: '/前端/css.md'
            },],
          },
          {
            text: '框架',
            children: [{
              text: 'html',
              link: '/前端/html.md'
            },{
              text: 'css',
              link: '/前端/css.md'
            },],
          },
        ],
      },
      // 控制元素何时被激活
      {
        text: '后端',
        children: [
          {
            text: 'JAVA',
            children: [{
              text: 'java基础',
              link: '/后端/java基础.md'
            }],
          },
          {
            text: '框架',
            children: [{
              text: 'SSM',
              link: '/后端/SpringBoot之拦截器.md'
            },{
              text: 'SpringBoot',
              link: '/后端/SpringBoot之文件上传.md'
            },],
          },
        ],
      },
    ],
    locales: {
      '/': {
        selectLanguageName: '简体中文',
      },
      '/en': {
        selectLanguageName: 'English',
      },
    },
  }),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
        '/en/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
  
})