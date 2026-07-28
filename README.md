# Personal Homepage

一个以 Astro、TypeScript 和 Tailwind CSS 构建的静态个人主页模板。内容和页面表现完全分离；个人资料、经历、项目等默认留空，生产环境会自动隐藏空栏目。

## 本地开发

```bash
npm install
npm run dev
```

生产检查与预览：

```bash
npm run build
npm run preview
```

## 填写内容

- `src/config/profile.ts`：姓名、头像、简介、学校、联系方式与社交链接
- `src/config/site.ts`：站点标题、SEO、仓库、版权与品牌设置
- `src/data/education.ts`：教育经历
- `src/data/interests.ts`：研究兴趣
- `src/data/research.ts`：研究经历
- `src/data/projects.ts`：项目
- `src/data/honors.ts`：荣誉与奖项
- `src/data/skills.ts`：技能分组
- `src/data/navigation.ts`：导航开关与顺序
- `src/content/posts/`：Markdown 文章

社交链接必须同时满足 `enabled: true` 且 `url` 非空才会显示。头像可放在 `public/images/avatar.webp`；文件不存在时自动使用 CSS 渐变占位。

开发环境会为尚未填写的栏目显示弱化编辑提示。生产构建不会输出这些提示、草稿文章或空栏目。

## 文章格式

```yaml
---
title: ""
description: ""
publishedAt: 2026-01-01
updatedAt: 2026-01-01
tags: []
draft: true
featured: false
cover: ""
---
```

将 `draft` 改为 `false` 后文章才会进入公开列表、静态路由和 RSS。

## 部署

仓库已包含 GitHub Pages 工作流，推送到 `main` 后自动构建。首次使用时需要在 GitHub 仓库的 **Settings → Pages → Source** 选择 **GitHub Actions**。

当前工作流已按自定义域名设置：

- `SITE_URL=https://biscuitbc.top`
- `BASE_PATH=/`

还需要在 GitHub 仓库的 **Settings → Pages → Custom domain** 填写
`biscuitbc.top`，并在域名的 DNS 服务商处添加 GitHub Pages 要求的解析记录。
DNS 生效且 GitHub 签发证书后，启用 **Enforce HTTPS**。

Vercel 或 Cloudflare Pages 可直接导入仓库，构建命令为 `npm run build`，输出目录为 `dist`。
