const express = require('express')
const formidable= require('formidable')
const db = require('./utils/db.js')
const path = require('path') // 对路径进行处理!

const router  = module.exports =  express.Router()

/**
 * 发布文章!
 */
router.post('/publish', (req,res)=>{
  // req.body
  console.log(req.body)
  // 校验
  // 把数据存储起来!
  db.insert('blogs',{title:req.body.title, content:req.body.content},function(err, result){
    // 
    // result.insertedCount
    if(result.insertedCount <=0){
      res.send({status:'err',msg:'插入失败!'})
      return
    }
    res.send({status:'ok',msg:'保存成功!'})
  })
})

/**
 * 接收图片上传!
 * /POST
 * /saveimg
 */
 router.post('/saveimg',(req, res) =>{
     const form = new formidable.IncomingForm()
     // 设置图片上传路径 //  __dirname+'/public/uploads'
     form.uploadDir = path.join(__dirname, 'public/uploads')
     form.keepExtensions = true// 保持原文件扩展名!
     form.parse(req, (err , fields ,files) => {
        //fd.append('myimg',this.$refs.myinput.files[0])
        // files.myimg.path //c:\xxx
        // 得到上传文件的文件名:文件名是随机生成的!
        const filename =  path.basename(files.myimg.path)
        res.send({status:'ok',filepath:'/uploads/'+filename})
     })
 })

// 接收请求，获取文章数据
// GET
// /getarticle 
// 分页!
router.get('/getarticle',(req, res) =>{
   db.find('blogs',{},function(err, data){
     // console.log(typeof data[0]["_id"])
     res.send({status:'ok',data: data})
   })
})
