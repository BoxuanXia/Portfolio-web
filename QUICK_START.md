# 快速开始 - 部署到 GitHub Pages

## 📋 前提条件

- 已安装 Git
- 拥有 GitHub 账号
- Node.js 18+ (已安装)

## 🚀 部署步骤

### 1. 在 GitHub 创建新仓库

访问 https://github.com/new 并创建一个新仓库：

- **仓库名称**: `portfolio-web` (或你喜欢的名字)
- **可见性**: Public (公开)
- **不要勾选**: "Initialize this repository with a README"

点击 "Create repository"

### 2. 连接本地仓库到 GitHub

复制你的 GitHub 用户名，然后在项目目录运行（替换 `YOUR_USERNAME`）:

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio-web.git
git branch -M main
git push -u origin main
```

### 3. 更新配置文件

如果你的仓库名称**不是** `portfolio-web`，需要修改 `next.config.mjs`:

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/你的仓库名' : '',
```

### 4. 部署到 GitHub Pages

运行部署命令:

```bash
npm run deploy
```

这会自动：
- 构建静态网站
- 创建 `gh-pages` 分支
- 推送到 GitHub

### 5. 启用 GitHub Pages

1. 打开你的 GitHub 仓库页面
2. 点击 **Settings** (设置)
3. 在左侧菜单找到 **Pages**
4. 在 **Source** 下选择 `gh-pages` 分支
5. 点击 **Save**

### 6. 访问你的网站

几分钟后，你的网站将在以下地址可用:

```
https://YOUR_USERNAME.github.io/portfolio-web/
```

## 🔄 更新网站

每次修改代码后，运行:

```bash
git add .
git commit -m "你的更新说明"
git push origin main
npm run deploy
```

## ⚙️ 自定义配置

### 修改个人信息

1. **联系邮箱**: 编辑 `src/app/contact/page.tsx` 第 48 行
2. **项目内容**: 编辑 `content/projects/` 目录下的 MDX 文件
3. **关于页面**: 编辑 `src/data/about-content.ts`
4. **导航栏**: 编辑 `src/components/navbar.tsx`

### 添加自定义域名

1. 在 `public` 目录创建 `CNAME` 文件
2. 写入你的域名: `www.yourdomain.com`
3. 在域名提供商添加 CNAME 记录指向 `YOUR_USERNAME.github.io`
4. 重新部署

## 🐛 常见问题

### 页面显示 404
- 等待 3-5 分钟让 GitHub Pages 完成部署
- 检查 GitHub Pages 设置是否正确
- 确认 `gh-pages` 分支存在

### 样式或图片无法加载
- 检查 `next.config.mjs` 中的 `basePath` 是否与仓库名匹配
- 确保图片放在 `public` 目录下

### 构建失败
- 运行 `npm run build` 查看错误详情
- 确保所有依赖已安装: `npm install`

## 📚 更多帮助

详细部署文档请查看 `DEPLOYMENT.md`

## ✅ 检查清单

- [ ] 在 GitHub 创建了仓库
- [ ] 连接了本地仓库到 GitHub
- [ ] 更新了 `next.config.mjs` 中的 basePath (如果需要)
- [ ] 运行了 `npm run deploy`
- [ ] 在 GitHub Settings 中启用了 Pages
- [ ] 网站可以正常访问
- [ ] 修改了个人信息和联系方式
