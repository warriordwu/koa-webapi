const Router = require('koa-router')
const router = new Router({ prefix: '/users'}) // 前缀
const {find, findById, create, update, delete: del} = require('../controllers/users')
router.get('/', find)
router.post('/', create)
router.get('/:id', findById)
// 修改
router.put('/:id', update)
router.delete('/:id', del)

module.exports = router