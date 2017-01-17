
//	var vivo_high = document.getElementById("vivo-high");
//	
//	vivo_high.style.height = winClient().height;
//	window.onmousemove = function(){
//		console.log(winClient().height);
//	}
	//获取可视窗口宽高
	function winClient() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    };
   }
    
    //获取页面卷曲宽高
    function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}
    
        
    var head_wrap = document.getElementById("vivo-head-wrap");
	//获取所有li
	var navs = head_wrap.children[0].children[1].children;

	var flag = true;
    var temp = 0;
	//鼠标移入移出的时候添加样式
	for(var i = 0;i<navs.length;i++){
		//设置自定义属性记录索引
		navs[i].index = i;
			//先设置首页为默认选中
		navs[0].className = "nav-gb current";
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
			navs[0].className = "nav-gb current";
			//设置背景颜色过渡0.3s
			this.style.transition = "background-color .3s ease"
			}
			flag = true;
		}
	
	var footer = document.getElementById("v-footer");
	
	if(scroll().top>500){
		footer.style.zIndex = 7;
	}
    
    
    
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
	
	
	
	
	
	
	
	
	
	
	

    
    
    
    
    

	
	
	

