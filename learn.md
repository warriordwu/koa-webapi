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