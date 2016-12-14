// 这个是在服务器端运行

// 1.http模块
// 2创建服务
// 3.监听

const http = require('http')

// http://www.baidu.com/home/xxxx.html?la=b&c=2#sfa


const url  = require('url') // 对url进行处理:  http://www.baidu.com/xxxx
// http://www.baidu.com/home/xxxx.html?la=b&c=2#sfa
// // 需要是符合以上形式!
// url.parse()// 这个方法，转换不了a=3&b=4这种形式的数据!


// mymsg=xxx&nickname=yyyy
const querystring = require('querystring') //  mymsg=xxx&nickname=yyy
// querystring.parse('mymsg=xxx&nickname=yyyy')// 这个参数只是这一种形式！

const msg_data = []  // 这个数组用来保存聊天信息！
const fs = require('fs')// 读取文件模块

// 用来读取chat.html,并返回
function getChat(request, response){
    // data就是就文件内容，是字符串
  const data =  fs.readFileSync('./chat.html','utf8')
  response.end(data)
}

// 接收用户提交的数据,并保存
function getData(request, response){
  // post
   let  str = ''
   // 1.一块一块接
   request.on('data',function(chunk){
       str += chunk
   })
   // 2.end时接收安
   request.on('end', function(){
       // 接收 完成后保存数据!
       console.log(str)  // mymsg=xxx&nickname=yyy
       // 把post请求得到数据，转换为对象操作
       const obj = querystring.parse(str)

       // 判断msg是否为空
       const msg = obj.mymsg.trim()
       if(!msg){
         response.end('{"status":"msg_err"}')
         return 
       }
       msg_data.push(
        {mymsg: msg,nickname:obj.nickname}
        )
       response.end('{"status":"ok"2}')
   })
}

// 返回聊天数据
function getMsg_Data(request ,response){
    // 现在我们要根据数据生成html字符串返回
    let str = ''
    for (let i = 0; i < msg_data.length; i++) {
      let item = msg_data[i]
      // let myclass="left"

      str += '<li>\
           <div class="left">\
                <h6>'+item.nickname+'</h6>\
                <div class="left-msg">'+ item.mymsg +'</div>\
            </div>\
            </li>'
    }

    response.end(str)
}

// http://127.0.0.1/chat.html?a=3&b=4
http.createServer(function(request, response){
    const obj = url.parse(request.url, true)
    // url: http://www.baidu.com/home/index.html?a=3&b=4#afsaf
    // path: /home/index.html?a=3&b=4#afsaf
    // pathname: /home/index.html

    // A.获取chat.html文件
    if(obj.pathname.startsWith('/chat.html')){
        // 读取文件，返回
        getChat(request, response)
        return
    }

    // http://127.0.0.1:80/mysub
    // B.接收聊天数据
    if(obj.pathname.startsWith('/mysub')){
        //
        getData(request, response)
        return
    }

    // C.返回浏览器要获取的聊天数据
    if(obj.pathname.startsWith('/mygetdata.php')){
        getMsg_Data(request, response)
        return
    }
})
// 如果监听80端口的话，访问时可以不写端口号！
.listen(80,function(err){
    if(err){console.log('err')}
    console.log('启动成功! 127.0.0.1:3000')
})