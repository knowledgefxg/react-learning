# React学习资源

嘿，欢迎来到React学习资源库！这里整理了一些React全栈开发的学习资料，从零基础到实战项目都有覆盖。不管你是刚入门的新手，还是想提升技术的开发者，都能在这里找到适合自己的内容。仓库的目标很简单：希望每个人都能快速上手React开发，并且能够构建出可用于生产环境的应用。别担心经验不足，每个高手都是从新手开始的。带着热情和坚持，相信你也可以做到！这个资源库会持续更新，如果你也有好的学习资源，欢迎分享出来，让我们一起打造更好的学习社区。毕竟，学习的路上有伴才更有趣，不是吗？ :smile:

如果你感兴趣，这是我推荐的React学习资源：

**核心技术**

- [TypeScript](https://www.typescriptlang.org/docs/) - 用于类型安全
- [React](https://reactjs.org/) - 用于构建基于组件的UI
- [React Context](https://reactjs.org/docs/context.html) 和 [hooks](https://reactjs.org/docs/hooks-intro.html) - 用于状态管理

**基础库**

- [React Router](https://reactrouter.com/) - 用于导航
- [React Query](https://react-query.tanstack.com/) - 用于通过REST获取数据
- [Apollo GraphQL](https://www.apollographql.com/docs/) - 用于通过GraphQL获取数据
- [React Hook Form](https://react-hook-form.com/get-started) - 用于表单处理
- [ag-Grid](https://www.ag-grid.com) - 功能丰富的JavaScript网格组件
- [Highcharts](https://www.highcharts.com) - 用于交互式图表

**必备工具**

- [Storybook](https://storybook.js.org/) - 用于隔离开发UI组件
- [React Testing Library](https://testing-library.com/) - 用于单元测试
- [Cypress](https://www.cypress.io/) - 用于端到端测试
- [Mock Service Worker](https://mswjs.io/) - 用于模拟HTTP请求
- [Prettier](https://prettier.io/) - 用于统一代码格式

我创建了[React Accelerate模板](https://github.com/PublicisSapient/cra-template-accelerate)来帮助你使用上述技术栈快速启动React应用。

注：如果你觉得这些内容有用，请给这个仓库点个star表示支持。

## 目录

- [React速成课程](#react速成课程)
- [开发环境搭建](#开发环境搭建)
- [CSS](#css)
- [TypeScript](#typescript)
- [React](#react)
- [React Router](#react-router)
- [React Hook Form](#react-hook-form)
- [GraphQL](#graphql)
- [Highcharts](#highcharts)
- [ag-Grid](#ag-grid)
- [测试最佳实践](#测试最佳实践)
- [Jest](#jest)
- [React Testing Library](#react-testing-library)
- [Storybook](#storybook)
- [Mock Service Worker](#mock-service-worker)
- [Cypress](#cypress)
- [Git和代码审查](#git和代码审查)
- [视觉设计](#视觉设计)
- [领域驱动设计](#领域驱动设计)

## React学前知识

学习React肯定要有一些基础知识的，这里准备几个资源让你快速掌握前置知识, 如果你已经掌握了某些主题，可以随时跳过。

- [三小时前端入门（html+css+js）](https://www.bilibili.com/video/BV1BT4y1W7Aw) 深入浅出，3小时快速掌握前端三件套核心概念。
- [CSS零基础速成课程](https://www.youtube.com/watch?v=yfoY53QXEnI) (1:25) - Brad Traversy
- [20分钟掌握Flexbox CSS](https://www.youtube.com/watch?v=JJSoEo8JSnc) (20:00) - Brad Traversy
- [JavaScript零基础速成课程](https://www.youtube.com/watch?v=hdI2bqOjy3c) (1:40) - Brad Traversy
- [TypeScript速成课程](https://www.youtube.com/watch?v=BCg4U1FzODs) (0:53) - Brad Traversy
- [React速成课程](https://www.youtube.com/watch?v=w7ejDZ8SWv8) (1:49) - Brad Traversy
- [Jest速成课程](https://www.youtube.com/watch?v=7r4xVDI2vho) (0:57) - Brad Traversy（不包含模拟，见下文）
- [Jest速成课程](https://www.youtube.com/watch?v=ajiAl5UNzBU)（从0:50开始讲解模拟）- Laith Harb
- [编码规范和模式](./docs/coding-conventions-and-patterns.md) - Naresh Bhatia
- [推荐的文件夹结构](./docs/folder-structure.md) - Naresh Bhatia
- [Code Shaper](https://www.code-shaper.org/docs/getting-started/intro)（使用代码生成的React最佳实践）- Naresh Bhatia

完成后，你可以通过[这个练习](https://github.com/nareshbhatia/react-takeout-exercise)来测试你的理解。

## 开发环境搭建

- [MacOS环境搭建](./docs/dev-machine-setup-macos.md)
- [Windows环境搭建](./docs/dev-machine-setup-windows.md)

## CSS

- [Flexbox完全指南](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS中的像素与相对单位](https://www.24a11y.com/2019/pixels-vs-relative-units-in-css-why-its-still-a-big-deal/)
- [何时使用Em vs. Rem](https://webdesign.tutsplus.com/tutorials/comprehensive-guide-when-to-use-em-vs-rem--cms-23984)
- [EM vs REM vs PX – 为什么你不应该"只使用像素"](https://engageinteractive.co.uk/blog/em-vs-rem-vs-px)
- [5分钟学习CSS变量](https://www.freecodecamp.org/news/learn-css-variables-in-5-minutes-80cf63b4025d/)
- [CSS变量和预处理器变量的区别](https://css-tricks.com/difference-between-types-of-css-variables/)
- [CSS变量 - Lea Verou](https://www.youtube.com/watch?v=2an6-WVPuJU)
- [理解BEM语法](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
- [Get BEM - 命名](http://getbem.com/naming/)

[继续阅读其他章节...]

## 常用链接

- [React官方文档](https://reactjs.org/docs/getting-started.html)
- [TypeScript官方文档](https://www.typescriptlang.org/docs/)
- [React Router文档](https://reactrouter.com/docs/en/v6)
- [React Hook Form文档](https://react-hook-form.com/get-started)
- [Apollo GraphQL教程](https://odyssey.apollographql.com/)
- [Storybook入门指南](https://storybook.js.org/docs/react/get-started/introduction)
- [React Testing Library指南](https://testing-library.com/docs/)
- [Cypress文档](https://docs.cypress.io/guides/overview/why-cypress)

## 推荐博客

- [Dan Abramov的博客](https://overreacted.io/)
- [Kent C. Dodd的博客](https://kentcdodds.com/)

## 许可证

MIT

---
如果这个项目对你有帮助，请不要忘记给它一个star ⭐
