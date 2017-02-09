// 设置导航特效
window.onload = function(){
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
        //给每个li添加点击事件
         navs[i].onclick = function () {
            //设置temp等于当前索引
         temp = this.index;
         for (var j = 0; j<navs.length;j++) {
             //先排他
             navs[j].className = "nav-gb";
         };
         //在设置点击的样式
         this.className = "nav-gb current";
         flag=false;
            return temp;
     };
    }

}
//获取可视窗口宽高
function winClient() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clitWidth || 0,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    };
}
	
function geiId(id) {
	 return document.getElementById(id);
}

//	设置产品
	
	//搜索部分
	var nav_t_search = geiId("nav_t_search");
	var searchBox = geiId("searchBox");
	var navBox = searchBox.children[0];
	var searchW = winClient().width;
	var searchH = winClient().height;
	var searClose = geiId("searClose");
	//遮罩层弹出和关闭
	nav_t_search.onclick = function(){
		this.style.zIndex = 100;
		searchBox.style.height = "100%";
		searchBox.style.width = "100%";
		navBox.style.height = "80px";
		navBox.style.display = "block";
		pop.style.display = "block";
	}
	searClose.onclick = function(){
		nav_t_search.style.zIndex = 0;
		navBox.style.display = "none";
		searchBox.style.height = "";
		pop.style.display = "none";
	}
	//模拟数据库
	var datas = ["X7","X7Plus","X7移动版","X7Plus移动版","Xplay旗舰版","Xplay5"]
	var iptTxt = document.getElementById("iptTxt");
	iptTxt.onkeyup = function(){
		console.log(1)
		//存储满足条件的数据		
		var resultArr = [];
		for(var i = 0; i<datas.length;i++){
			if(datas[i].indexOf(iptTxt.value)==0){
				resultArr.push(datas[i]);
			}
		}
		
		//由于没有所以需要创建下拉框
		var pop = document.getElementById("pop");
		
		//如果有就删除旧的pop
		if(pop){
			searchBox.removeChild(pop);
		}
		//如果什么都没有输入  则不需要创建
		if(iptTxt.value.length==0){
			return;
		}
		if(resultArr.length==0){
			return;
		}
		//开始创建pop
		var pop = document.createElement("div");
		pop.id = "pop";
		searchBox.appendChild(pop);
		
		//在pop中创建ul
		var ul = document.createElement("ul");
		ul.className = "list";
		pop.appendChild(ul);
		
		
		//根据得到数据的数组中的元素数量创建li
		for (var j = 0; j <resultArr.length;j++) {
			console.log(resultArr)
			//创建li
			var li = document.createElement("li");
			li.innerHTML = resultArr[j];
			ul.appendChild(li);
		}
				
	}




















	
