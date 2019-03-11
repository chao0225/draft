var t = 1;
var box1 = $(".box1");
var box2 = $(".box2");
var box3 = $(".box3");
$(".icon-prev").click(function(){
  clearInterval(timer);
    switch(t){
        case 4: box1.css("left","-2400px");
                box2.css("left","-2400px");
                box3.css("left","-2400px");
                t--;
                break;
        case 3: box1.css("left","-1200px");
                box2.css("left","-1200px");
                box3.css("left","-1200px");
                t--;
                break;
        case 2: box1.css("left","0px");
                box2.css("left","0px");
                box3.css("left","0px");
                t--;
                break;
        case 1: box1.css("left","-3600px");
                box2.css("left","-3600px");
                box3.css("left","-3600px");
                t=4;
                break;
    }
})
$(".icon-next").click(function(){
  clearInterval(timer);
    switch(t){
        case 1: box1.css("left","-1200px");
                box2.css("left","-1200px");
                box3.css("left","-1200px");
                t++;
                break;
        case 2: box1.css("left","-2400px");
                box2.css("left","-2400px");
                box3.css("left","-2400px");
                t++;
                break;
        case 3: box1.css("left","-3600px");
                box2.css("left","-3600px");
                box3.css("left","-3600px");
                t++;
                break;
        case 4: box1.css("left","0px");
                box2.css("left","0px");
                box3.css("left","0px");
                t=1;
                break;
    }
})
var timer = setInterval(function(){
  switch(t){
    case 1: box1.css("left","-1200px");
            box2.css("left","-1200px");
            box3.css("left","-1200px");
            t++;
            break;
    case 2: box1.css("left","-2400px");
            box2.css("left","-2400px");
            box3.css("left","-2400px");
            t++;
            break;
    case 3: box1.css("left","-3600px");
            box2.css("left","-3600px");
            box3.css("left","-3600px");
            t++;
            break;
    case 4: box1.css("left","0px");
            box2.css("left","0px");
            box3.css("left","0px");
            t=1;
            break;
  }
},3000);
var prev = $(".owl-prev");
var next = $(".owl-next");
var i = 1;
prev.on("click",function(){
    switch(i){
        case 1: $(".tab-box").css("left","-6160px");
                $(".number-box").css("top","-456px")
                i=8;
                break;
        case 2: $(".tab-box").css("left","0px");
                $(".number-box").css("top","7px")
                i--;
                break;
        case 3: $(".tab-box").css("left","-880px");
                $(".number-box").css("top","-59px");
                i--;
                break;
        case 4: $(".tab-box").css("left","-1760px");
                $(".number-box").css("top","-126px")
                i--;
                break;
        case 5: $(".tab-box").css("left","-2640px");
                $(".number-box").css("top","-192px")
                i--;
                break;
        case 6: $(".tab-box").css("left","-3520px");
                $(".number-box").css("top","-258px")
                i--;
                break;
        case 7: $(".tab-box").css("left","-4400px");
                $(".number-box").css("top","-324px")
                i--;
                break;
        case 8: $(".tab-box").css("left","-5280px");
                $(".number-box").css("top","-389px")
                i--;
                break;
    }
})
next.on("click",function(){
    switch(i){
        case 1: $(".tab-box").css("left","-880px");
                $(".number-box").css("top","-59px");
                i++;
                break;
        case 2: $(".tab-box").css("left","-1760px");
                $(".number-box").css("top","-126px")
                i++;
                break;
        case 3: $(".tab-box").css("left","-2640px");
                $(".number-box").css("top","-192px")
                i++;
                break;
        case 4: $(".tab-box").css("left","-3520px");
                $(".number-box").css("top","-258px")
                i++;
                break;
        case 5: $(".tab-box").css("left","-4400px");
                $(".number-box").css("top","-324px")
                i++;
                break;
        case 6: $(".tab-box").css("left","-5280px");
                $(".number-box").css("top","-389px")
                i++;
                break;
        case 7: $(".tab-box").css("left","-6160px");
                $(".number-box").css("top","-456px")
                i++;
                break;
        case 8: $(".tab-box").css("left","0px");
                $(".number-box").css("top","7px")
                i=1;
                break;
    }
})
$(".close").click(function(){
  $(".tab-content").css("height","0");
  $(".tab-content").css("padding-bottom","0");
  $(".tab-content").css("padding-top","0");
  $(".tab-button").css("margin-top","-20px");
})

$(".tab-button>div>a").click(function(){
  var a = $(this);
  $(".tab-content").css("height","254px");
  $(".tab-content").css("padding-bottom","50px");
  $(".tab-content").css("padding-top","50px");
  $(".tab-button").css("margin-top","70px");
})

/*canvas*/
particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);


var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



/* 下面是ajax请求 */

$("#btn").click(function(){
  var uname = $("#uname").val();
  var email = $("#email").val();
  var phone = $("#phone").val();
  var content = $("#content").val();
  /* 发送数据 */
  $.ajax({
      url:"http://127.0.0.1:3030/users/add",
      type:"post",
      data:`uname=${uname}&email=${email}&phone=${phone}&content=${content}`,
      success:function(res){
        layer.msg('提交成功！！', {
          icon: 1,
          time: 2000 //2秒关闭（如果不配置，默认是3秒）
        }, function(){
          window.location.reload();
        });
      }
  })
})


//鼠标滚轮事件
var d = 0;
window.onscroll=function(){
  if(d == 0){
    var t = document.documentElement.scrollTop||document.body.scrollTop;
    //服务部分
    var elem = $("#service");
    if(t>0){
      elem.attr("class","service fade in");
    }
    if(t<=0){
      elem.attr("class","service fade");
    }
    if(t>=200){
      $("#service_header").attr("class","service_header fade_header in_header");
    }
    if(t<200){
      $("#service_header").attr("class","service_header fade_header");
    }
    if(t>=600){
      $("#service_container").attr("class","service_container fade in");
    }
    if(t<600){
      $("#service_container").attr("class","service_container fade");
    }
    if(t>=900){
      $("#project_header").attr("class","container_header fade_header in_header");
    }
    if(t<900){
      $("#project_header").attr("class","container_header fade_header");
    }
    if(t>=1050){
      $("#pro_container_list").attr("class","pro_container_list fade in");
    }
    if(t<1050){
      $("#pro_container_list").attr("class","pro_container_list fade");
    }
    if(t>=1200){
      $("#project_content").attr("class","container_content fade in");
    }
    if(t<1200){
      $("#project_content").attr("class","container_content fade");
    }
    if(t>=1700){
      $("#about").attr("class","about fade in");
    }
    if(t<1700){
      $("#about").attr("class","about fade");
    }
    if(t>=1800){
      $("#text-wrapper").attr("class","text-wrapper fade_right in_right");
    }
    if(t<1800){
      $("#text-wrapper").attr("class","text-wrapper fade_right");
    }
    if(t>=1800){
      $("#mediabody").attr("class","mediabody fade_left in_left");
    }
    if(t<1800){
      $("#mediabody").attr("class","mediabody fade_left");
    }
    if(t>=2300){
      $("#module").attr("class","module fade in");
    }
    if(t<2300){
      $("#module").attr("class","module fade");
    }
    if(t>=2400){
      $("#team").attr("class","team fade in");
    }
    if(t<2400){
      $("#team").attr("class","team fade");
    }
    if(t>=2500){
      $("#team_header").attr("class","team_header fade_header in_header");
    }
    if(t<2500){
      $("#team_header").attr("class","team_header fade_header");
    }
    if(t>=2800){
      $("#swiper-container").attr("class","swiper-container fade in")
    }
    if(t<2800){
      $("#swiper-container").attr("class","swiper-container fade")
    }
    if(t>=3200){
      $("#news_header").attr("class","container_header fade_header in_header");
    }
    if(t<3200){
      $("#news_header").attr("class","container_header fade_header");
    }
    if(t>=3400){
      $("#container_list").attr("class","container_list fade in");
    }
    if(t<3400){
      $("#container_list").attr("class","container_list fade");
    }
    if(t>=3600){
      $("#first").attr("class","first fade in");
    }
    if(t<3600){
      $("#first").attr("class","first fade");
    }
    if(t>=3800){
      $("#two").attr("class","two fade in");
    }
    if(t<3800){
      $("#two").attr("class","two fade");
    }
    if(t>=4100){
      $("#partner_header").attr("class","container_header fade_header in_header");
    }
    if(t<4100){
      $("#partner_header").attr("class","container_header fade_header");
    }
    if(t>=4300){
      $("#partner_content").attr("class","partner_content fade in");
    }
    if(t<4300){
      $("#partner_content").attr("class","partner_content fade");
    }
    if(t>=4600){
      $("#contact_header").attr("class","container_header fade_header in_header")
    }
    if(t<4600){
      $("#contact_header").attr("class","container_header fade_header")
    }
    if(t>=4900){
      $("#contactinfo").attr("class","contactinfo fade_left in_left")
    }
    if(t<4900){
      $("#contactinfo").attr("class","contactinfo fade_left")
    }
    if(t>=4900){
      $("#contactform").attr("class","contactform fade_right in_right")
    }
    if(t<4900){
      $("#contactform").attr("class","contactform fade_right");
    }
  }
}

//
  $(".container_category a").hover(//给目标元素绑定hover事件
      function(e){
          move.call(this,e,true)//移入
      },
      function(e){
          move.call(this,e,false)//移出
      }
  );
  function move(e,bool){
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
                  $(this).find("span.category_text").css("display","inline-block");
                  $(this).find("div.category_mask").css({
                      left:0,
                      top:-32
                  }).stop().animate({top:0},100);
              }else{
                  $(this).find("span.category_text").css("display","none");
                  $(this).find("div.category_mask").stop().animate({top:-32},100);
              }
              break;
          case sB:
              if(bool){
                  $(this).find("span.category_text").css("display","inline-block");
                  $(this).find("div.category_mask").css({
                      left:0,
                      top:64
                  }).stop().animate({top:0},100);
              }else{
                  $(this).find("span.category_text").css("display","none");
                  $(this).find("div.category_mask").stop().animate({top:64},100);
              }
              break;
          case sL:
              if(bool){
                  $(this).find("span.category_text").css("display","inline-block");
                  $(this).find("div.category_mask").css({
                      left:-100,
                      top:0
                  }).stop().animate({left:0},100);
              }else{
                  $(this).find("span.category_text").css("display","none");
                  $(this).find("div.category_mask").stop().animate({left:-100},100);
              }
              break;
          case sR:
              if(bool){
                  $(this).find("span.category_text").css("display","inline-block");
                  $(this).find("div.category_mask").css({
                      left:104,
                      top:0
                  }).stop().animate({left:0},100);
              }else{
                  $(this).find("span.category_text").css("display","none");
                  $(this).find("div.category_mask").stop().animate({left:104},100);
              }
              break;
      }       
  }

//项目遮罩层
$(".project_item").hover(//给目标元素绑定hover事件
    function(e){
        movede.call(this,e,true)//移入
    },
    function(e){
        movede.call(this,e,false)//移出
    }
);
function movede(e,bool){
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
                $(this).find(".item_wrapper").css({
                    left:0,
                    top:-300
                }).stop().animate({top:0},300);
            }else{
                $(this).find(".item_wrapper").stop().animate({top:-300},300);
            }
            break;
        case sB:
            if(bool){
                $(this).find(".item_wrapper").css({
                    left:0,
                    top:300
                }).stop().animate({top:0},300);
            }else{
                $(this).find(".item_wrapper").stop().animate({top:300},300);
            }
            break;
        case sL:
            if(bool){
                $(this).find(".item_wrapper").css({
                    left:-300,
                    top:0
                }).stop().animate({left:0},300);
            }else{
                $(this).find(".item_wrapper").stop().animate({left:-300},300);
            }
            break;
        case sR:
            if(bool){
                $(this).find(".item_wrapper").css({
                    left:300,
                    top:0
                }).stop().animate({left:0},300);
            }else{
                $(this).find(".item_wrapper ").stop().animate({left:300},300);
            }
            break;
    }       
}



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


window.onload = function(){
  $("#lunbo").attr("class","lunbo fade in");message();
}
//隐藏小的信息，显示大的信息
function message(){
  $("#message").css("right","-50px");
  $("#message_big").css("right","10px");
  unScroll()
}
//屏蔽滚动条
function unScroll() {
  var top = $(document).scrollTop();
  $(document).on('scroll.unable',function (e) {
      $(document).scrollTop(top);
  })
}
//去除屏蔽滚动条
function removeUnScroll() {
  $(document).unbind("scroll.unable");
}


$("#message").click(function(){
  message();
})

//隐藏大的信息，显示小的信息
function removeMessage(){
  $("#message").css("right","0");
  $("#message_big").css("right","-200px");
  removeUnScroll();
}

$("#close").click(function(){
  removeMessage();
  setTimeout(function(){
    message();
  },10000);
})



//滑动遮罩层
// $(".partner_list li a").each(function(){
//   $(this).append("<div class=slidiv></div>");
// });
// $(".partner_list li a").bind("mouseenter mouseleave",  function(e) {
//   this_slidiv = $(this).find('.slidiv');
//   this_slidiv.css("opacity","1");
//   var w = $(this).width();
//   var h = $(this).height();
//   var x = e.offsetX ;//(- this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
//   var y = e.offsetY ;//(- this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
//   var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;

   
//    if(e.type == 'mouseenter'){
//        switch(direction){
//          case 0 :
//            this_slidiv.css({top:-h,left:"0px"});
//              break;
//          case 1:
//            this_slidiv.css({top:"0px",left:w});
//              break;
//          case 2:
//            this_slidiv.css({top:h,left:"0px"});
//              break;
//          case 3:
//            this_slidiv.css({top:"0px",left:-w});
//              break;
//     }
  
//       this_slidiv.stop(true,true).animate({"top":"0px","left":"0px"},"fast");
      
//    }else if(e.type == 'mouseleave'){
//        switch(direction){
//          case 0 :
//            this_slidiv.stop(true,true).animate({"top":-h},"fast");
//              break;
//          case 1:
//            this_slidiv.stop(true,true).animate({"left":w},"fast");
//              break;
//          case 2:
//            this_slidiv.stop(true,true).animate({"top":h},"fast");
//              break;
//          case 3:
//            this_slidiv.stop(true,true).animate({"left":-w},"fast");
//              break;
//     }		
//  }
// });








//这个模块完成鼠标方向判断的功能
// var MouseDirection = function (element, opts) {

//   var $element = $(element);

//   //enter leave代表鼠标移入移出时的回调
//   opts = $.extend({}, {
//       enter: $.noop,
//       leave: $.noop
//   }, opts || {});

//   var dirs = ['top', 'right', 'bottom', 'left'];

//   var calculate = function (element, e) {
//       /*以浏览器可视区域的左上角建立坐标系*/

//       //表示左上角和右下角及中心点坐标
//       var x1, y1, x4, y4, x0, y0;

//       //表示左上角和右下角的对角线斜率
//       var k;

//       //用getBoundingClientRect比较省事，而且它的兼容性还不错
//       var rect = element.getBoundingClientRect();

//       if (!rect.width) {
//           rect.width = rect.right - rect.left;
//       }

//       if (!rect.height) {
//           rect.height = rect.bottom - rect.top;
//       }

//       //求各个点坐标 注意y坐标应该转换为负值，因为浏览器可视区域左上角为(0,0)，整个可视区域属于第四象限
//       x1 = rect.left;
//       y1 = -rect.top;

//       x4 = rect.left + rect.width;
//       y4 = -(rect.top + rect.height);

//       x0 = rect.left + rect.width / 2;
//       y0 = -(rect.top + rect.height / 2);

//       //矩形不够大，不考虑
//       if (Math.abs(x1 - x4) < 0.0001) return 4;

//       //计算对角线斜率
//       k = (y1 - y4) / (x1 - x4);

//       var range = [k, -k];

//       //表示鼠标当前位置的点坐标
//       var x, y;

//       x = e.clientX;
//       y = -e.clientY;

//       //表示鼠标当前位置的点与元素中心点连线的斜率
//       var kk;

//       kk = (y - y0) / (x - x0);

//       //如果斜率在range范围内，则鼠标是从左右方向移入移出的
//       if (isFinite(kk) && range[0] < kk && kk < range[1]) {
//           //根据x与x0判断左右
//           return x > x0 ? 1 : 3;
//       } else {
//           //根据y与y0判断上下
//           return y > y0 ? 0 : 2;
//       }
//   };

//   $element.on('mouseenter', function (e) {
//       var r = calculate(this, e);
//       opts.enter($element, dirs[r]);
//   }).on('mouseleave', function (e) {
//       var r = calculate(this, e);
//       opts.leave($element, dirs[r]);
//   });
// };

// $(".partner_list li a").each(function(){
//   $(this).append("<div class='slidiv'></div>");
// });

// var DIR_POS = {
//   left: {
//       top: '0',
//       left: '-100%'
//   },
//   right: {
//       top: '0',
//       left: '100%'
//   },
//   bottom: {
//       top: '100%',
//       left: '0'
//   },
//   top: {
//       top: '-100%',
//       left: '0'
//   }
// };
// $('.partner_list li a').each(function () {
//   new MouseDirection(this, {
//       enter: function ($element, dir) {
//           //每次进入前先把.trans类移除掉，以免后面调整位置的时候也产生过渡效果
//           var $content = $element.find('.slidiv').removeClass('trans');
//           //调整位置
//           $content.css(DIR_POS[dir]);
//           //reflow
//           $content[0].offsetWidth;
//           //启用过渡
//           $content.addClass('trans');
//           //滑入
//           $content.css({left: '0', top: '0'});
//       },
//       leave: function ($element, dir) {
//           $element.find('.slidiv').css(DIR_POS[dir]);
//       }
//   });
// });