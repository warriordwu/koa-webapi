const db = [{name: '张三'}];
class usersCtl {
  find (ctx) {
    ctx.body = db;
  }
  findById (ctx) {
      if (ctx.params.id * 1 >= db.length) {
          ctx.throw(412)
      }
    ctx.body = db[ctx.params.id * 1];
  }
  create (ctx) {
    // 使用koa-parameter 校验请求体参数
    ctx.verifyParams({
      name: {type: 'string', required: true}
    })
    db.push (ctx.request.body);
    ctx.body = ctx.request.body;
  }
  update (ctx) {
    db[ctx.params.id * 1] = ctx.request.body;
    ctx.body = ctx.request.body;
  }
  delete (ctx) {
    ctx.status = 204;
    db.splice (ctx.params.id * 1, 1);
  }
}
module.exports = new usersCtl()