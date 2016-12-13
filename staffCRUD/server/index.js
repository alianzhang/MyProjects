// 这是后端的代码
// 1.http模块
// 2.创建服务
// 3.监听

const http = require('http') // 核心模块
const url = require('url')// 核心模块
const querystring = require('querystring') // 核心模块
const fs = require('fs') // 核心模块

let msg_data = [{id:1,username:'小明',age:18,sex:'男', manifesto:'移来此种非人间，曾识万年殇底月！'}]
// id 一般是服务器端生成的!
// {id:1,username,'小明',age:18,sex:'男', manifesto
// :'移来此种非人间，曾识万年殇底月！'}

http.createServer(function(request, response){
    const obj = url.parse(request.url,true)
    // 返回client目录下的index.html
    // http://127.0.0.1:3000/index.html
    if(obj.pathname.startsWith('/index.html')){
        // data就是文件的内容
       let data =  fs.readFileSync('../client/index.html','utf8')
       response.end(data)
    }


    // 增
    // POST
    // http://127.0.0.1:3000/add  
    if(obj.pathname.startsWith('/add')){
        // a. 一块一块接
        let str = ''
        request.on('data', function(chunk){
            str += chunk
        })

        // b.接完
        request.on('end', function(){
            // 保存数据
           const mydata = querystring.parse(str)
           // 判断用户是否为空
           if(!mydata.username){
             response.end('{"status":"user_null"}')
             return
           }
           // 判断sex必须是男或者女
           if(mydata.sex !=='男'|| mydata.sex !== '女'){
             response.end('{"status":"sex_taiduo"}')
             return
           }
           // 把数据添加到数组中保存!
           msg_data.push({
                id:Math.random(),
                username:mydata.username,
                sex:mydata.sex,
                age:mydata.age,
                manifesto: mydata.manifesto
            })
           // 通过前端，数据保存成功!
           response.end('{"status":"ok"}')
        })
        return
    }


    // 删除
    // POST
    // http://127.0.0.1:3000/delete
    // 备: 删除，应该根据id来删除，因为id是唯一的
    if(obj.pathname.startsWith('/delete')){
        // a , 一块一块接
        let str = ''
        request.on('data', function(chunk){
            str += chunk
        })
        // b.接完
        request.on('end',function(){
            let mydata = querystring.parse(str)
            // 判断是否有id,传递过来！
            if(!mydata.id){
                response.end('{"status":"id_null"}')
                return
            }
            // 这个find方法也会变成数组,参数就是每次遍历的元素
            // 当我们在function里return true时，会把当前遍历的数据作为find的返回值返回！
            // let result = msg_data.find(function(item){
            //     if(item.id === mydata.id){
            //         return true
            //     }
            // })

            // filter方法也会遍历我们的数组,我们在function里return true时，当前元素会被返回作为数组的一部分,如果return false，当前元素不会返回！,返回值是一个数组
          msg_data =   msg_data.filter(function(item){
                if(item.id == mydata.id){ return false}
                return true
          })
          // 告诉用户，我们操作成功了
          response.end('{"status":"ok"}')
        })
        return
    }

    // 修改
    // POST
    // http://127.0.0.1:3000/edit
    // 备注：根据用户把最新的数据传过来
    if(obj.pathname.startsWith('/edit')){
        // 判断有没有id
        let str = ''
        // 一块，一块的接!
        request.on('data', function(chunk){
            str += chunk
        })
        // b.接完
        request.on('end',function(){
            // 把参数字符串转换为对象
            let mydata = querystring.parse(str)
            // 判断是否有id,传递过来！
            if(!mydata.id){
                response.end('{"status":"id_null"}')
                return
            }

            // 遍历数组来修改数据
            for (var i = 0; i < msg_data.length; i++) {
               let item =  msg_data[i]
               // 判断有没有和传递过来的id相等的数据
               if(item.id == mydata.id){
                  item.username = mydata.username
                  item.age = mydata.age
                  item.sex = mydata.sex
                  item.manifesto = mydata.manifesto
                  // 修改成功
                  response.end('{"status":"ok"}')
                  return
               }
            }
            // 告诉用户，没有找到数据！
            response.end('{"status":"no_data"}')
        })
        return
    }

    // 查
    // GET
    // http://127.0.0.1:3000/getdata
    // 备注: 一次性读取所有数据
    if(obj.pathname.startsWith('/getdata')){
        response.end(JSON.stringify(msg_data))
        return
    }

})
// http:/127.0.0.1:3000
.listen(3000,'127.0.0.1',function(){
    // 增
    // 删
    // 改
    // 查
})