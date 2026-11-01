# 此处更换为你的项目名称

基于 **uni-app x** 构建的跨平台应用项目，包括云数据库、云函数等。

## 技术与平台

- 框架：uni-app x、Vue 3
- 页面脚本：UTS / `<script setup>`
- 当前平台配置：Android App（见 `platformConfig.json`）
- 云服务目录：uniCloud 支付宝云（`uniCloud-alipay/`）

## 开始使用

- 本项目需要使用 HBuilderX 管理和运行。
- 在 HBuilderX 中，打开 manifest.json 进行配置。
- 意见反馈功能依赖 uniCloud；未绑定并部署云端资源时，提交反馈无法完成。所以需要先进行关联。

1. 在 HBuilderX 中，在 uniCloud 文件夹右键关联一个 **uniCloud 云服务空间**。
2. 将 `uniCloud-alipay/database/xxx.schema.json` 部署到服务空间，创建 `xxx` 集合。该集合禁止客户端直接读写，写入由云函数处理。
3. 将 `uniCloud-alipay/cloudfunctions/xxx` 云函数上传并部署到服务空间。
4. 确认运行的应用使用已关联该服务空间的项目配置，再测试提交。

## 开发说明

- 页面路由及 tabBar 配置统一维护在 `pages.json`。
- 全局主题色和常用样式变量定义在 `uni.scss`，新增页面样式时优先复用这些变量。
- 修改云函数或数据库 schema 后，需要在 HBuilderX 中重新上传或部署对应 uniCloud 资源。
- `unpackage/` 为构建产物目录，不是应用源码入口。

## 参考文档

- [uni-app x 文档](https://doc.dcloud.net.cn/uni-app-x/)
- [uni-app x 页面配置](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html)
- [uniCloud 文档](https://doc.dcloud.net.cn/uniCloud/)
