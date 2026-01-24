# 贡献指南

感谢你考虑为 React 学习资源库做出贡献！🎉

## 目录

- [行为准则](#行为准则)
- [如何贡献](#如何贡献)
- [贡献资源](#贡献资源)
- [代码贡献](#代码贡献)
- [提交规范](#提交规范)
- [问题反馈](#问题反馈)

## 行为准则

### 我们的承诺

为了营造一个开放和友好的环境，我们承诺让每个人都能够参与到项目中来，无论其经验水平、性别、性别认同和表达、性取向、残疾、外貌、体型、种族、年龄或宗教信仰。

### 我们的标准

积极行为的例子包括：
- 使用友好和包容的语言
- 尊重不同的观点和经验
- 优雅地接受建设性批评
- 关注对社区最有利的事情
- 对其他社区成员表示同情

### 我们的责任

项目维护者有责任阐明可接受行为的标准，并对不可接受的行为采取适当和公平的纠正措施。

## 如何贡献

有很多方式可以为这个项目做出贡献：

### 1. 添加学习资源

这是最直接的贡献方式！如果你发现了优质的 React 学习资源，欢迎分享。

### 2. 改进文档

- 修正错别字或语法错误
- 改进说明和示例
- 翻译文档（如适用）

### 3. 报告问题

- 链接失效
- 内容过时
- 分类错误
- 网站 bug

### 4. 代码贡献

- 修复 bug
- 添加新功能
- 优化性能
- 改进 UI/UX

## 贡献资源

### 资源质量标准

在添加新资源前，请确保：

#### 必须满足 ✅
- [ ] 内容与 React 学习相关
- [ ] 链接有效且可正常访问
- [ ] 内容质量高，对学习者有帮助
- [ ] 不是广告或推广内容

#### 优先考虑 ⭐
- [ ] 中文资源（更易于理解）
- [ ] 免费资源（降低学习门槛）
- [ ] 更新及时（避免过时内容）
- [ ] 有良好的评价或推荐

### 添加资源步骤

#### 步骤 1：Fork 仓库

点击页面右上角的 "Fork" 按钮，将仓库 fork 到你的账号下。

#### 步骤 2：克隆仓库

```bash
git clone https://github.com/your-username/react-learning.git
cd react-learning
```

#### 步骤 3：创建新分支

```bash
git checkout -b add-resource-name
```

分支命名建议：
- `add-resource-name` - 添加资源
- `fix-broken-link` - 修复链接
- `improve-docs` - 改进文档

#### 步骤 4：添加资源

有两个地方需要添加：

**A. 导航网站数据文件**

编辑 `website/src/data/resources.ts`，找到对应分类，添加资源：

```typescript
{
  title: "资源名称",
  url: "https://example.com",
  description: "简短描述，建议50字以内"
}
```

**B. 主 README.md**

在对应分类下添加：

```markdown
- [资源名称](https://example.com) - 简短描述
```

#### 步骤 5：本地测试

```bash
cd website
npm install
npm run dev
```

访问 `http://localhost:5173` 检查：
- [ ] 资源显示正常
- [ ] 链接可以点击
- [ ] 描述没有错别字
- [ ] 分类正确

#### 步骤 6：提交更改

```bash
git add .
git commit -m "feat: 添加资源 - 资源名称"
```

#### 步骤 7：推送到 GitHub

```bash
git push origin add-resource-name
```

#### 步骤 8：创建 Pull Request

1. 访问你 fork 的仓库
2. 点击 "Compare & pull request"
3. 填写 PR 标题和描述
4. 点击 "Create pull request"

### Pull Request 模板

```markdown
## 📝 变更类型
- [ ] 添加新资源
- [ ] 修复链接
- [ ] 改进文档
- [ ] 代码优化
- [ ] 其他

## 📚 资源信息（如果添加资源）
- **资源名称**：
- **资源链接**：
- **所属分类**：
- **推荐理由**：

## ✅ 检查清单
- [ ] 已在本地测试
- [ ] 链接有效
- [ ] 描述准确
- [ ] 遵循提交规范
- [ ] 更新了两个文件（resources.ts 和 README.md）

## 📖 补充说明
（如有其他需要说明的内容）
```

## 代码贡献

### 开发环境设置

1. **安装依赖**
```bash
cd website
npm install
```

2. **启动开发服务器**
```bash
npm run dev
```

3. **代码检查**
```bash
npm run lint
```

### 代码规范

#### TypeScript

- 使用 TypeScript 编写代码
- 为函数和组件添加类型注解
- 避免使用 `any` 类型
- 导出可复用的类型定义

```typescript
// ✅ 好的示例
interface Props {
  title: string;
  count: number;
}

function MyComponent({ title, count }: Props) {
  // ...
}

// ❌ 避免
function MyComponent(props: any) {
  // ...
}
```

#### React

- 使用函数组件和 Hooks
- 避免不必要的重渲染（使用 React.memo）
- 遵循 React 最佳实践

```typescript
// ✅ 好的示例
import { memo } from 'react';

const MyComponent = memo(({ data }: Props) => {
  // ...
});

export default MyComponent;
```

#### 样式

- 优先使用 Tailwind CSS 实用类
- 避免内联样式
- 保持响应式设计

```tsx
// ✅ 好的示例
<div className="flex items-center gap-4 px-4 py-2 rounded-lg hover:bg-gray-100">
  {/* ... */}
</div>

// ❌ 避免
<div style={{ display: 'flex', padding: '8px' }}>
  {/* ... */}
</div>
```

### 文件结构

```
website/src/
├── components/       # 可复用组件（如需要）
├── data/            # 数据文件
│   └── resources.ts # 资源配置
├── utils/           # 工具函数（如需要）
├── App.tsx          # 主应用
└── main.tsx         # 入口文件
```

## 提交规范

我们使用语义化提交信息（Semantic Commit Messages）：

### 格式

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type 类型

- `feat`: 新功能或新资源
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式调整（不影响功能）
- `refactor`: 重构（不是新功能也不是修复）
- `perf`: 性能优化
- `test`: 添加测试
- `chore`: 构建/工具相关

### 示例

```bash
# 添加新资源
feat(resources): 添加 React 19 新特性教程

在视频教程分类下添加了关于 React 19 新特性的教程视频。

# 修复问题
fix(ui): 修复移动端侧边栏显示问题

在小屏幕设备上，侧边栏无法正确关闭的问题已修复。

# 文档更新
docs(readme): 完善安装说明

添加了 Node.js 版本要求和常见问题解答。
```

## 问题反馈

### 报告 Bug

提交 Bug 时，请包含：

1. **问题描述** - 清楚地描述问题
2. **重现步骤** - 如何重现这个问题
3. **期望行为** - 你期望发生什么
4. **实际行为** - 实际发生了什么
5. **环境信息** - 浏览器、操作系统等
6. **截图** - 如果适用

#### Bug 模板

```markdown
## 🐛 Bug 描述
简短描述问题

## 📝 重现步骤
1. 访问...
2. 点击...
3. 发现...

## ✅ 期望行为
应该...

## ❌ 实际行为
但是...

## 💻 环境信息
- 浏览器：Chrome 120
- 操作系统：macOS 14
- 设备：桌面端/移动端

## 📷 截图
（如有）
```

### 功能建议

提出新功能建议时，请包含：

1. **功能描述** - 你想要什么功能
2. **使用场景** - 为什么需要这个功能
3. **替代方案** - 是否考虑过其他方案
4. **补充信息** - 其他相关信息

#### 功能建议模板

```markdown
## 💡 功能描述
我希望...

## 🎯 使用场景
当我...的时候，能够...

## 🔄 替代方案
目前可以通过...，但是...

## 📝 补充信息
（如有其他想法）
```

## 审核流程

1. **提交 PR** - 你提交 Pull Request
2. **自动检查** - CI/CD 自动运行检查
3. **代码审查** - 维护者审查代码
4. **讨论修改** - 根据反馈进行调整
5. **合并** - PR 被合并到主分支
6. **自动部署** - 网站自动更新

### 审核时间

- 通常在 1-3 个工作日内审核
- 紧急修复会优先处理
- 大型改动可能需要更长时间讨论

## 获得帮助

如果在贡献过程中遇到问题：

- 💬 [GitHub Discussions](https://github.com/knowledgefxg/react-learning/discussions) - 提问讨论
- 📧 Email：your-email@example.com
- 📖 查看 [README.md](README.md) 获取更多信息

## 贡献者名单

感谢所有贡献者！你们的贡献让这个项目变得更好。

<!-- 这里会自动生成贡献者列表 -->

## 许可证

通过向本项目提交贡献，你同意你的贡献将在 MIT 许可证下授权。

---

再次感谢你的贡献！❤️

如果你觉得这个项目有用，别忘了给个 Star ⭐
