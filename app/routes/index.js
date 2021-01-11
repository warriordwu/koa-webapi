const fs = require('fs')
module.exports = (app) => {
    fs.readdirSync(__dirname).forEach(item => {
         if (item === 'index.js') return
         const route = require(`./${item}`)
         app.use(route.routes()).use(route.allowedMethods())
    })
}