

$(function(){
//设置产品显示隐藏
    $("#product").mouseenter(function(){
        $("#series").stop().animate({
            "opacity":"1",
        },800)
        $("#series").addClass("show");
    })
    $("#product").mouseleave(function(){
        $("#series").stop().animate({
            "opacity":"0",
        },800,function(){
            $("#series").removeClass("show");
        })
    })    
    $("#series").mouseenter(function(){
        $("#series").stop().animate({
            "opacity":"1",
        },800)
        $("#series").addClass("show");
    })
    $("#series").mouseleave(function(){
        $("#series").stop().animate({
            "opacity":"0",
        },800,function(){
            $("#series").removeClass("show");
        })
    })

// 推荐产品动画
    $(" #all1 ").mouseenter(function() {
        $(this).children("img").stop().animate({
            "top": "-20px"
        }, 1500);
    });
    $(" #all1 ").mouseleave(function() {
        $(this).children("img").stop().animate({
            "top": "0px"
        }, 800);
    });
    $(" #all2 ").mouseenter(function() {
        $(this).children("img").stop().animate({
            "top": "-40px"
        }, 1600);
    });
    $(" #all2 ").mouseleave(function() {
        $(this).children("img").stop().animate({
            "top": "0px"
        }, 800);
    });
    $(" #all4 ").mouseenter(function() {
        $(this).children("img").stop().animate({
            "left": "0px"
        }, 1500);
    });
    $(" #all4 ").mouseleave(function() {
        $(this).children("img").stop().animate({
            "left": "26px"
        }, 1000);
    });
    
    $("#vivo-gotop").click(function(){
            $('body,html').animate({scrollTop:0},1000);  
                return false; 
    })          
          

// 全部产品展示
    var totalPage = 5
    var pageSize = 12
    function getstarList(pageIndex, pageSize){
        var start = pageSize * (pageIndex - 1)
        $.ajax({
            url: '/starlist',
            type: 'get',
            data: { start: start, count: pageSize },
            success: function(result) {
                if (result.status === 'ok') {
                   totalPage =  Math.ceil(result.total / pageSize)

                // 初始化分页按钮，需要安装插件twbsPagination
                   $('.pagination').twbsPagination({
                         totalPages: totalPage, // 总页数
                         visiblePages: 5, // 显示多少个页码
                         // 当前点击页码事件!
                         onPageClick: function (event, page) {
                           getstarList(page, pageSize)
                        }
                       })

                    // 拼接展示模块字符串
                    var str = ''
                    for (var i = 0; i < result.starList.length; i++) {
                        var item = result.starList[i]
                            str += '<li><a href='+'"#"'+'><div class='+'"figure"'+'><img src='+'"'+item.poster+'"' + '/></div><h3>'+item.stageName+'</h3><i></i></a></li>'
                    }
                    // 把字符串添加到页面ul中
                    $('#product-show').html(str)

                }
            }

        })
    }

     getstarList(1, pageSize)
})