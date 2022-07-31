let transformRemoveConsolePlugin = []
// 移除console
if (process.env.NODE_ENV === 'production') {
  transformRemoveConsolePlugin = ['transform-remove-console']
}
module.exports = {
  presets: [
    '@vue/app',
    // 兼容配置
    [
      '@babel/preset-env',
      {
        'useBuiltIns': 'entry'
      }
    ]
  ],
  // 按需加载配置
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ],
    ...transformRemoveConsolePlugin,
  ]
}