
$(document).ready(function(){
     var slideBox = $(".lunbo");//最外层的div
     var ul = slideBox.find("ul");//搜索最外层的div下所有段落中的后代 ul 元素
     var oneWidth = slideBox.find("ul li").eq(0).width();//搜索最外层的div下所有段落中的后代 ul li第一个 元素 的宽度
     var number = slideBox.find(".aBox a"); 
	 //搜索最外层的div下所有段落中的后代下 .spanBox p  元素
	 //注意分号 和逗号的用法
     var timer = null
     var sw = 0;                    
     //每个span绑定click事件，完成切换颜色和动画，以及读取参数值
     number.on("click",function (){
		 $(this).addClass("active").siblings("a").removeClass("active");
		 sw=$(this).index();
		ul.animate({
            "right":oneWidth*sw,   //ul标签的动画为向左移动；
        });
     });
     //左右按钮的控制效果
    /* $(".next").stop(true,true).click(function (){
         sw++;
         if(sw==number.length){sw=0};
         number.eq(sw).trigger("click");
         });
    $(".prev").stop(true,true).click(function (){
        sw--;
        if(sw==number.length){sw=0};
        number.eq(sw).trigger("click");
        });*/
    //定时器的使用，自动开始
    timer = setInterval(function (){
        sw++;
        if(sw==number.length){sw=0};
        number.eq(sw).trigger("click");
        },4000);
    //hover事件完成悬停和，左右图标的动画效果
/*
    slideBox.hover(function(){
		
        $(".next,.prev").animate({
            "opacity":1,
            },200);
        clearInterval(timer);
        },function(){
            $(".next,.prev").animate({
                "opacity":0.5,
                },500);
				
        timer = setInterval(function (){
        sw++;
        if(sw==number.length){sw=0};
        number.eq(sw).trigger("click");
        },4000);
            })*/
})



/*
多个事件绑定同一个函数   悬浮切换

$(document).ready(function(){
  $("p").on("mouseover mouseout",function(){
    $("p").toggleClass("intro");
  });
});

*/