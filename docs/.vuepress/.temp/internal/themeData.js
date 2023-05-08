export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"前端\",\"children\":[{\"text\":\"基础\",\"children\":[{\"text\":\"html\",\"link\":\"/前端/html.md\"},{\"text\":\"css\",\"link\":\"/前端/css.md\"}]},{\"text\":\"框架\",\"children\":[{\"text\":\"html\",\"link\":\"/前端/html.md\"},{\"text\":\"css\",\"link\":\"/前端/css.md\"}]}]},{\"text\":\"后端\",\"children\":[{\"text\":\"JAVA\",\"children\":[{\"text\":\"java基础\",\"link\":\"/后端/java基础.md\"}]},{\"text\":\"框架\",\"children\":[{\"text\":\"SSM\",\"link\":\"/后端/SpringBoot之拦截器.md\"},{\"text\":\"SpringBoot\",\"link\":\"/后端/SpringBoot之文件上传.md\"}]}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"简体中文\"},\"/en\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
