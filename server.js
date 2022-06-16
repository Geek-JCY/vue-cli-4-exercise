/*
 * @Author: jichengye
 * @Date: 2022-06-15 20:29:19
 * @LastEditTime: 2022-06-15 20:39:46
 * @LastEditors: jichengye
 * @Description: 
 * @FilePath: /keepstudy/vue/vue-cli-4-exercise/server.js
 * $v$ 代码改变世界！奥利给！ $v$
 */
const express = require('express')
const app =  express()

// set options
const options = {
  host: '127.0.0.1',
  port: 8888
}

// Middleware to proxy requests through a specified index page, useful for Single Page Applications that utilise the HTML5 History API.
let history = require('connect-history-api-fallback')

// redirectt to index.html; 
history({
  rewrites: [{
    from: /^\/.*$/,
    to: '/index.html'
  }]
})

// history 必须要放在 express.static 之前引入
app.use(history())

// set path for static source directory 
// app.use(express.static('./editor'))

// TODO：暂时存储 engine 文件，以后删掉
app.use(express.static('./dist'))

// server listen port
app.listen(options.port, () => {
  console.log("Listening at http://%s:%s", options.host, options.port)
})