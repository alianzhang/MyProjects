/**
 * Created by henry on 2016/9/27/.
 */

window.onload = function(){
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