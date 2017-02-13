// 后端代码
// 1.引包
// 用这个http模块麻烦.,用express可以方便的处理前端请求!
const express = require('express')

// 这个express-session用户处理用户登陆的
// 会自动保存用户的信息，并且会把唯一标识写入到响应头:Set-Cookie
// 还会自动读取浏览器发来的消息(指的是Cookie)
const session = require('express-session')


// 一块一块接
// var str
// req.on('data',fuction(chunk){
// str+=chunk})
// req.on('end',fn) //  str  :  a=3&b=4&d=5

// 每一次有post请求过来,body-parser都会帮助我们处理!
// 并且会把处理后的结果(post请求参数)放到req.body ={a:3,b:4,d:5}
const bodyParser = require('body-parser') // 处理post请求参数的


// router
// 为什么要把这里的规则分开写!
// 
const sign = require('./sign.js')
const article = require('./article.js')

const app = express()
// 2.app.use，引入其他功能(对post请求数据处理,对静态文件的处理)



// 让express-session这个包与express关联起来,这样这个包才能处理用户的请求
app.use(session({
  secret:'myblog' , // 可以给任意字符
  resave: true, // 表明要不要对当前用户的session进行强制保存
  saveUninitialized: true, // 默认内部对数据做一些初始化!
  cookie:{ // 对要存储到客户的cookie做些配置
    maxAge: 60000,// 就是设置过期时间
  }
}))

// app.use('/index.html',function(req,res,next){
//   // req.session.userInfo 如果存在req.session.userInfo值表明，用户已经创建
//   // 否则就是未登陆
//   // 判断用户是否登陆
//   if(req.session.userInfo){
//     next()
//   }else{
//     res.send('请先登陆!')
//   }
// })

// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,/
//   cookie: { secure: true// 当请求为https时为true
//    }
// }))

// content-type:  www-form-urlencode  // name=xm&age=18
// express把接收到的请求，交给bodyParser处理了一下!
app.use(bodyParser.urlencoded()) //  next()直接可以用req.body获取post请求参数! req.body  {a:3,b:4}

// content-type: application/json     // {name:xm,age:18}
app.use(bodyParser.json()) // 接收content-type: application/json 类型的数据！

// req.body,next()


// 这行的目的是为了让public目录中的文件可以直接访问!
// http://127.0.0.1:3000/index.html
app.use(express.static('public'))// 设置静态文件目录

//xx.html
// app.use('/xx.html',(req, res) =>{
//   
// })

app.use(sign)
app.use(article)

// 3.监听端口和ip
app.listen(3000,'127.0.0.1',function(err){
  if(err) return console.log('出错了')
    console.log('http://127.0.0.1:3000')
})