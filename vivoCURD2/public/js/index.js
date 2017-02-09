   
//获取页面卷曲宽高
    function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}
    
   
 var footer = document.getElementById("v-footer");
    if(scroll().top>500){
        footer.style.zIndex = 7;
    }  

// 微信二维码移入移出效果
function geiId(id) {
    return document.getElementById(id);
}
var v_footer = geiId("v-footer");
var weixin = geiId("weixin-f");
var weixinma = geiId("weixinma");
var vivo_gotop = geiId("vivo-gotop");
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
        vivo_gotop.style.display = "block";
    } else {
        vivo_gotop.style.display = "none";
    }
}
	
	
	
	
	
	
	
	
	
	

    
    
    
    
    

	
	
	

