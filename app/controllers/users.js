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
      name: {type: 'string'}, 
      age: {type: 'number', required: false}
    })
    db.push (ctx.request.body);
    ctx.body = ctx.request.body;
  }
  update (ctx) {
    if (ctx.params.id * 1 >= db.length) {
      ctx.throw(412)
  }
    ctx.verifyParams({
      name: {type: 'string'}, 
      age: {type: 'number', required: false}
    })
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
module.exports = new usersCtl()