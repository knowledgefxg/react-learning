import { 
  GraduationCap, 
  Landmark, 
  BookOpen, 
  Video, 
  Tv,
  Newspaper, 
  Library, 
  Users, 
  Box, 
  Wrench, 
  Puzzle, 
  Share2,
  MoreHorizontal,
  type LucideIcon
} from 'lucide-react';

export interface Resource {
  title: string;
  url: string;
  description: string;
}

export interface Category {
  id: string;
  title: string;
  icon: LucideIcon;
  resources: Resource[];
}

export const categories: Category[] = [
  {
    id: "prerequisites",
    title: "React学前知识",
    icon: GraduationCap,
    resources: [
      {
        title: "三小时前端入门（html+css+js）",
        url: "https://www.bilibili.com/video/BV1BT4y1W7Aw",
        description: "深入浅出，3小时快速掌握前端三件套核心概念。"
      },
      {
        title: "html+css零基础教程",
        url: "https://www.bilibili.com/video/BV1p84y1P7Z5",
        description: "如果想要详细了解前端入门技术，这个课程绝对适合，通俗易懂。"
      },
      {
        title: "JavaScript 6小时初学者速成课程",
        url: "https://www.youtube.com/watch?v=LEwi44cWBu8",
        description: "6小时速通js和核心概念"
      },
      {
        title: "JavaScript全套课程",
        url: "https://www.youtube.com/watch?v=lfmg-EJ8gm4",
        description: "来自200多万订阅的博主js全套课程"
      },
      {
        title: "freeCodeCamp学习社区",
        url: "https://www.freecodecamp.org/",
        description: "备受欢迎的编程学习社区，通过边学边练的交互式课程快速学习HTML，Javascript等多种编程语言"
      },
      {
        title: "Git初学者教程：1小时学会Git",
        url: "https://www.youtube.com/watch?v=8JJ101D3knE",
        description: "拥有YouTube四百多万订阅的博主Mosh带你快速掌握Git"
      },
      {
        title: "GitHub小白指南",
        url: "https://github.com/CatOneTwo/GitHub-Tutorial",
        description: "完全针对小白的教程，适合快速上手"
      },
      {
        title: "游戏化学习Git",
        url: "https://learngitbranching.js.org/?locale=zh_CN",
        description: "通过互动式加可视化来教授Git"
      },
      {
        title: "MDN",
        url: "https://developer.mozilla.org/zh-CN/",
        description: "非常重要的 Web 开发文档平台, 遇到不会的就去查一查。"
      },
      {
        title: "1小时快速入门node.js",
        url: "https://www.youtube.com/watch?v=TlB_eWDSMt4",
        description: "学习react前了解基本的 Node.js 概念"
      },
      {
        title: "Node.js零基础视频教程",
        url: "https://www.bilibili.com/video/BV1gM411W7ex",
        description: "nodejs新手到高手，如果有颗全栈梦，这个技术讲得很细"
      },
      
      {
        title: "AI全栈导师",
        url: "https://www.studywithgpt.com/zh-cn",
        description: "利用AI技术自动生成教学文档"
      },
      {
        title: "50projects50days",
        url: "https://github.com/bradtraversy/50projects50days",
        description: "学完之后你可以这个通过这个仓库来做 50 个迷你小项目"
      }
    ]
  },
  {
    id: "official",
    title: "React官方资源",
    icon: Landmark,
    resources: [
      {
        title: "React 官方文档",
        url: "https://react.dev/",
        description: "官方 React 文档"
      },
      {
        title: "React 官方中文文档",
        url: "https://zh-hans.react.dev/",
        description: "最新的 React 官方中文文档，2023年重写"
      },
      {
        title: "Create React App 中文文档",
        url: "https://create-react-app.bootcss.com/",
        description: "创建 React 项目的官方工具"
      },
      {
        title: "React Developer Tools",
        url: "https://chromewebstore.google.com/detail/fmkadmapgofadopljbjfkapdkoienihi?utm_source=item-share-cb",
        description: "React 开发者必备的调试工具"
      }
    ]
  },
  {
    id: "tutorials",
    title: "React入门教程",
    icon: BookOpen,
    resources: [
      {
        title: "React 菜鸟教程",
        url: "https://www.runoob.com/react/react-tutorial.html",
        description: "基础语法入门"
      },
      {
        title: "2025 React 19课程",
        url: "https://www.youtube.com/watch?v=TtPXvEcE11E",
        description: "新鲜出炉的最新2025 React 19课程，现在免费"
      },
      {
        title: "针对新手的React学习手册",
        url: "https://www.freecodecamp.org/news/react-for-beginners-handbook/",
        description: "涵盖最基本的react核心概念，方便随时查阅学习，非常适合小白。"
      },
      {
        title: "React-Router 中文文档",
        url: "https://react-router.docschina.org/",
        description: "React 路由中文文档"
      },
      {
        title: "React 入门实战教程",
        url: "https://x.zhixing.co/courses/react-hands-on-tutorial-for-beginners/",
        description: "边学边练"
      },
      {
        title: "React学习指南",
        url: "https://www.freecodecamp.org/news/how-to-learn-react-step-by-step/",
        description: "如何在3到6个月内掌握React"
      },
      {
        title: "ES6特性",
        url: "https://www.w3schools.com/js/js_es6.asp",
        description: "查看ES6和其他最新版本特性"
      },
      {
        title: "React 备忘单",
        url: "https://www.shecodes.io/cheatsheets/react",
        description: "针对初学者的全面 React 备忘单"
      },
      {
        title: "React 模式",
        url: "https://reactpatterns.cn/",
        description: "18 种短小精悍的 React 模式案例，通俗易懂值得收藏"
      },
      {
        title: "React 学习路径",
        url: "https://github.com/tuture-dev/react-roadmap",
        description: "React 前端工程师实战学习路线"
      },
      {
        title: "React visualized",
        url: "https://react.gg/visualized",
        description: "一个专门用于可视化解释 React 框架概念的教育网站"
      },
      {
        title: "如何使用 React Developer Tools",
        url: "https://www.freecodecamp.org/news/how-to-use-react-devtools/",
        description: "通过一些有用的示例向您展示如何相关工具"
      }
    ]
  },
  {
    id: "videos",
    title: "视频教程",
    icon: Video,
    resources: [
      {
        title: "React 技术全家桶",
        url: "https://www.bilibili.com/video/BV1wy4y1D7JT",
        description: "B站尚硅谷React教程，经典入门"
      },
      {
        title: "React 速成课程",
        url: "https://www.youtube.com/watch?v=LDB4uaJ87e0",
        description: "3小时速通 React 的基础知识"
      },
      {
        title: "React基础到项目实战",
        url: "https://www.bilibili.com/video/BV1bS4y1b7NV/",
        description: "React18的视频教程"
      },
      {
        title: "最新React课程",
        url: "https://www.youtube.com/watch?v=CgkZ7MvWUAA&t=1256s",
        description: "Youtube Bro Code的react课程"
      },
      {
        title: "React 初学者指导",
        url: "https://www.youtube.com/watch?v=SqcY0GlETPk",
        description: "React 初学者指导"
      },
      {
        title: "React的全套课程",
        url: "https://www.youtube.com/watch?v=x4rFhThSX04",
        description: "Youtube上的React精品全套课程"
      },
      {
        title: "React JS 初学者完整课程",
        url: "https://www.youtube.com/watch?v=RVFAyFWO4go",
        description: "包含近9小时的React JS代码和指导"
      },
      {
        title: "超全的React初学者课程列表",
        url: "https://www.youtube.com/playlist?list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza",
        description: "超全的React初学者课程列表"
      },
      {
        title: "使用 Redux Toolkit学习React 18",
        url: "https://www.youtube.com/watch?v=x4rFhThSX04",
        description: "针对初学者的完整课程中学习如何使用React和Redux"
      },
      {
        title: "全栈应用项目实战",
        url: "https://www.youtube.com/watch?v=MDZC8VDZnV8",
        description: "学习在23小时内构建 4 个全栈项目"
      },
      {
        title: "构建一个简单的电影应用",
        url: "https://www.youtube.com/watch?v=G6D9cBaLViA&t=183s",
        description: "使用 React 和 Vite 构建一个简单的电影应用"
      },
      {
        title: "边学边练",
        url: "https://www.youtube.com/watch?v=iKpkVKubvKk",
        description: "用React部署 3 个现代 Web 应用程序"
      },
      {
        title: "通过一个小项目学习React",
        url: "https://www.youtube.com/watch?v=Rh3tobg7hEo",
        description: "通过一个项目分解您需要了解的React中的所有最重要的概念"
      },
      {
        title: "构建一个LMS网站",
        url: "https://www.youtube.com/watch?v=p2zWawmDkF4",
        description: "了解如何使用 React JS 创建完整的 LMS 网站"
      },
      {
        title: "全栈应用项目实战",
        url: "https://www.youtube.com/watch?v=MDZC8VDZnV8",
        description: "学习在23小时内构建 4 个全栈项目"
      },
      {
        title: "掌握React 18 与TypeScript",
        url: "https://www.youtube.com/watch?v=SqcY0GlETPk",
        description: "使用TypeScript学习React 18并构建一个前端应用程序"
      },
      {
        title: "React Native 速成课程",
        url: "https://www.youtube.com/watch?v=bCpFbERgj7s",
        description: "3小时内构建一个移动应用程序"
      }
    ]
  },
  {
    id: "youtube-channels",
    title: "Youtube频道",
    icon: Tv,
    resources: [
      {
        title: "JavaScript Mastery",
        url: "https://www.youtube.com/@javascriptmastery",
        description: "专注于提供高质量的JavaScript和前端开发教程，通过实际项目构建来教授现代web开发技术"
      },
      {
        title: "Programming with Mosh",
        url: "https://www.youtube.com/@programmingwithmosh",
        description: "提供了完整的React入门到精通的课程，涵盖React基础知识、组件、props、状态管理等"
      },
      {
        title: "Codevolution",
        url: "https://www.youtube.com/@Codevolution",
        description: "每周更新最新的Web技术课程，涵盖大量React、JavaScript、Next.js相关课程"
      },
      {
        title: "Code Bootcamp",
        url: "https://www.youtube.com/@codebcamp",
        description: "用可视化图解的方式深入浅出地讲解React核心概念的YouTube频道"
      },
      {
        title: "freeCodeCamp",
        url: "https://www.youtube.com/@freecodecamp",
        description: "提供大量免费的编程教程，包括React、JavaScript等前端技术的完整课程"
      },
      {
        title: "Traversy Media",
        url: "https://www.youtube.com/@TraversyMedia",
        description: "涵盖各种Web开发技术的实用教程，包括React及其生态系统"
      },
      {
        title: "Web Dev Simplified",
        url: "https://www.youtube.com/@WebDevSimplified",
        description: "用简单易懂的方式讲解React和其他Web开发技术"
      },
      {
        title: "The Net Ninja",
        url: "https://www.youtube.com/@NetNinja",
        description: "提供系统化的React教程系列，从基础到高级特性"
      }
    ]
  },
  {
    id: "blogs",
    title: "优质博客",
    icon: Newspaper,
    resources: [
      {
        title: "React 状态管理",
        url: "https://www.redux.org.cn/",
        description: "Redux 中文文档"
      },
      {
        title: "前端精读周刊",
        url: "https://github.com/ascoders/weekly",
        description: "包含一些React文章"
      },
      {
        title: "阮一峰的网络日志",
        url: "https://www.ruanyifeng.com/blog/",
        description: "包含对于前端领域的独特见解"
      },
      {
        title: "Dan Abramov的博客",
        url: "https://overreacted.io/",
        description: "React 核心团队成员的博客"
      },
      {
        title: "Kent C. Dodd的博客",
        url: "https://kentcdodds.com/",
        description: "Kent C. Dodd的博客"
      }
    ]
  },
  {
    id: "books",
    title: "开源电子书",
    icon: Library,
    resources: [
      {
        title: "React 技术揭秘",
        url: "https://react.iamkasong.com/",
        description: "React 源码解析，深入理解 React 原理"
      },
      {
        title: "React 入门指南",
        url: "https://www.kancloud.cn/kancloud/react-quickstart/44631",
        description: "快速入门React"
      },
      {
        title: "React Book",
        url: "https://softchris.github.io/react-book/#/",
        description: "关于 React 的免费书籍。适合初学者到中级水平。"
      },
      {
        title: "React freebook",
        url: "https://github.com/EOEboh/Free-Software-Books/blob/main/books/dev-books/React/react.md",
        description: "github上整理的一些react书籍列表"
      },
      {
        title: "React 19源码解析",
        url: "https://blog.xiguadev.com/react-code/overview/interview",
        description: "从基础到深入，全方位解析 React 19 的架构设计与实现原理"
      }
    ]
  },
  {
    id: "community",
    title: "学习社区",
    icon: Users,
    resources: [
      {
        title: "Stack Overflow",
        url: "https://stackoverflow.com/questions/tagged/reactjs",
        description: "全球最大的程序员问答社区 React 标签"
      },
      {
        title: "知乎 React 话题",
        url: "https://www.zhihu.com/topic/20013159/hot",
        description: "中文高质量问答社区"
      },
      {
        title: "segmentfault React 话题",
        url: "https://segmentfault.com/t/react",
        description: "各类React问题讨论"
      },
      {
        title: "V2EX的React话题",
        url: "https://www.v2ex.com/go/react",
        description: "V2EX社区的React话题"
      },
      {
        title: "DEV社区",
        url: "https://dev.to/",
        description: "分享各种关于React的学习教程，资源等。"
      },
      {
        title: "Medium",
        url: "https://medium.com/",
        description: "高质量的英文社区，涵盖关于React的精品文章"
      },
      {
        title: "Reactiflux",
        url: "https://www.reactiflux.com/",
        description: "专注于 React 的 Discord 聊天社区"
      }
    ]
  },
  {
    id: "frameworks",
    title: "React 框架",
    icon: Box,
    resources: [
      {
        title: "Next.js",
        url: "https://github.com/vercel/next.js",
        description: "最流行的 React 服务端渲染框架"
      },
      {
        title: "Remix",
        url: "https://github.com/remix-run/remix",
        description: "专注于用户界面的全栈 Web 框架"
      },
      {
        title: "Gatsby",
        url: "https://github.com/gatsbyjs/gatsby",
        description: "使用 React 构建现代静态网站"
      },
      {
        title: "react-admin",
        url: "https://github.com/marmelab/react-admin",
        description: "用于构建 B2B 应用的前端框架"
      },
      {
        title: "refine",
        url: "https://github.com/refinedev/refine",
        description: "构建基于 React 的 CRUD 应用，无限制"
      },
      {
        title: "React Native",
        url: "https://reactnative.dev/",
        description: "用于构建移动应用的框架"
      }
    ]
  },
  {
    id: "tools",
    title: "React 开发工具",
    icon: Wrench,
    resources: [
      {
        title: "Vite",
        url: "https://github.com/vitejs/vite",
        description: "下一代前端构建工具，极速开发体验"
      },
      {
        title: "Create React App",
        url: "https://github.com/facebook/create-react-app",
        description: "通过一个命令设置现代 Web 应用"
      },
      {
        title: "Reactotron",
        url: "https://github.com/skellock/reactotron",
        description: "用于检查 React 和 React Native 项目的桌面应用"
      },
      {
        title: "parcel",
        url: "https://github.com/parcel-bundler/parcel",
        description: "零配置的 Web 构建工具"
      },
      {
        title: "million",
        url: "https://github.com/aidenybai/million",
        description: "极快且轻量级的优化编译器"
      },
      {
        title: "eslint-plugin-react",
        url: "https://github.com/yannickcr/eslint-plugin-react",
        description: "React 特定的 ESLint 规则"
      },
      {
        title: "why-did-you-render",
        url: "https://github.com/welldone-software/why-did-you-render",
        description: "通知您关于可避免的重渲染的 React 补丁"
      }
    ]
  },
  {
    id: "components",
    title: "React 优质组件",
    icon: Puzzle,
    resources: [
      {
        title: "Awesome React Components",
        url: "https://github.com/brillout/awesome-react-components",
        description: "React 组件大合集"
      },
      {
        title: "react-select",
        url: "https://github.com/JedWatson/react-select",
        description: "React 的选择组件"
      },
      {
        title: "react-big-calendar",
        url: "https://github.com/jquense/react-big-calendar",
        description: "日历组件"
      },
      {
        title: "react-datepicker",
        url: "https://github.com/Hacker0x01/react-datepicker/",
        description: "简单可重用的日期选择器组件"
      },
      {
        title: "react-loading-skeleton",
        url: "https://github.com/dvtng/react-loading-skeleton",
        description: "创建自动适应应用的骨架屏"
      },
      {
        title: "react-qrcode",
        url: "https://github.com/zpao/qrcode.react",
        description: "React 二维码组件"
      },
      {
        title: "react-archer",
        url: "https://github.com/pierpo/react-archer",
        description: "在 React 元素之间绘制箭头"
      },
      {
        title: "react-icons",
        url: "https://github.com/react-icons/react-icons",
        description: "流行图标包的 SVG React 图标"
      },
      {
        title: "react-complex-tree",
        url: "https://github.com/lukasbach/react-complex-tree",
        description: "无偏见的可访问树"
      },
      {
        title: "react-insta-stories",
        url: "https://github.com/mohitk05/react-insta-stories",
        description: "Instagram 故事风格的 React 组件"
      },
      {
        title: "swiper",
        url: "https://github.com/nolimits4web/swiper",
        description: "最现代的移动触摸滑块"
      },
      {
        title: "keen-slider",
        url: "https://github.com/rcbyr/keen-slider",
        description: "触摸滑块轮播"
      },
      {
        title: "cookie-consent-banner",
        url: "https://github.com/porscheofficial/cookie-consent-banner",
        description: "轻量灵活的 Cookie 同意横幅"
      },
      {
        title: "heart-switch",
        url: "https://github.com/anatoliygatt/heart-switch",
        description: "心形切换开关组件"
      },
      {
        title: "kbar",
        url: "https://github.com/timc1/kbar",
        description: "快速、便携且可扩展的 cmd+k 界面"
      },
      {
        title: "tagify",
        url: "https://github.com/yairEO/tagify",
        description: "轻量高效的标签输入组件"
      },
      {
        title: "puck",
        url: "https://github.com/measuredco/puck",
        description: "React 的可视化编辑器"
      }
    ]
  },
  {
    id: "social",
    title: "社交账号",
    icon: Share2,
    resources: [
      {
        title: "React官方账号",
        url: "https://twitter.com/reactjs",
        description: "React官方Twitter账号，获取React最新动态和公告"
      },
      {
        title: "React Native官方账号",
        url: "https://twitter.com/reactnative",
        description: "React Native官方Twitter账号"
      },
      {
        title: "DEV Community官方账号",
        url: "https://twitter.com/thepracticaldev",
        description: "有各种React教程博客"
      },
      {
        title: "freeCodeCamp官方账号",
        url: "https://twitter.com/freeCodeCamp",
        description: "不定期分享各种编程教程、知识，包括React"
      },
      {
        title: "React DEV",
        url: "https://twitter.com/ReactDeveloper",
        description: "不定期分享与React相关的教程、课程、书籍、工作"
      },
      {
        title: "React Trends",
        url: "https://twitter.com/ReactTrends",
        description: "不定期发布ReactJs最热门趋势"
      },
      {
        title: "Lee Robinson",
        url: "https://twitter.com/leeerob",
        description: "教一些React、Next.js的知识"
      },
      {
        title: "@The_React_Dev",
        url: "https://twitter.com/The_React_Dev",
        description: "没事发布一些精选React教程帖子"
      },
      {
        title: "@petarivanovv9",
        url: "https://twitter.com/petarivanovv9",
        description: "实用的 React、Node 和软件架构技巧"
      },
      {
        title: "@remix_run",
        url: "https://twitter.com/remix_run",
        description: "使用 Remix 和 React Router 构建更好的网站"
      },
      {
        title: "@housecor",
        url: "https://twitter.com/housecor",
        description: "每天分享JavaScript和React开发技巧，内容实用"
      },
      {
        title: "kentcdodds",
        url: "https://twitter.com/kentcdodds",
        description: "Epic React Dev课程创作者，提供全面React教程"
      },
      {
        title: "@ryanflorence",
        url: "https://twitter.com/ryanflorence",
        description: "Remix联合创始人，讨论React框架和路由相关内容，适合框架学习者"
      },
      {
        title: "@BroCode1508",
        url: "https://twitter.com/BroCode1508",
        description: "前端开发人员，精通 React.js、Next.js、Node.js 和 Express.js"
      }
    ]
  },
  {
    id: "others",
    title: "其他工具/资源",
    icon: MoreHorizontal,
    resources: [
      {
        title: "codesandbox",
        url: "https://codesandbox.io/",
        description: "在线代码编辑器，让开发者无需本地配置，适合快速开发调试"
      },
      {
        title: "CodePen",
        url: "https://codepen.io/",
        description: "一个在线前端开发平台，可在浏览器中创建、编辑和分享前端代码"
      },
      {
        title: "swr",
        url: "https://github.com/vercel/swr",
        description: "用于数据请求的 React Hooks 库。该项目是帮助开发者简化数据请求逻辑的 React 库"
      },
      {
        title: "million",
        url: "https://github.com/aidenybai/million",
        description: "优化 React 性能，让您的 React 速度在几分钟内（而不是几个月）提高 70%"
      },
      {
        title: "FeHelper",
        url: "https://github.com/zxlie/FeHelper",
        description: "一个浏览器扩展，格式化和美化JSON数据，使其更易读和分析"
      },
      {
        title: "Babel",
        url: "https://babeljs.io/",
        description: "一个 JavaScript 编译器，把转换成旧的、浏览器能识别的语法"
      }
    ]
  }
];
