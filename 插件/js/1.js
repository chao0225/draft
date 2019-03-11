$(".partner_list .item-partner a").hover(//给目标元素绑定hover事件
    function(e){
        moved.call(this,e,true)//移入
    },
    function(e){
        moved.call(this,e,false)//移出
    }
  );
  function moved(e,bool){
    var top=$(this).offset().top;
    var left=$(this).offset().left;
    var bottom=top+$(this).height();
    var right=left+$(this).width();
  
    var x=e.pageX;
    var y=e.pageY;
  
    var sT=Math.abs(y-top);
    var sB=Math.abs(bottom-y);
    var sL=Math.abs(x-left);
    var sR=Math.abs(right-x);
  
    var min=Math.min(sT,sB,sL,sR);
    switch(min){
        case sT:
            if(bool){
                $(this).find(".partner_mask").css({
                    left:0,
                    top:-200,
                    opacity:1
                }).stop().animate({top:0},300);
            }else{
                $(this).find(".partner_mask").stop().animate({top:-300},300);
            }
            break;
        case sB:
            if(bool){
                $(this).find(".partner_mask").css({
                    left:0,
                    top:200,
                    opacity:1
                }).stop().animate({top:0},300);
            }else{
                $(this).find(".partner_mask").stop().animate({top:300},300);
            }
            break;
        case sL:
            if(bool){
                $(this).find(".partner_mask").css({
                    left:-200,
                    top:0,opacity:1
                }).stop().animate({left:0},300);
            }else{
                $(this).find(".partner_mask").stop().animate({left:-300},300);
            }
            break;
        case sR:
            if(bool){
                $(this).find(".partner_mask").css({
                    left:200,
                    top:0,opacity:1
                }).stop().animate({left:0},300);
            }else{
                $(this).find(".partner_mask").stop().animate({left:300},300);
            }
            break;
    }       
  }