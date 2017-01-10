// 初始化
var vm = new Vue({
  el:'#box',
  data:{
    username:'',
    email:'',
    password:'',
    mycode:''
  },
  methods:{
    // 注册!
    signup:function(e){
      e.preventDefault() // 阻止默认事件!
      // console.log(this)
      // 较验!
      // 用户名(长度[5-10])
      if(this.username.length<5||this.username.length>10){
        alert('用户名不合规则!')
        return 
      }
      // 17131267773  // 13126789981
      if(this.email.indexOf('@') ==-1){
        alert('邮箱不合法')
        return
      }
      if(this.password.length<5 || this.password.lengt> 10){
        alert('密码，不安全!')
        return
      }
      if(!this.mycode){
        alert('请输入验证码')
        return
      }
      console.log(this)
      console.log('123')
      // 发请求，注册
      this.$http.post('/signup',{
        username:this.username,
        email: this.email,
        password: this.password,
        mycode: this.mycode
      })
      // then方法里的第一个参数就是成功的回调函数!
      .then(function(res){
        console.log(res)
      })
    }
  }
})

// when('/home')