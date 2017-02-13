$(document).ready(function() {

  var active1MaskRight = false;
  var active1 = false;
  var active3 = false;
  
  var activeCS = false;


    $('.mask-right').on('mousedown touchstart', function() {
    
	/*if(!active1MaskRight){
		$(this).css({'background-color':'white'});
		$(this).find("span").css({'color':'black'});
		active1MaskRight = true;
	}else if(active1MaskRight){
		$(this).css({'background-color':'transparent'});
		$(this).find("span").css({'color':'white'});	
		active1MaskRight = false;
	}*/
	
    if (!active1) {
		$(".radial-menu-right")
			.find('.menu-item-sc')
			.css({'transform': 'translate(-80px,-70px)',
				  'display': 'inline'});
		active1 = true;
	} else if (active1){
		$(".radial-menu-right")
			.find('.menu-item-sc')
			.css({'transform': 'none',
				  'display': 'none'});
		active1 = false;
	}
    
	if (!active3) {
		$(".radial-menu-right")
			.find('.menu-item-rc')
			.css({'transform': 'translate(-100px,0px)',
				  'display': 'inline'});
		active3 = true;
	} else if(active3){
		$(".radial-menu-right")
			.find('.menu-item-rc')
			.css({'transform': 'none',
				  'display': 'none'});
		active3 = false
	}
		
      
    });
	
	$('.mask-left').on('mousedown touchstart', function() {
	
    if (!activeCS) {
		$(".radial-menu-left")
			.find('.menu-item-csp')
			.css({'transform': 'translate(105px,-30px)',
				  'display': 'inline'});
		activeCS = true;
	} else if (activeCS){
		$(".radial-menu-left")
			.find('.menu-item-csp')
			.css({'transform': 'none',
				  'display': 'none'});
		activeCS = false;
	}
	
	});
	
	$('.menu-item-sc').on('mousedown touchstart', function() {
		enableServiceCentres();
	});
	
	$('.menu-item-rc').on('mousedown touchstart', function() {
	
	});
});