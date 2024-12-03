# Sunbyte CLI

一个现代化的前端项目脚手架工具，快速创建 Vue 2、Vue 3 和 React 项目，集成最佳实践和优化配置。

## 特性

- 🚀 支持多框架（Vue 2、Vue 3、React）
- 📦 内置 TypeScript 支持
- ⚡️ 现代化构建工具（Vite/Webpack）
- 🎨 简洁优雅的模板
- 💪 开箱即用的最佳实践

## 安装

```bash
npm install -g sunbyte-cli
```

## 使用方法

```bash
# 创建新项目
sunbyte create my-project

# 显示版本
sunbyte -v

# 显示帮助信息
sunbyte --help
```

## 项目结构

```
sunbyte-cli/
├── bin/
│   └── cli.js              # CLI 入口点和命令定义
├── lib/
│   ├── constants.js        # 全局常量和配置
│   ├── create.js           # 项目创建逻辑
│   └── templates.js        # 模板配置和依赖
└── package.json           # 项目元数据和依赖
```

## 文件说明

### 核心文件

- `bin/cli.js`: CLI 的主入口点，负责：
  - 处理命令行参数
  - 用户交互
  - 启动项目创建流程

- `lib/create.js`: 包含项目创建的核心逻辑：
  - 创建目录结构
  - 生成特定模板文件
  - 配置 package.json
  - 项目初始化

- `lib/templates.js`: 定义各个模板的配置：
  - 依赖项及版本
  - 开发依赖
  - 模板特定设置

- `lib/constants.js`: 存储全局常量：
  - CLI 版本
  - 可用模板选项
  - 模板仓库引用

### 生成的项目结构

每个生成的项目都遵循以下结构：

```
project-name/
├── src/
│   ├── components/     # 可复用组件
│   ├── assets/        # 静态资源
│   ├── App.(vue|jsx)  # 根组件
│   └── main.(js|tsx)  # 应用入口点
├── public/            # 公共静态文件
└── package.json       # 项目配置
```

## 可用模板

1. **Vue 3 + TypeScript + Vite**
   - 现代化的 Vue 3 组合式 API
   - TypeScript 支持
   - Vite 快速开发
   - Pinia 状态管理

2. **Vue 2 + JavaScript + Webpack**
   - 经典 Vue 2 选项式 API
   - Vue CLI 服务
   - Vuex 状态管理
   - Webpack 构建

3. **React + TypeScript + Vite**
   - 现代化 React Hooks
   - TypeScript 支持
   - Vite 开发环境
   - React Router 路由

## 依赖说明

### 核心 CLI 依赖
- `commander`: 命令行界面
- `inquirer`: 交互式命令行提示
- `chalk`: 终端字符串样式
- `ora`: 优雅的终端加载动画
- `fs-extra`: 增强的文件系统方法

## 快速开始

1. 全局安装 CLI：
```bash
npm install -g sunbyte-cli
```

2. 创建新项目：
```bash
sunbyte create my-project
```

3. 选择项目模板

4. 进入项目目录：
```bash
cd my-project
```

5. 安装依赖：
```bash
npm install
```

6. 启动开发服务器：
```bash
npm run dev
```

## 常见问题

1. **创建项目时报错 "目录已存在"**
   - 确保目标目录不存在或使用新的项目名称

2. **npm install 失败**
   - 检查网络连接
   - 确保 Node.js 版本兼容
   - 尝试清除 npm 缓存：`npm cache clean --force`

3. **开发服务器启动失败**
   - 检查端口是否被占用
   - 确保所有依赖正确安装

4. **项目代码规范**
   - 项目已经删除eslint等配置文件，如果有其他需求请规范代码
 

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m '添加新特性'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 提交 Pull Request

## 许可证

本项目基于 MIT 许可证开源。