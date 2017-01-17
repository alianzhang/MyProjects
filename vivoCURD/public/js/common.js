
	
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
//
//


	//获取可视区域大小
		function winClient() {
		    return {
		        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
		        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
		    };
		}




















	
