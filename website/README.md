# React 学习资源导航网站

这是一个可视化的 React 学习资源导航网站，提供友好的浏览界面和搜索功能。

## 在线访问

🌐 [https://react.knowledgefxg.com/](https://react.knowledgefxg.com/)

## 功能特性

- 📱 响应式设计，支持移动端和桌面端
- 🔍 实时搜索功能
- 🎨 现代化 UI 设计
- 📑 11个资源分类
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
- 🔗 自动获取网站图标
- 💨 快速加载和流畅交互

## 技术栈

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (图标库)

## 本地运行

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:5173` 查看网站。

### 构建生产版本

```bash
npm run build
```

构建后的文件在 `dist/` 目录下。

## 如何添加新资源

编辑 `src/data/resources.ts` 文件，在相应的分类下添加新的资源对象：

```typescript
{
  title: "资源名称",
  url: "https://example.com",
  description: "资源描述"
}
```

## 许可证

MIT License
