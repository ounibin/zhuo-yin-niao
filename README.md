# 啄音鸟

基于 **uni-app x** 构建的跨平台应用项目，包括云数据库、云函数等。

## 开始使用

本项目需要使用 `HBuilderX` 管理和运行。

- 在 `HBuilderX` 中，打开 `manifest.json` 进行配置。
  - 基础配置
  1. 如果是从模板复制过来的仓库，点击 `重新获取` 按钮获取 uni-app 的应用标识（AppID）。
  2. 修改应用名称。
  - Web配置
  - 安卓App配置
  - iOS App配置
  - 鸿蒙App配置
  - 微信小程序配置

- 在 `HBuilderX` 中，在 `uniCloud` 文件夹-右键关联一个 `uniCloud 云服务空间`。
  1. 将 `uniCloud-alipay/database/xxx.schema.json` 部署到服务空间，创建 `xxx` 集合。该集合禁止客户端直接读写，写入由云函数处理。
  2. 将 `uniCloud-alipay/cloudfunctions/xxx` 云函数上传并部署到服务空间。
  3. 确认运行的应用使用已关联该服务空间的项目配置，再测试提交。

## 开发说明

- 技术栈：`uni-app x` ，包括云数据库、云函数等。
- **AI编码** 需要读取的文件在 `docs/` 目录下。
- 页面路由及 `tabBar` 配置统一维护在 `pages.json`。
- 全局主题色和常用样式变量定义在 `uni.scss`，新增页面样式时优先复用这些变量。
- 修改云函数或数据库 schema 后，需要在 `HBuilderX` 中重新上传或部署对应 uniCloud 资源。

## 参考文档

- [uni-app x 文档](https://doc.dcloud.net.cn/uni-app-x/)
- [uni-app x 页面配置](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html)
- [uniCloud 文档](https://doc.dcloud.net.cn/uniCloud/)