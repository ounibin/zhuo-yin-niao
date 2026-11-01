## 项目说明

这是一个基于 uni-app x 框架的项目。文档：https://doc.dcloud.net.cn/uni-app-x/

## UI 设计

文档：https://doc.dcloud.net.cn/uni-app-x/component/

- 涉及到色值，优先使用 uni.scss 中的变量。
- 使用组件时，优先使用 uni-ui 中的组件。uni-ui 是DCloud提供的一个跨端ui库，它是基于vue组件的、flex布局的、无dom的跨全端ui框架。uni-ui 不包括内置组件，它是内置组件的补充。
- 使用图标时，优先使用 uni-ui 中的 uni-icons 组件。

## uni-app x

pages.json 文件是 uni-app x 的页面管理配置文件，决定应用的首页、页面文件的路径、窗口样式、原生的导航栏、底部的原生tabbar 等。参考：https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html

## uniCloud 云开发

文档：https://doc.dcloud.net.cn/uniCloud/

- 云数据库和云函数的对应关系，云数据库中一个集合对应一个云函数，如 users 对应 users/index.js。users/index.js 中的函数为云函数，用于处理 users 集合的请求。

## git

commit message使用中文，例如：
feat: 修复登录功能,
fix: 修复登录页面的错误
docs: 文档变更
refactor: 代码重构
test: 测试变更
chore: 构建、配置、工具变更
