window.onload = function(){
	var head_wrap = document.getElementById("vivo-head-wrap");
	//获取所有li
	var navs = head_wrap.children[0].children[1].children;
	
//	console.log(navs);

	 var flag = true;
    	var temp = 0;
	//鼠标移入移出的时候添加样式
	for(var i = 0;i<navs.length;i++){
		//设置自定义属性记录索引
		navs[i].index = i;
			//先设置首页为默认选中
		navs[1].className = "nav-gb current";
		
		navs[i].onmouseover = function(){
			//排他
			for (var j = 0; j<navs.length;j++) {
				//先将默认选中清掉
				navs[j].className = "nav-gb";
			};
			//再设置移入时选中
			this.className = "nav-gb current";
		}
		//鼠标移出
		navs[i].onmouseout = function(){
			if(flag){
				//先将所有默认选中清掉
			this.className = "nav-gb";
			//再设置首页选中
			navs[1].className = "nav-gb current";
			//设置背景颜色过渡0.3s
			this.style.transition = "background-color .3s ease"
			}
			flag = true;
		}
//		//给每个li添加点击事件
//		 navs[i].onclick = function () {
//		 	//设置temp等于当前索引
//          temp = this.index;
//          for (var j = 0; j<navs.length;j++) {
//              //先排他
//              navs[j].className = "nav-gb";
//          };
//          //在设置点击的样式
//          this.className = "nav-gb current";
//          flag=false;
//			return temp;
//      };
	}
	
	
	
	
	
		function geiId(id) {
    return document.getElementById(id);
}
var v_footer = geiId("v-footer");
var weixin = geiId("weixin-f");
var weixinma = geiId("weixinma");
var vivo_gotop = geiId("vivo-gotop");
//var d = geiId("d");
//移入微信显示二维码
weixin.onmouseover = function () {
    weixinma.style.left = v_footer.offsetWidth / 2 - 243 + "px";
    weixinma.style.display = "block";
};
//移除不显示
weixin.onmouseout = function () {
    weixinma.style.display = "none";
};
//判断页面卷曲高度，显示gotop按钮
window.onscroll = function () {
    var scrl = scroll();
    if (scrl.top > 800) {
    	console.log(1)
        vivo_gotop.style.display = "block";
    } else {
        vivo_gotop.style.display = "none";
    }
}
}
