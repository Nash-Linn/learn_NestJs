# learn_NestJs

官方网站： https://nestjs.com/
中文网站： https://www.nestjs.com.cn/

+-- dist[目录] // 编译后的目录，用于预览项目
+-- node_modules[目录] // 项目使用的包目录，开发使用和上线使用的都在里边
+-- src[目录] // 源文件/代码，程序员主要编写的目录
| +-- app.controller.spec.ts // 对于基本控制器的单元测试样例
| +-- app.controller.ts // 控制器文件，可以简单理解为路由文件
| +-- app.module.ts // 模块文件，在 NestJS 世界里主要操作的就是模块
| +-- app.service.ts // 服务文件，提供的服务文件，业务逻辑编写在这里
| +-- app.main.ts // 项目的入口文件，里边包括项目的主模块和监听端口号
+-- test[目录] // 测试文件目录，对项目测试时使用的目录，比如单元测试...
| +-- app.e2e-spec.ts // e2e 测试，端对端测试文件，测试流程和功能使用
| +-- jest-e2e.json // jest 测试文件，jset 是一款简介的 JavaScript 测试框架
+-- .eslintrc.js // ESlint 的配置文件
+-- .gitignore // git 的配置文件，用于控制哪些文件不受 Git 管理
+-- .prettierrc // prettier 配置文件，用于美化/格式化代码的
+-- nest-cli.json // 整个项目的配置文件，这个需要根据项目进行不同的配置
+-- package-lock.json // 防止由于包不同，导致项目无法启动的配置文件，固定包版本
+-- package.json // 项目依赖包管理文件和 Script 文件，比如如何启动项目的命令
+-- README.md // 对项目的描述文件，markdown 语法
+-- tsconfig.build.json // TypeScript 语法构建时的配置文件
+-- tsconfig.json // TypeScript 的配置文件，控制 TypeScript 编译器的一些行为

#### npm i -g @nestjs/cli

### 创建 nest

nest new nestjs-demo

### 使用命令生成 新的模块

nest g module moduleName

### 创建对应的 controller

nest g controller moduleName --no-spec

### 创建对应 service

nest g service girl --no-spec

## 使用 REST Client 插件 调试接口

新建 RESTClient 文件夹
新建 demo.http 文件
例子： POST http://localhost:8080/girl/add HTTP/1.1

## 使用 database Client 插件 管理数据库

## 安装 TypeORM

npm install --save @nestjs/typeorm typeorm mysql2

## 为 NestJS 增加热重载功能

### 1.安装依赖

npm i --save-dev webpack-node-externals run-script-webpack-plugin webpack

npm i -D @types/webpack-env

## 中间键 MiddleWare

nest g mi counter

## 解决跨域 可以使用 nest 自带配置 此处使用插件解决

npm install cors
npm install @types/cors -D

## 新建模块

nest g res moduleName
