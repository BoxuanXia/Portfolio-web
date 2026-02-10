# 部署指南

## 部署到 GitHub Pages

### 步骤 1: 在 GitHub 上创建仓库

1. 访问 [GitHub](https://github.com)
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 仓库名称填写: `portfolio-web`
4. 选择 Public（公开）
5. **不要**勾选 "Initialize this repository with a README"
6. 点击 "Create repository"

### 步骤 2: 连接本地仓库到 GitHub

在项目目录下运行以下命令（替换 `YOUR_USERNAME` 为你的 GitHub 用户名）:

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio-web.git
git branch -M main
git push -u origin main
```

### 步骤 3: 部署到 GitHub Pages

运行部署命令:

```bash
npm run deploy
```

这个命令会：
1. 构建项目生成静态文件
2. 将 `out` 目录的内容推送到 `gh-pages` 分支

### 步骤 4: 启用 GitHub Pages

1. 在 GitHub 仓库页面，点击 "Settings"
2. 在左侧菜单找到 "Pages"
3. 在 "Source" 下拉菜单中选择 `gh-pages` 分支
4. 点击 "Save"

几分钟后，你的网站将在以下地址可访问:
```
https://YOUR_USERNAME.github.io/portfolio-web/
```

## 更新网站

每次修改代码后，运行以下命令更新网站:

```bash
git add .
git commit -m "更新描述"
git push origin main
npm run deploy
```

## 自定义域名（可选）

如果你有自己的域名:

1. 在 `public` 目录下创建 `CNAME` 文件
2. 在文件中写入你的域名，例如: `www.yourdomain.com`
3. 在你的域名提供商处配置 DNS:
   - 添加 CNAME 记录指向 `YOUR_USERNAME.github.io`
4. 重新部署

## 注意事项

- 确保 `next.config.mjs` 中的 `basePath` 与你的仓库名称一致
- 如果使用自定义域名，可以移除 `basePath` 配置
- 图片和资源文件都需要放在 `public` 目录下
- 每次部署前建议先在本地运行 `npm run build` 测试构建是否成功

## 故障排除

### 页面显示 404
- 检查 GitHub Pages 设置是否正确
- 确认 `gh-pages` 分支存在且有内容
- 等待几分钟让 GitHub Pages 完成部署

### 样式或图片无法加载
- 检查 `next.config.mjs` 中的 `basePath` 配置
- 确保所有资源路径使用相对路径

### 构建失败
- 运行 `npm run build` 查看详细错误信息
- 检查所有依赖是否正确安装
- 确保 Node.js 版本 >= 18
