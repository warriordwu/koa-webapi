// const db = [{name: '张三'}];
const User = require('../models/users')
class UsersCtl {
  async find (ctx) {
    ctx.body = await User.find();
  }
  async findById (ctx) {
      if (ctx.params.id * 1 >= db.length) {
          ctx.throw(412)
      }
    // ctx.body = db[ctx.params.id * 1];
    const user = await User.findById(ctx.params.id);
    if (!user) { ctx.throw('404', '用户不存在') }
    ctx.body = user
  }
  async create (ctx) {
    // 使用koa-parameter 校验请求体参数
    ctx.verifyParams({
      name: { type: 'string', required: true },
      password: { type: 'string', required: true },
    });
    // db.push (ctx.request.body);
    // ctx.body = ctx.request.body;
    const user = await new User(ctx.request.body).save()
    ctx.body = user
  }
  update (ctx) {
    if (ctx.params.id * 1 >= db.length) {
      ctx.throw(412)
  }
    // ctx.verifyParams({
    //   name: {type: 'string'}, 
    //   age: {type: 'number', required: false}
    // })
    db[ctx.params.id * 1] = ctx.request.body;
    ctx.body = ctx.request.body;
  }
  delete (ctx) {
    if (ctx.params.id * 1 >= db.length) {
      ctx.throw(412)
  }
    ctx.status = 204;
    db.splice (ctx.params.id * 1, 1);
  }
}
module.exports = new UsersCtl()