// 在这里对所有，登陆注册相关的规则配置
const express = require('express')

// 这个db是我们封装对mongodb的crud
const db = require('./utils/db.js')

// 配置mongodb的连接字符串!
db.configUrl('mongodb://127.0.0.1:27017/blog')


const captchapng = require('captchapng') // 这个包是用来生成验证码图片的


const router = module.exports = express.Router()
let code = 0

/**
 * 注册
 * POST
 * /signup
 */
router.post('/signup', (req, res) => {
  console.log(code)
  console.log(req.body)
    // req.body
    // 验证码放在最前比较!
    // 将用户传递过来的验证与 我们之前生成的验证比较！
    // 0 判断验证码
  if (code != req.body.mycode) {
    res.send({ status: 'ok', msg: '验证码不对' })
    return
  }
  // 1.接收请求,req.body,进行判断，数据是否合法
  // 一定要做验证,username(长度[3-8],必须大小写数据), email, password（必须大小写数据，长度[6-12]） // 4 , 10*10*10*10
  // huoqishi 213131fksfaFASdf
  if (req.body.username.length < 5 || req.body.username.length > 10) {
    // status: 1002
    res.send({ status: 'err', msg: '用户不合法!' })
    return
  }
  // ...

  // 2.判断当前用户名是否存在!()
  // mongodb ,db.js  // users 这个集体存储用户信息
  db.find('users', { username: req.body.username }, function(err, data) {
    // 小于等于0，表明，要查找的用户不存在 !
    if (data.length <= 0) {
      db.insert('users', {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      }, function(err, result) {
        // result.insertedCount 插入的条件
        if (result.insertedCount > 0) {
          res.send({ status: 'ok', msg: '注册成功!' })
          return
        }
      })
      return
    }
    res.send({ status: 'err', msg: '该用户已存在，禁止注册！' })
  })


  // 3. 把数据存储到数据库中!

  // res.send('注册成功!')
})

/**
 * 获取验证码
 */
// 我们随机生成一个数字，字母!
// var str = '1998sss'，服务器端存储一份
// 根据数字生成一个图片!,1+1=? [2]
// 12306
// 用户会根据图片填写相应内容,内容会随着注册请求一起发来来!
router.get('/getpic', (req, res) => {
  code = parseInt(Math.random() * 9000 + 1000)
  var p = new captchapng(80, 30, code); // width,height,numeric captcha 
  p.color(0, 0, 0, 0); // First color: background (red, green, blue, alpha) 
  p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha) 

  // 得到 图片base64编码
  var img = p.getBase64();

  // 把图片转换为二进制数据!
  var imgbase64 = new Buffer(img, 'base64');
  res.writeHead(200, {

    'Content-Type': 'image/png' //mime类型,application/json,image/jpg
  });
  res.end(imgbase64);
})


/**
 * 登陆
 * // form表单发get请求，参数会在地址栏显示
 */
router.post('/signin', (req, res) =>{
  // req.body
  console.log(req.body)
  // 判断用户名，密码
  const result =db.find('users',{username:req.body.username,password:req.body.password},function(err, data){
    console.log(data)
    if(data.length<=0){
      res.send({status:'err',msg:'登陆失败，用户名或密码不对'})
      return
    }
    // 登陆
    // 浏览器存储的是cookie
    // 服务器存储的是session
    // 用了express-session之后可以直接就,就res.session来存储用户信息
    // session名字是固定的，userInfo是我们自己随便写的属性
    // express-session这个包内部会帮助我们保存这个用户的信息!
    // 下一次，我们还可以通过res.session.userInfo还获取之前存储的用户信息，并且还会自动设置响应头:Set-Cookie
    // 这个session属性是expres-session这个框架添加上的
    req.session.userInfo = data[0]
    res.send({status:'ok',msg:'登陆成功!'})
  })
})

/**
 * 判断用户是否登陆
 * GET 
 * /issignin
 */
 router.get('/issignin',(req, res) =>{
   if(req.session.userInfo){
    res.send({status:'ok',msg:'已登陆'})
   }else{
    res.send({status:'err',msg:'未登陆'})
   }
 })