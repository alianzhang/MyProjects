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
// 这个方法是引包vue-resource之后才有的!

// vm.$http.get('/issignin')
Vue.http.get('/issignin').then(function(res){
  console.log(res)
  if(res.body.status==='ok'){
    vm.issignin = true
  }
})
vm.$http.get('/getarticle').then(function(result){
  // console.log(result.body.data)
  if(result.body.status === 'ok'){
    var str = ''
    for (var i = 0; i < result.body.data.length; i++) {
      var item = result.body.data[i]
      str +='<div class="aw-item active" data-topic-id="57,">'+
'  <a class="aw-user-name hidden-xs" data-id="3654" href="/people/" rel="nofollow"><img src="'+'uploads/upload_eccff345dd8492ebe6522236b763ce54.png'+'" alt="" /></a>'+
'  <div class="aw-question-content">'+
'    <h4>'+
 '                                                   <a href="">'+ item.title +'</a>'+
                                               ' </h4> '+
 '   <p>作者:'+
 '     <a href="/people/" class="aw-user-name">alianzhang</a>'+
 '     <span class="text-color-999">• 55秒前发表 •</span>'+
 '   </p>'+
 ' </div>'+
'</div>'
    }
    var box = document.getElementById('hds_container')
    box.innerHTML = str
  }
})

// 获取文章的列表


// success:function(data){
  
// }