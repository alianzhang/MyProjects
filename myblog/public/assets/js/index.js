// 初始化
// ng-show  v-show
var vm = new Vue({
  el:'#box',
  data:{
    issignin:false// 表示用户是否登陆!
  },
  methods:{
    xxx:function(){
      // this.$http.get
    }
  }
})

// 直接发请求,和this.$http一样是发请求
Vue.http.get('/issignin').then(function(res){
  if(res.body.status==='ok'){
    vm.issignin = true
  }
})