# 部署指南

本指南将帮助你将 React 学习导航网站部署到各种平台。

## 目录

- [快速部署（推荐）](#快速部署推荐)
- [Vercel 部署](#vercel-部署)
- [Netlify 部署](#netlify-部署)
- [Cloudflare Pages 部署](#cloudflare-pages-部署)
- [GitHub Pages 部署](#github-pages-部署)
- [自托管部署](#自托管部署)
- [环境变量配置](#环境变量配置)
- [常见问题](#常见问题)

## 快速部署（推荐）

### Vercel 一键部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/knowledgefxg/react-learning)

点击按钮后：
1. 登录 Vercel 账号
2. 选择仓库名称
3. 点击 "Deploy"
4. 等待构建完成

就这么简单！🎉

## Vercel 部署

Vercel 是最推荐的部署平台，完美支持 React 和 Vite 项目。

### 特性

- ✅ 自动检测框架配置
- ✅ 零配置部署
- ✅ 自动 HTTPS
- ✅ 全球 CDN
- ✅ Git 集成（自动部署）
- ✅ 预览部署（PR 自动生成预览）

### 手动部署步骤

#### 1. 准备工作

- 注册 [Vercel 账号](https://vercel.com/signup)
- 确保代码已推送到 GitHub

#### 2. 导入项目

1. 访问 [Vercel Dashboard](https://vercel.com/dashboard)
2. 点击 "Add New..." → "Project"
3. 选择 GitHub 仓库
4. 点击 "Import"

#### 3. 配置项目

Vercel 会自动检测配置，但你可以自定义：

```
Framework Preset: Vite
Root Directory: website
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

#### 4. 环境变量（可选）

如果需要环境变量，在 "Environment Variables" 添加：

```
KEY=VALUE
```

#### 5. 部署

点击 "Deploy" 按钮，等待构建完成（通常 1-2 分钟）。

#### 6. 配置自定义域名（可选）

1. 在项目设置中找到 "Domains"
2. 添加你的域名
3. 按照提示配置 DNS 记录

### 自动部署

配置完成后，每次推送代码到主分支都会自动部署：

```bash
git push origin main
# Vercel 会自动构建和部署
```

### 预览部署

每个 Pull Request 都会自动生成预览链接，方便在合并前预览效果。

## Netlify 部署

Netlify 是另一个优秀的静态网站托管平台。

### 特性

- ✅ 持续部署
- ✅ 分支预览
- ✅ 表单处理
- ✅ 无服务器函数
- ✅ 自动 HTTPS

### 部署步骤

#### 1. 准备工作

- 注册 [Netlify 账号](https://app.netlify.com/signup)
- 代码推送到 Git 仓库

#### 2. 导入项目

1. 登录 Netlify Dashboard
2. 点击 "Add new site" → "Import an existing project"
3. 选择 Git 提供商（GitHub/GitLab/Bitbucket）
4. 授权并选择仓库

#### 3. 构建设置

```
Base directory: website
Build command: npm run build
Publish directory: website/dist
```

#### 4. 高级设置

创建 `netlify.toml` 在项目根目录：

```toml
[build]
  base = "website"
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

#### 5. 部署

点击 "Deploy site"，Netlify 会自动构建和部署。

#### 6. 自定义域名

1. 在 Site settings 中找到 "Domain management"
2. 点击 "Add custom domain"
3. 按照提示配置 DNS

## Cloudflare Pages 部署

Cloudflare Pages 提供超快的全球分发速度。

### 特性

- ✅ 全球边缘网络
- ✅ 无限带宽
- ✅ DDoS 防护
- ✅ 免费 SSL

### 部署步骤

#### 1. 创建项目

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 "Pages"
3. 点击 "Create a project"

#### 2. 连接 Git

1. 选择 Git 提供商
2. 授权访问
3. 选择仓库

#### 3. 构建配置

```
Production branch: main
Build command: npm run build
Build output directory: dist
Root directory: website
```

#### 4. 环境变量

```
NODE_VERSION=18
```

#### 5. 部署

点击 "Save and Deploy"。

## GitHub Pages 部署

适合简单的静态网站托管。

### 步骤 1：安装 gh-pages

```bash
cd website
npm install --save-dev gh-pages
```

### 步骤 2：配置 package.json

添加部署脚本：

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://your-username.github.io/react-learning"
}
```

### 步骤 3：配置 Vite

修改 `vite.config.ts`：

```typescript
export default defineConfig({
  base: '/react-learning/', // 仓库名
  // ... 其他配置
})
```

### 步骤 4：部署

```bash
npm run deploy
```

### 步骤 5：配置 GitHub

1. 访问仓库 Settings
2. 进入 "Pages"
3. Source 选择 "gh-pages" 分支
4. 保存

网站将在 `https://your-username.github.io/react-learning` 访问。

## 自托管部署

如果你有自己的服务器，可以自托管。

### 使用 Nginx

#### 1. 构建项目

```bash
cd website
npm install
npm run build
```

构建文件在 `dist/` 目录。

#### 2. 上传到服务器

```bash
scp -r dist/* user@server:/var/www/react-learning/
```

#### 3. 配置 Nginx

创建 `/etc/nginx/sites-available/react-learning`：

```nginx
server {
    listen 80;
    server_name react.yourdomain.com;
    root /var/www/react-learning;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 启用 gzip 压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # 缓存静态资源
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### 4. 启用配置

```bash
sudo ln -s /etc/nginx/sites-available/react-learning /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

#### 5. 配置 SSL（使用 Let's Encrypt）

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d react.yourdomain.com
```

### 使用 Docker

#### 1. 创建 Dockerfile

在 `website/` 目录创建：

```dockerfile
# 构建阶段
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 生产阶段
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

#### 2. 创建 nginx.conf

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
}
```

#### 3. 构建镜像

```bash
docker build -t react-learning .
```

#### 4. 运行容器

```bash
docker run -d -p 80:80 react-learning
```

### 使用 Docker Compose

创建 `docker-compose.yml`：

```yaml
version: '3'
services:
  web:
    build:
      context: ./website
    ports:
      - "80:80"
    restart: unless-stopped
```

运行：

```bash
docker-compose up -d
```

## 环境变量配置

如果需要配置环境变量：

### 开发环境

创建 `.env.local`：

```bash
VITE_API_URL=https://api.example.com
VITE_GA_ID=G-XXXXXXXXXX
```

### 生产环境

在部署平台添加环境变量：

**Vercel:**
Project Settings → Environment Variables

**Netlify:**
Site settings → Build & deploy → Environment

**Cloudflare Pages:**
Settings → Environment variables

### 使用环境变量

在代码中：

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

注意：所有环境变量必须以 `VITE_` 开头才能在客户端使用。

## 性能优化

### 1. 启用 CDN

大部分平台自动启用 CDN。如果自托管，可以使用：
- Cloudflare CDN
- AWS CloudFront
- 阿里云 CDN

### 2. 压缩资源

Vite 在生产构建时会自动压缩代码。

额外优化：

```bash
npm install --save-dev vite-plugin-compression
```

```typescript
// vite.config.ts
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    viteCompression()
  ]
})
```

### 3. 图片优化

使用 WebP 格式，或使用图片 CDN 服务：
- Cloudinary
- ImageKit
- AWS S3 + CloudFront

### 4. 预加载关键资源

在 `index.html` 添加：

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://fonts.googleapis.com">
```

### 5. 启用 HTTP/2

确保服务器支持 HTTP/2（大部分现代平台默认支持）。

## 监控和分析

### 添加 Google Analytics

在 `index.html` 的 `<head>` 中添加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 使用 Vercel Analytics

如果使用 Vercel，可以启用内置分析：

```bash
npm install @vercel/analytics
```

```typescript
// main.tsx
import { Analytics } from '@vercel/analytics/react';

createRoot(document.getElementById('root')!).render(
  <>
    <App />
    <Analytics />
  </>
);
```

## 常见问题

### Q: 部署后页面空白？

A: 检查：
1. `base` 配置是否正确（Vite）
2. 构建是否成功
3. 浏览器控制台是否有错误

### Q: 刷新页面 404？

A: 需要配置路由重定向到 `index.html`：

**Netlify:** 创建 `_redirects` 文件：
```
/*    /index.html   200
```

**Vercel:** 自动处理，无需配置

**Nginx:**
```nginx
try_files $uri $uri/ /index.html;
```

### Q: 构建很慢？

A: 优化方案：
1. 使用 pnpm 代替 npm
2. 启用构建缓存
3. 升级 Node.js 版本

### Q: 如何回滚部署？

**Vercel:** Deployments → 选择旧版本 → Promote to Production

**Netlify:** Deploys → 选择旧版本 → Publish deploy

**GitHub Pages:** 
```bash
git revert HEAD
git push
npm run deploy
```

### Q: 自定义域名不工作？

A: 检查：
1. DNS 记录是否正确配置
2. DNS 传播时间（最多 48 小时）
3. SSL 证书是否配置

### Q: 如何设置多个环境？

在 Vercel/Netlify 创建不同的项目：
- `main` 分支 → 生产环境
- `dev` 分支 → 开发环境
- PR → 预览环境

## 持续集成/持续部署 (CI/CD)

### GitHub Actions 示例

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      working-directory: ./website
      run: npm ci
      
    - name: Build
      working-directory: ./website
      run: npm run build
      
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v25
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        working-directory: ./website
```

## 总结

推荐部署方式：

| 平台 | 难度 | 速度 | 推荐度 |
|------|------|------|--------|
| Vercel | ⭐ | ⚡⚡⚡ | ⭐⭐⭐⭐⭐ |
| Netlify | ⭐ | ⚡⚡⚡ | ⭐⭐⭐⭐ |
| Cloudflare Pages | ⭐⭐ | ⚡⚡⚡ | ⭐⭐⭐⭐ |
| GitHub Pages | ⭐⭐ | ⚡⚡ | ⭐⭐⭐ |
| 自托管 | ⭐⭐⭐⭐ | ⚡ | ⭐⭐ |

**最推荐 Vercel**，因为：
- 零配置
- 自动优化
- 完美的 Git 集成
- 免费额度充足

---

如有其他问题，欢迎在 [GitHub Issues](https://github.com/knowledgefxg/react-learning/issues) 提问！
