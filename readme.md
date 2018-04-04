## 博客后台管理系统
> 花了两天时间学习React搭建的博客后台管理系统，由于春招略忙，随缘更新，然后搭配之前写的Vue博客页面和NodeJS后台一起上线

### 技术栈
React + React-router + Redux + 原生fetch + Ant UI

## 设计目标
### 功能目标
- [x] 管理员登录模块
- [x] 文章管理
- [ ] 评论管理
- [ ] 性能监控
- [ ] 标签管理
### 技术目标
- [x] 利用Redux实现token的管理分发
- [x] 利用无状态组件拦截路由做可复用的登录验证
- [ ] 路由懒加载

## 小产物
- 由于fetch是底层API，自己顺便封装了一个fetch的API（基于ES6）

## 截图
[![blogadmin_1207fc.md.png](https://miao.su/images/2018/04/01/blogadmin_1207fc.md.png)](https://miao.su/image/w0RQz)

[![blogadmin_273bdd.md.png](https://miao.su/images/2018/04/01/blogadmin_273bdd.md.png)](https://miao.su/image/w0oVH)
