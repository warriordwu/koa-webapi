const Router = require('koa-router')
const router = new Router()
// import { index } from '../controllers/home'
const { index } = require('../controllers/home')
router.get('/', index)
module.exports = router