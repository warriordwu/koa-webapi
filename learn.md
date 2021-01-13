## koa
+ 使用koa
```js
const Koa = require('koa')
const app = new Koa()
app.use((ctx) => {
    if (ctx.url === '/') {
        ctx.body = '这是主页'
    } else {
        ctx.body = 'no data'
    }
})
```

+ 使用koa-router
```js
const Router = require('koa-router')
const router = new Router()
router.get('/', (ctx) => {
    ctx.bofy = '这是主页'
})
app.use(router.routers())
app.use(usersRouter.allowedMethods()) // 可以使用options来请求
```

+ http使用options
    - 检测服务器所支持的请求方法
    - cors预检测请求
    - 405 还不允许使用的请求方法
    - 501 koa不支持的方法

+ 控制器
> 注册的中间件

- 获取http请求参数
  - query string ?后的键值对
  - Router params 类似于id的键值对
  - body 请求体 使用插件`koa-bodyparser`
  - Header 请求头 Accept Cookie
- 处理业务逻辑
- 发送http请求

+ 每个控制器写在单独的文件夹下
+ 使用类 + 类方法的形式编写

响应头可以使用`ctx.set('Allow', 'GET, POST')`

+ 404 会自动处理
+ 可以使用`ctx.throw(412, 'message')`
+ 412 没有满足先决条件 `Precondition Failed`
+ 500 `Internal Server Errorr` like a.b

错误处理
`koa-json-error`
跨平台设置环境变量
`cross-env`
`koa-parameter` 校验参数

+ nosql
+ 不是=同于传统关系型数据库的统称
+ HBase 列存储
+ MongoDB 文档存储
+ Redis key-value存储
+ FlockDB 图存储
+ db4o 对象存储
+ BaseX XML存储

没有原子性,一致性,隔离性等复杂规范
便于横向拓展

性能好(内存计算)
大规模数据存储(可拓展性)
可靠安全

`mongoose`安装 来操作 mongdb

7-5 
编写用户schema 生成用户 model