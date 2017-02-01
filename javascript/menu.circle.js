$(document).ready(function() {

  var active1MaskRight = false;
  var active1 = false;
  var active3 = false;


    $('.mask-right').on('mousedown touchstart', function() {
    
	if(!active1MaskRight){
		$(this).css({'background-color':'white'});
		$(this).find("span").css({'color':'black'});
		active1MaskRight = true;
	}else if(active1MaskRight){
		$(this).css({'background-color':'transparent'});
		$(this).find("span").css({'color':'white'});	
		active1MaskRight = false;
	}
	
    if (!active1) {
		$(".radial-menu-right")
			.find('.menu-item1')
			.css({'transform': 'translate(-105px,60px)',
				  'border-style': 'solid',
				  'border-color': 'white'});
		active1 = true;
	} else if (active1){
		$(".radial-menu-right")
			.find('.menu-item1')
			.css({'transform': 'none',
				  'border-style': 'none',
				  'border-color': 'none'});
		active1 = false;
	}
    
	if (!active3) {
		$(".radial-menu-right")
			.find('.menu-item3')
			.css({'transform': 'translate(-119px,-30px)',
				  'border-style': 'solid',
				  'border-color': 'white'});
		active3 = true;
	} else if(active3){
		$(".radial-menu-right")
			.find('.menu-item3')
			.css({'transform': 'none',
				  'border-style': 'none',
				  'border-color': 'none'});
		active3 = false
	}
		

      
    });
	
	$('.menu-item1').on('mousedown touchstart', function() {
		$(".overlay").hide();
		$(".radial-menu-right").hide();
		$(".radial-menu-left").hide();
	});
	
	$('.menu-item3').on('mousedown touchstart', function() {
	
	});
});