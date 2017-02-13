// 初始化
new Vue({
  el:'#box',
  data:{
    username:'',
    password:''
  },
  methods:{
    signin:function(e){
      e.preventDefault() // 禁用默认事件
      // 在前端中，请求的地址，就称之为接口
      // api //application programe interface，有【输入输出】I/O的
      // console.log('sfafa')
      // document.getElemnetById('id'),输出是得到的元素!
      // api指的是本地的方法!
      // webapi, url
      // 请求一个url,输入：参数， 输出: 是服务端响应的数据!
      // 我们，开发时，后端会提供接口(webapi)文档，
      // url: http://baidu.com/getuser
      // type:post
      // arg : name:用户名
      // result: {name:,age,sex}
      this.$http.post('/signin',{
        username: this.username,
        password: this.password
      }).then(function(res){
        // 这就相当jquery中的success
       console.log(res)
       if(res.body.status==='ok'){
        // 登陆成功!
        // alert(res.body.status.msg)
        location.href='/index.html'
       }
      })
    }
  }
})