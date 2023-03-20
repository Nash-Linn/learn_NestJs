## nest 常用命令

nest --help

## 版本控制

在 mamin.ts 中开启
app.enableVersioning({
type: VersioningType.URI,
});

## nestjs Session

session 是服务器为每个用户的浏览器创建的一个会话对象
这个 session 会记录到浏览器的 cookie 用来区分用户
nestjs 默认框架 express 支持 express 插件

npm i express-session --save
npm i @types/express-session -D

在 main.ts 中引入
参数配置
secret 一个 String 类型的字符串，作为服务器端生成 session 的签名。
name 返回客户端的 key 的名称，默认为 connect.sid,也可以自己设置。resave 强制保存 session 即使它并没有变化,。默认为 true。建议设置成 false。 don't save session if unmodified
saveUninitialized 强制将未初始化的 session 存储。当新建了一个 session 且未设定属性或值时，它就处于未初始化状态。在设定一个 cookie 前，这对于登陆验证，减轻服务端存储压力，权限控制是有帮助的。(默 认:true)。建议手动添加。
cookie 设置返回到前端 key 的属性，默认值为{ path: ‘/’, httpOnly: true, secure: false, maxAge: null }。
rolling 在每次请求时强行设置 cookie，这将重置 cookie 过期时间(默认:false)

## 验证码插件

npm i svg-captcha --save

## 文件上传 的两个包

multer @nestjs/platform-express （nestjs 自带）
multer @types/multer

## 用流的形式导出文件

npm install compressing
使用 zip 方法进行压缩

## 管道转换

### 管道 可以做两件事

1.转换，可以将前端传入的数据转成成我们需要的数据

2.验证 类似于前端的 rules 配置验证规则

### 八个内置转换 API

ValidationPipe
ParseIntPipe
ParseFloatPipe
ParseBoolPipe
ParseArrayPipe
ParseUUIDPipe
ParseEnumPipe
DefaultValuePipe

## uuid 插件

npm install uuid -S
npm i @types/uuid -D

## 管道验证 创建管道

nest g pi login

## 安装验证器

npm i --save class-validator class-transformer

## 爬虫

npm install cheerio -S
npm install axios

## nest 守卫

守卫在每个中间件之后执行，但在任何拦截器或管道之前执行
nest g gu name

## 自定义装饰器

nest g d name

## 接口文档

npm install @nestjs/swagger swagger-ui-express

## 连接数据库

npm install --save @nestjs/typeorm typeorm mysql2
