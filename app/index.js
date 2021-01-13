const Koa = require('koa')
const bodyparser = require('koa-bodyparser')// 用于解析post请求的body
const parameter = require('koa-parameter')
const error = require('koa-json-error')
const mongoose = require('mongoose')
const app = new Koa()
const {connectionStr} = require('./config')
mongoose.connect(connectionStr, { useNewUrlParser: true ,useUnifiedTopology: true}, () => console.log('mongodb连接成功!'))
mongoose.connection.on('error', console.error)
// 多中间件
// const auth = async (ctx, next) => {
//     if (ctx.url === '/users') {
//         ctx.throw(401)
//     }
//     await next()
// }
// 需要放到所有中间件的最前面
// app.use(async (ctx, next) => {
//     try {
//         await next()
//     } catch (err) {
//         console.log(err);
//         ctx.status = err.status || err.statusCode || 500// 运行时报错没有响应的status
//         ctx.body = {
//             message: err.message
//         }
//     }
// })
app.use(error())
const routing= require('./routes/index')
routing(app)

app.use(bodyparser())
app.use(parameter(app))
app.use(error({
    postFormat: (e, {stack, ...rest})=>process.env.NODE_ENV === 'production' ? rest : {stack,...rest}
    // 让生产环境不返回stack
}))
// app.use(router.routes())
// app.use(usersRouter.routes())
// app.use(usersRouter.allowedMethods()) // 可以使用options来请求
// app.use((ctx) => { 
//     // ctx.body = 'hello world'
//     if (ctx.url === '/') {
//         ctx.body = '这是主页'
//     } else if (ctx.url === '/users') {
//         if (ctx.method === 'GET') {
//             ctx.body = '这是用户列表页'
//         } else if (ctx.method === 'POSt') {
//             ctx.body = '新增用户列表页'
//         } else {
//             ctx.body = 405
//         }
//     } else if (ctx.url.match(/\/users\/\w+/)) {
//         const userId = ctx.url.match(/\/users\/(\w+)/)[1]
//         ctx.body = `这是用户${userId}`
//     } 
//     else {
//         ctx.status = 404
//     }
// })

app.listen(3000, ()=>{console.log('程序启动在3000端口了')})