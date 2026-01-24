# React学习资源

![Learning React](./Learning%20React.png)

🌐 **[在线导航网站](https://react.knowledgefxg.com/)** | 📖 **文本版资源列表（见下方）**

---

## 关于本仓库

本仓库包含两部分内容：

1. **可视化导航网站** - 提供友好的浏览界面，支持搜索和分类导航 ([查看代码](./website))
2. **文本版资源列表** - Markdown 格式的资源列表（见下方）

### 本地运行导航网站

```bash
# 进入网站目录
cd website

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:5173
```

### 网站功能特性

- 📱 响应式设计 - 完美适配移动端、平板和桌面端
- 🔍 实时搜索 - 支持按标题和描述快速搜索资源
- 🎨 现代化 UI - 暗色主题 + 流畅动画效果
- 🚀 极速加载 - 基于 Vite 构建，启动和热更新超快
- 📑 13个分类 - 涵盖 React 学习全流程
- ⌨️ 键盘友好 - 支持 Cmd+K 快捷搜索

### 技术栈

- **前端**: React 19 + TypeScript
- **构建**: Vite
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **部署**: Vercel

> 💡 详细文档请查看 [website/README.md](./website/README.md)

---

---

## 如何使用本仓库

### 📖 对于学习者

1. **浏览在线网站** - 访问 [react.knowledgefxg.com](https://react.knowledgefxg.com/) 获得最佳浏览体验
2. **使用搜索功能** - 按 Cmd+K（Mac）或 Ctrl+K（Windows）快速搜索资源
3. **按需学习** - 根据自己的水平选择对应分类的资源
4. **收藏书签** - 将有用的资源添加到浏览器书签

### 💻 对于开发者

1. **Fork 仓库** - 克隆到自己的 GitHub
2. **本地运行** - 按上方说明启动开发服务器
3. **添加资源** - 编辑 `website/src/data/resources.ts`
4. **提交 PR** - 分享你的改进

### 🎯 学习路径建议

如果你是 React 新手，建议按以下顺序学习：

#### 第一阶段：打基础 (1-2周)
- 学习 HTML/CSS 基础
- 掌握 JavaScript ES6+ 语法
- 了解 Git 基本操作

#### 第二阶段：入门 React (2-3周)
1. 阅读 [React 官方中文文档](https://zh-hans.react.dev/)
2. 跟随 [React 菜鸟教程](https://www.runoob.com/react/react-tutorial.html)
3. 观看 [React 技术全家桶](https://www.bilibili.com/video/BV1wy4y1D7JT)

#### 第三阶段：深入学习 (3-4周)
- 学习 React Hooks 深入使用
- 掌握状态管理（Redux/Zustand）
- 了解 React Router 路由管理
- 阅读 [React 模式](https://reactpatterns.cn/)

#### 第四阶段：实战项目 (4-6周)
- 跟随教程完成 2-3 个完整项目
- 独立完成一个个人项目
- 学习最佳实践和代码规范

#### 第五阶段：进阶全栈 (持续学习)
- 学习 Next.js 全栈框架
- 掌握后端 API 集成
- 了解部署和运维知识

---

## 贡献指南

我们欢迎任何形式的贡献！🎉

### 如何贡献资源

1. **确保资源质量**
   - ✅ 内容优质，适合 React 学习者
   - ✅ 链接有效，可正常访问
   - ✅ 中文资源优先，英文资源次之
   - ✅ 免费资源优先

2. **添加资源步骤**
   ```bash
   # 1. Fork 并克隆仓库
   git clone https://github.com/your-username/react-learning.git
   
   # 2. 创建新分支
   git checkout -b add-new-resource
   
   # 3. 编辑资源文件
   # 编辑 website/src/data/resources.ts
   # 同时更新主 README.md（如果需要）
   
   # 4. 提交更改
   git add .
   git commit -m "feat: 添加新资源 - 资源名称"
   
   # 5. 推送并创建 PR
   git push origin add-new-resource
   ```

3. **资源格式**
   ```typescript
   {
     title: "资源名称",
     url: "https://example.com",
     description: "简短描述（建议50字以内）"
   }
   ```

### 报告问题

发现了问题？请：
1. 检查 [Issues](https://github.com/knowledgefxg/react-learning/issues) 是否已存在
2. 如果没有，创建新 Issue
3. 清晰描述问题和重现步骤

### 提交规范

使用语义化提交信息：
- `feat:` 新增功能或资源
- `fix:` 修复问题
- `docs:` 文档更新
- `style:` 代码格式调整
- `refactor:` 代码重构
- `perf:` 性能优化

示例：
```
feat: 添加 React 19 新特性教程
fix: 修复移动端显示问题
docs: 完善安装说明
```

---

## 常见问题

### Q: 资源太多，不知道从哪里开始？

A: 建议先阅读 [React 官方中文文档](https://zh-hans.react.dev/)，然后根据上方的"学习路径建议"逐步学习。

### Q: 视频教程看不懂怎么办？

A: 可以先从中文视频开始，如 B 站的尚硅谷教程。同时结合文档和博客文章学习效果更好。

### Q: 如何判断自己的学习进度？

A: 尝试独立完成一个小项目，比如 Todo List、天气应用等。能够独立完成就说明基础扎实了。

### Q: 需要掌握所有资源吗？

A: 不需要。选择适合自己的资源即可。重要的是动手实践，而不是囤积资源。

### Q: 学完 React 后该学什么？

A: 建议学习：
- Next.js（全栈框架）
- TypeScript（类型系统）
- 状态管理库（Redux/Zustand）
- 测试（Jest/React Testing Library）

---

## 项目统计

- 📚 资源总数：200+
- 🏷️ 分类数量：13个
- 🌐 在线访问：[react.knowledgefxg.com](https://react.knowledgefxg.com/)
- ⭐ GitHub Stars：欢迎 Star 支持
- 👥 贡献者：期待你的加入

---

## 技术支持

- 💬 [GitHub Discussions](https://github.com/knowledgefxg/react-learning/discussions) - 讨论交流
- 🐛 [GitHub Issues](https://github.com/knowledgefxg/react-learning/issues) - 问题反馈
- 📧 Email：your-email@example.com

---

## 致谢

感谢所有资源的创作者和贡献者，是你们让 React 学习变得更简单！

特别感谢：
- React 官方团队
- 各位教程作者
- 开源社区贡献者
- 所有 Star 和 Fork 的朋友们

---

## 更新日志

### 2026-01-24
- ✨ 优化了网站 UI 设计
- 📝 完善了项目文档
- 🚀 配置了 SSH 部署

### 更早版本
- 初始化项目
- 添加基础资源
- 上线导航网站

---

嘿，欢迎来到React学习资源库！这里整理了一些React全栈开发的学习资料，从零基础到实战项目都有覆盖。不管你是刚入门的新手，还是想提升技术的开发者，都能在这里找到适合自己的内容。仓库的目标很简单：希望每个人都能快速上手React开发，并且能够构建出可用于生产环境的应用。别担心经验不足，每个高手都是从新手开始的。带着热情和坚持，相信你也可以做到！这个资源库会持续更新，如果你也有好的学习资源，欢迎分享出来，让我们一起打造更好的学习社区。毕竟，学习的路上有伴才更有趣，不是吗？

如果你感兴趣，这是我推荐的React学习资源：


## 目录

- [React学前知识](#React学前知识)
- [React官方资源](#React官方资源)
- [React入门教程](#React入门教程)
- [视频教程](#视频教程)
- [优质博客](#优质博客)
- [开源电子书](#开源电子书)
- [学习社区](#学习社区)
- [社交账号](#社交账号)
- [React 框架](#React框架)
- [React 开发工具](#React开发工具)
- [React 优质组件](#React优质组件)
- [其他工具/资源](#其他工具资源)


## React学前知识

学习React肯定要有一些基础知识的，这里准备几个资源让你快速掌握前置知识, 如果你已经掌握了某些主题，可以随时跳过。

- [三小时前端入门（html+css+js）](https://www.bilibili.com/video/BV1BT4y1W7Aw) 深入浅出，3小时快速掌握前端三件套核心概念。
- [html+css零基础教程](https://www.bilibili.com/video/BV1p84y1P7Z5) 如果想要详细了解前端入门技术，这个课程绝对适合，通俗易懂。
- [JavaScript 6小时初学者速成课程](https://www.youtube.com/watch?v=LEwi44cWBu8) 6小时速通js和核心概念
- [JavaScript全套课程](https://www.youtube.com/watch?v=lfmg-EJ8gm4) 来自200多万订阅的博主js全套课程，适合想更详细去学习js的同学，用来查漏补缺。
- [freeCodeCamp学习社区](https://www.freecodecamp.org/) 备受欢迎的编程学习社区，通过边学边练的交互式课程快速学习HTML，Javascript等多种编程语言
- [Git初学者教程：1小时学会Git](https://www.youtube.com/watch?v=8JJ101D3knE) 拥有YouTube四百多万订阅的博主Mosh带你快速掌握Git
- [GitHub小白指南](https://github.com/CatOneTwo/GitHub-Tutorial) 完全针对小白的教程，适合快速上手
- [游戏化学习Git](https://learngitbranching.js.org/?locale=zh_CN) 通过互动式加可视化来教授Git
- [MDN](https://developer.mozilla.org/zh-CN/) 非常重要的 Web 开发文档平台, 遇到不会的就去查一查。
- [1小时快速入门node.js](https://www.youtube.com/watch?v=TlB_eWDSMt4) 学习react前了解基本的 Node.js 概念足够
- [Node.js零基础视频教程](https://www.bilibili.com/video/BV1gM411W7ex) nodejs新手到高手，如果有颗全栈梦，这个技术讲得很细
- [30分钟掌握Webpack](https://www.bilibili.com/video/BV11g411y7Sd) 快速掌握Webpack
- [AI全栈导师](https://www.studywithgpt.com/zh-cn) 利用AI技术自动生成教学文档，适合基础不扎实去细化学习。

#### ***[50projects50days](https://github.com/bradtraversy/50projects50days) 学完之后你可以这个通过这个仓库来做 50 个迷你小项目来测试磨练下基础前端技能。***


## React官方资源

- [React 官方文档](https://react.dev/) - 官方 React 文档
- [React 官方中文文档](https://zh-hans.react.dev/) - 最新的 React 官方中文文档，2023年重写
- [Create React App 中文文档](https://create-react-app.bootcss.com/) - 创建 React 项目的官方工具
- [React Developer Tools](https://chromewebstore.google.com/detail/fmkadmapgofadopljbjfkapdkoienihi?utm_source=item-share-cb) - React 开发者必备的调试工具，可以看到页面是由哪些 React 组件搭建起来的

## React入门教程

- [React 菜鸟教程](https://www.runoob.com/react/react-tutorial.html) - 基础语法入门
- [2025 React 19课程](https://www.youtube.com/watch?v=TtPXvEcE11E) - 新鲜出炉的最新2025 React 19课程，现在免费
- [针对新手的React学习手册](https://www.freecodecamp.org/news/react-for-beginners-handbook/) - 涵盖最基本的react核心概念，方便随时查阅学习，非常适合小白。
- [React-Router 中文文档](https://react-router.docschina.org/) - React 路由中文文档
- [React 入门实战教程](https://x.zhixing.co/courses/react-hands-on-tutorial-for-beginners/) - 边学边练
- [React学习指南](https://www.freecodecamp.org/news/how-to-learn-react-step-by-step/) - 如何在3到6个月内掌握React
- [ES6特性](https://www.w3schools.com/js/js_es6.asp) - 查看ES6和其他最新版本特性
- [React 备忘单](https://www.shecodes.io/cheatsheets/react) - 针对初学者的全面 React 备忘单
- [React 模式](https://reactpatterns.cn/) - 18 种短小精悍的 React 模式案例，通俗易懂值得收藏
- [React 学习路径](https://github.com/tuture-dev/react-roadmap) - React 前端工程师实战学习路线
- [React visualized](https://react.gg/visualized) - 一个专门用于可视化解释 React 框架概念的教育网站
- [如何使用 React Developer Tools](https://www.freecodecamp.org/news/how-to-use-react-devtools/) - 通过一些有用的示例向您展示如何使用 React Developer Tools


## 视频教程
### 入门视频教程

一定要边学边写，避免一遍过就结束了。
- [React 技术全家桶](https://www.bilibili.com/video/BV1wy4y1D7JT) - B站尚硅谷React教程
- [React 速成课程](https://www.youtube.com/watch?v=LDB4uaJ87e0) - 3小时速通 React 的基础知识
- [React基础到项目实战](https://www.bilibili.com/video/BV1bS4y1b7NV/) - React18的视频教程
- [最新React课程](https://www.youtube.com/watch?v=CgkZ7MvWUAA&t=1256s) - Youtube Bro Code的react课程
- [React 初学者指导](https://www.youtube.com/watch?v=SqcY0GlETPk) 
- [React的全套课程](https://www.youtube.com/watch?v=x4rFhThSX04) - Youtube上的React精品全套课程
- [React JS 初学者完整课程](https://www.youtube.com/watch?v=RVFAyFWO4go) - 包含近 9 小时的 React JS 代码和指导
- [超全的React初学者课程列表](https://www.youtube.com/playlist?list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza)
- [使用 Redux Toolkit学习React 18](https://www.youtube.com/watch?v=x4rFhThSX04) - 针对初学者的完整课程中学习如何使用React 18和Redux Toolkit

### 入门实战视频

要深入了解React开发流程，不仅要掌握技术细节，还要理解作者的编码思路和写作规范。
- [全栈应用项目实战](https://www.youtube.com/watch?v=MDZC8VDZnV8) - 学习在23小时内构建 4 个全栈项目
- [构建一个简单的电影应用](https://www.youtube.com/watch?v=G6D9cBaLViA&t=183s) - 使用 React 和 Vite 构建一个简单的电影应用
- [边学边练](https://www.youtube.com/watch?v=iKpkVKubvKk) - 用React部署 3 个现代 Web 应用程序
- [通过一个小项目学习React](https://www.youtube.com/watch?v=Rh3tobg7hEo) - 通过一个项目分解您需要了解的React中的所有最重要的概念。
- [构建一个LMS网站](https://www.youtube.com/watch?v=p2zWawmDkF4) - 了解如何使用 React JS 创建完整的 LMS 网站，以及类似 Udemy 的网站
- [全栈应用项目实战](https://www.youtube.com/watch?v=MDZC8VDZnV8) - 学习在23小时内构建 4 个全栈项目
- [掌握React 18 与TypeScript!](https://www.youtube.com/watch?v=SqcY0GlETPk) - 使用TypeScript学习React 18并构建一个出色的前端应用程序
- [React Native 速成课程](https://www.youtube.com/watch?v=bCpFbERgj7s) - 3小时内构建一个移动应用程序

### 精选Youtube频道

收集适合学习React和相关技术的优质频道

- [JavaScript Mastery](https://www.youtube.com/@javascriptmastery) - 专注于提供高质量的JavaScript和前端开发教程，通过实际项目构建来教授现代web开发技术，特别关注React、Next.js等流行框架和全栈应用开发
- [Programming with Mosh](https://www.youtube.com/@programmingwithmosh) - 提供了完整的React入门到精通的课程，涵盖React基础知识、组件、props、状态管理等
- [Codevolution](https://www.youtube.com/@Codevolution) - 每周更新最新的Web技术课程，涵盖大量React， js，next.js相关课程
- [Code Bootcamp](https://www.youtube.com/@TheCodeBootcamp/videos) - 用可视化图解的方式深入浅出地讲解React核心概念的油管频道
- [freeCodeCamp](https://www.youtube.com/@freecodecamp) - 提供大量免费的编程教程，包括React、JavaScript等前端技术的完整课程
- [Traversy Media](https://www.youtube.com/@TraversyMedia) - 涵盖各种Web开发技术的实用教程，包括React及其生态系统
- [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified) - 用简单易懂的方式讲解React和其他Web开发技术
- [The Net Ninja](https://www.youtube.com/@NetNinja) - 提供系统化的React教程系列，从基础到高级特性

### 其他

学习React当中遇到的其他方面知识汇总

- [一小时彻底搞懂跨域和解决方案](https://www.bilibili.com/video/BV1pT421k7yz) - 我们在前后端交互的时候经常会遇到一个问题：跨域，如果想详细了解并解决这个问题可以看一下这个视频

## 优质博客
- [React 状态管理](https://www.redux.org.cn/) - Redux 中文文档
- [前端精读周刊](https://github.com/ascoders/weekly) - 包含一些React文章
- [React 状态管理](https://www.redux.org.cn/) - 包含大量 React 文章
- [阮一峰的网络日志](https://www.ruanyifeng.com/blog/) - 包含对于前端领域的独特见解
- [Dan Abramov的博客](https://overreacted.io/)
- [Kent C. Dodd的博客](https://kentcdodds.com/)

## 开源电子书
- [React 技术揭秘](https://react.iamkasong.com/) - React 源码解析
- [React 入门指南](https://www.kancloud.cn/kancloud/react-quickstart/44631) - 快速入门React
- [React 入门教程](https://hulufei.gitbooks.io/react-tutorial/content/introduction.html) - 很细的入门教程
- [React Book](https://softchris.github.io/react-book/#/) - 关于 React 的免费书籍。适合初学者到中级水平。
- [React freebook](https://github.com/EOEboh/Free-Software-Books/blob/main/books/dev-books/React/react.md) - github上整理的一些react书籍列表
- [React 19源码解析](https://blog.xiguadev.com/react-code/overview/interview) - 从基础到深入，全方位解析 React 19 的架构设计与实现原理。

## 学习社区
在学习中我们会遇到 一些问题，可以去社区或一些网站寻找答案，下面推荐一些好的React社区网站。
- [stack overflow](https://stackoverflow.com/questions/tagged/reactjs) 
- [知乎上的React话题](https://www.zhihu.com/topic/20013159/hot)
- [segmentfault React 话题](https://segmentfault.com/t/react) 
- [V2EX的React话题](https://www.v2ex.com/go/react) 
- [DEV社区](https://dev.to/) - 分享各种关于React的学习教程，资源等。
- [Medium](https://medium.com/) - 高质量的英文社区，涵盖关于React的精品文章。
- [Reactiflux](https://www.reactiflux.com/) - 我们是一个由20多万名开发者组成的聊天社区，专注于React。

## 社交账号
这里收集一些各个平台的社交账号，关注这些账号可以获得关于React的最新信息等
- [React官方账号](https://x.com/reactjs)
- [React Native官方账号](https://x.com/reactnative)
- [DEV Community官方账号](https://x.com/ThePracticalDev) - 有各种React教程博客
- [freeCodeCamp官方账号](https://x.com/freeCodeCamp) - 不定期分享各种编程教程，知识，包括React
- [React DEV](https://x.com/reactdevz) - 不定期分享分享与React相关的教程、课程、书籍、工作……
- [React Trends](https://x.com/ReactJSTrends) - 不定期发布ReactJs最热门趋势
- [Lee Robinson](https://x.com/leeerob) - 教一些react，next.js的知识
- [@The_React_Dev](https://x.com/The_React_Dev) - 没事发布一些精选React教程帖子
- [@petarivanovv9](https://x.com/petarivanovv9) - 实用的 React、Node 和软件架构技巧 
- [@remix_run](https://x.com/remix_run) - 使用 Remix 和 React Router 构建更好的网站
- [@housecor](https://x.com/housecor) - 每天分享JavaScript和React开发技巧，内容实用
- [kentcdodds](https://x.com/kentcdodds) - Epic React Dev课程创作者，提供全面React教程
- [@ryanflorence](https://x.com/ryanflorence) - Remix联合创始人，讨论React框架和路由相关内容，适合框架学习者
- [@BroCode1508](https://x.com/BroCode1508) - 前端开发人员，精通 React.js、Next.js、Node.js 和 Express.js

## React框架
这些是一些常用的 React 框架，它们可以帮助你快速开发不同类型的 React 应用。每个框架都有不同的特点和用途，适合不同的项目需求。
- [next](https://github.com/vercel/next.js) - React 框架
- [remix](https://github.com/remix-run/remix) - 专注于用户界面的全栈 Web 框架
- [gatsby](https://github.com/gatsbyjs/gatsby) - 使用 React 构建现代网站
- [react-admin](https://github.com/marmelab/react-admin) - 用于构建 B2B 应用的前端框架
- [refine](https://github.com/refinedev/refine) - 构建基于 React 的 CRUD 应用，无限制
- [React Native](https://reactnative.dev/) - 用于构建移动应用的框架

## React开发工具
这些工具和库都是用来优化和增强 React 开发体验的。
- [create-react-app](https://github.com/facebook/create-react-app) - 通过一个命令设置现代 Web 应用
- [vite](https://github.com/vitejs/vite) - 下一代前端工具
- [parcel](https://github.com/parcel-bundler/parcel) - 零配置的 Web 构建工具
- [million](https://github.com/aidenybai/million) - 极快且轻量级的优化编译器
- [reactotron](https://github.com/skellock/reactotron) - 用于检查 React 和 React Native 项目的桌面应用
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - React 特定的 ESLint 规则
- [why-did-you-render](https://github.com/welldone-software/why-did-you-render) - 通知您关于可避免的重渲染的 React 补丁

## React优质组件
这些是常用的 React 组件库，可以帮助你快速构建各种功能的组件。
- [Awesome React Components](https://github.com/brillout/awesome-react-components)
- [react-select](https://github.com/JedWatson/react-select) - React 的选择组件
- [react-big-calendar](https://github.com/jquense/react-big-calendar) - 日历组件
- [react-datepicker](https://github.com/Hacker0x01/react-datepicker/) - 简单可重用的日期选择器组件
- [react-loading-skeleton](https://github.com/dvtng/react-loading-skeleton) - 创建自动适应应用的骨架屏
- [react-qrcode](https://github.com/zpao/qrcode.react) - React 二维码组件
- [react-archer](https://github.com/pierpo/react-archer) - 在 React 元素之间绘制箭头
- [react-icons](https://github.com/react-icons/react-icons) - 流行图标包的 SVG React 图标
- [react-complex-tree](https://github.com/lukasbach/react-complex-tree) - 无偏见的可访问树
- [react-insta-stories](https://github.com/mohitk05/react-insta-stories) - Instagram 故事风格的 React 组件
- [swiper](https://github.com/nolimits4web/swiper) - 最现代的移动触摸滑块
- [keen-slider](https://github.com/rcbyr/keen-slider) - 触摸滑块轮播
- [cookie-consent-banner](https://github.com/porscheofficial/cookie-consent-banner) - 轻量灵活的 Cookie 同意横幅
- [heart-switch](https://github.com/anatoliygatt/heart-switch) - 心形切换开关组件
- [kbar](https://github.com/timc1/kbar) - 快速、便携且可扩展的 cmd+k 界面
- [tagify](https://github.com/yairEO/tagify) - 轻量高效的标签输入组件
- [puck](https://github.com/measuredco/puck) - React 的可视化编辑器

## 其他工具资源
- [codesandbox](https://codesandbox.io/) - 在线代码编辑器，让开发者无需本地配置，适合快速开发调试。
- [CodePen](https://codepen.io/) - 一个在线前端开发平台，可在浏览器中创建、编辑和分享前端代码。
- [swr](https://github.com/vercel/swr) - 用于数据请求的 React Hooks 库。该项目是帮助开发者简化数据请求逻辑的 React 库
- [million](https://github.com/aidenybai/million) - 优化 React 性能，让您的 React 速度在几分钟内（而不是几个月）提高 70%。
- [FeHelper](https://github.com/zxlie/FeHelper) - 一个浏览器扩展，格式化和美化JSON数据，使其更易读和分析
- [Babel](https://babeljs.io/) - 一个 JavaScript 编译器，把 “新的 JavaScript 语法” 转换成 “旧的、浏览器能识别的语法”。
  
---
如果这个项目对你有帮助，请不要忘记给它一个star ⭐
