
function sld($img,$btn,time,DIS,list){
	var c=0;
	var timer=setInterval(cd,time);
	function cd(){
	  c++;
	  if(c==list){
		$($img).css('left','0px');
		c=1;
	  }
	  $($img).animate({'left':c*-DIS+'px'},500);
	  c==(list-1)?$($btn).eq(0).css('background','#CEBBFF').siblings().css('background','#8584C3'):$($btn).eq(c).css('background','#CEBBFF').siblings().css('background','#8584C3')
	}
	$($btn).mouseenter(function(e){
	  console.log($(this))
	  clearInterval(timer);
	  c=$(this).index();
	  $($img).stop().animate({'left':c*-DIS+'px'},500);
	  $(this).css('background','#CEBBFF').siblings().css('background','#8584C3');
	});
	
	$($btn).mouseleave(function(){
	  timer=setInterval(cd,time)
	})
  }

  sld('.lunbo-tu>li>video','.aBox>a',2000,1423,5);

/*  url(../img/index/bg_nav1_d1d2f9a.png) no-repeat -150px -24px
url(../img/index/bg_nav1_d1d2f9a.png) no-repeat -150px -280px
*/