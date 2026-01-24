# React 学习资源导航网站

这是一个可视化的 React 学习资源导航网站，提供友好的浏览界面和搜索功能。

## 在线访问

🌐 [https://react.knowledgefxg.com/](https://react.knowledgefxg.com/)

## 功能特性

- 📱 **响应式设计** - 完美支持移动端、平板和桌面端
- 🔍 **实时搜索** - 支持按标题和描述搜索，快速定位资源
- 🎨 **现代化 UI** - 采用暗色主题，精美的卡片设计和流畅动画
- 📑 **13个资源分类** - 覆盖 React 学习全流程
  - React学前知识
  - React官方资源
  - React入门教程
  - 视频教程
  - Youtube频道
  - 优质博客
  - 开源电子书
  - 学习社区
  - React框架
  - React开发工具
  - React优质组件
  - 社交账号
  - 其他工具/资源
- 🔗 **自动获取网站图标** - 展示网站 favicon，提升识别度
- 💨 **快速加载** - 优化的性能和流畅的交互体验
- 🎯 **智能导航** - 滚动自动更新侧边栏激活状态
- ⌨️ **键盘友好** - 支持 Cmd+K 快捷搜索

## 技术栈

- **框架**: React 19 - 最新版本，性能更优
- **语言**: TypeScript - 类型安全，开发体验更好
- **构建工具**: Vite - 极速的开发体验和构建速度
- **样式**: Tailwind CSS - 实用优先的 CSS 框架
- **图标**: Lucide React - 精美的开源图标库

## 项目结构

```
website/
├── src/
│   ├── data/
│   │   └── resources.ts      # 资源数据配置
│   ├── assets/               # 静态资源
│   ├── App.tsx               # 主应用组件
│   ├── App.css               # 应用样式
│   ├── main.tsx              # 入口文件
│   └── index.css             # 全局样式
├── public/                   # 公共资源
├── index.html                # HTML 模板
├── package.json              # 项目配置
├── vite.config.ts            # Vite 配置
├── tailwind.config.js        # Tailwind 配置
├── tsconfig.json             # TypeScript 配置
└── README.md                 # 项目文档
```

## 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0 或 pnpm >= 8.0.0

### 安装依赖

```bash
# 使用 npm
npm install

# 或使用 pnpm（推荐，更快）
pnpm install
```

### 启动开发服务器

```bash
npm run dev
```

成功启动后，访问 `http://localhost:5173` 查看网站。

开发服务器特性：
- ⚡️ 极速热更新（HMR）
- 🔍 实时错误提示
- 🎯 TypeScript 类型检查

### 构建生产版本

```bash
npm run build
```

构建后的文件在 `dist/` 目录下，包含：
- 优化的 JavaScript 包
- 压缩的 CSS 文件
- 静态资源文件

### 预览生产版本

```bash
npm run preview
```

在本地预览生产构建，确保部署前一切正常。

## 如何添加新资源

### 1. 编辑资源文件

打开 `src/data/resources.ts`，找到对应的分类，添加新资源：

```typescript
{
  title: "资源名称",
  url: "https://example.com",
  description: "简短的资源描述，最好控制在一行以内"
}
```

### 2. 添加新分类（可选）

如果需要添加新的资源分类：

```typescript
import { YourIcon } from 'lucide-react';

export const categories: Category[] = [
  // ... 现有分类
  {
    id: "your-category-id",
    title: "你的分类名称",
    icon: YourIcon,  // 从 lucide-react 选择合适的图标
    resources: [
      // 资源列表
    ]
  }
];
```

可用图标查看：[Lucide Icons](https://lucide.dev/icons/)

### 3. 资源质量标准

添加资源时，请确保：
- ✅ 链接有效且内容优质
- ✅ 描述准确简洁（50字以内）
- ✅ 适合 React 学习者
- ✅ 中文资源优先，英文资源次之
- ✅ 免费资源优先

## 部署指南

### Vercel 部署（推荐）

1. Fork 本仓库
2. 在 [Vercel](https://vercel.com) 导入项目
3. Vercel 会自动检测 Vite 配置并部署
4. 每次 push 到 main 分支会自动部署

### Netlify 部署

1. 在 [Netlify](https://netlify.com) 导入项目
2. 构建设置：
   - Build command: `npm run build`
   - Publish directory: `dist`
3. 点击 Deploy

### 其他平台

支持任何静态网站托管平台，如：
- Cloudflare Pages
- GitHub Pages
- 阿里云 OSS
- 腾讯云 COS

## 开发指南

### 代码规范

项目使用 ESLint 进行代码检查：

```bash
npm run lint
```

### 样式规范

- 使用 Tailwind CSS 实用类
- 避免自定义 CSS（特殊情况除外）
- 保持响应式设计

### TypeScript

- 为新组件添加类型定义
- 避免使用 `any` 类型
- 导出可复用的类型

### 性能优化

- 使用 React.memo 优化组件渲染
- 图片使用懒加载
- 分类数据使用虚拟滚动（如需要）

## 常见问题

### Q: 如何修改网站主题颜色？

A: 编辑 `tailwind.config.js` 中的颜色配置：

```javascript
colors: {
  primary: '#61dafb',  // 主题色
  // ... 其他颜色
}
```

### Q: 网站图标不显示怎么办？

A: 项目使用 Google Favicon API 获取图标，如果无法访问，可以：
1. 使用 VPN
2. 修改 `getFaviconUrl` 函数使用其他服务

### Q: 如何添加统计分析？

A: 在 `index.html` 中添加统计代码（如 Google Analytics）：

```html
<head>
  <!-- Google Analytics -->
  <script async src="..."></script>
</head>
```

### Q: 构建后文件太大怎么办？

A: 可以进行以下优化：
- 启用代码分割
- 压缩图片资源
- 使用 CDN 加载大型库

## 贡献指南

欢迎贡献！你可以通过以下方式参与：

1. 🐛 **报告问题** - 发现 bug 或提出改进建议
2. 📝 **添加资源** - 推荐优质的 React 学习资源
3. 💻 **提交代码** - 修复 bug 或添加新功能
4. 📖 **完善文档** - 改进文档和示例

### 提交流程

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 提交规范

- feat: 新功能
- fix: 修复 bug
- docs: 文档更新
- style: 代码格式调整
- refactor: 重构
- perf: 性能优化
- test: 测试相关
- chore: 构建/工具相关

## 学习路径建议

如果你是 React 初学者，建议按以下顺序学习：

1. **前置知识** (1-2周)
   - HTML/CSS 基础
   - JavaScript ES6+
   - Git 版本控制

2. **React 基础** (2-3周)
   - React 官方文档
   - 菜鸟教程
   - 基础视频课程

3. **React 进阶** (3-4周)
   - Hooks 深入
   - 状态管理（Redux/Zustand）
   - React Router

4. **实战项目** (4-6周)
   - 跟随教程做项目
   - 独立完成小项目
   - 学习最佳实践

5. **全栈开发** (持续学习)
   - Next.js 框架
   - 后端 API 集成
   - 部署和运维

## 技术支持

- 💬 [讨论区](https://github.com/knowledgefxg/react-learning/discussions)
- 🐛 [问题反馈](https://github.com/knowledgefxg/react-learning/issues)
- 📧 联系邮箱：[your-email@example.com]

## 许可证

MIT License - 查看 [LICENSE](../LICENSE) 文件了解详情

## 致谢

感谢所有贡献者和资源提供者！

---

⭐️ 如果这个项目对你有帮助，请给个 Star 支持一下！
