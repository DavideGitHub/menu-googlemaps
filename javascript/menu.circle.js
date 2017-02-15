$(document).ready(function() {

  var active1MaskRight = false;
  var active1 = false;
  var active3 = false;
  
  var activeCS = false;
  var activeLC = false;
  var activeTC = false;
  var activeTraining = false;

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
			.css({'transform': 'translate(-73px, -103px)',
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
			.css({'transform': 'translate(-120px, -38px)',
				  'display': 'inline'});
		active3 = true;
	} else if(active3){
		$(".radial-menu-right")
			.find('.menu-item-rc')
			.css({'transform': 'none',
				  'display': 'none'});
		active3 = false
	}
	
	if (!activeLC) {
		$(".radial-menu-right")
			.find('.menu-item-lc')
			.css({'transform': 'translate(-120px, 38px)',
				  'display': 'inline'});
		activeLC = true;
	} else if(activeLC){
		$(".radial-menu-right")
			.find('.menu-item-lc')
			.css({'transform': 'none',
				  'display': 'none'});
		activeLC = false
	}
		
	if (!activeTC) {
		$(".radial-menu-right")
			.find('.menu-item-tc')
			.css({'transform': 'translate(-73px, 103px)',
				  'display': 'inline'});
		activeTC = true;
	} else if(activeTC){
		$(".radial-menu-right")
			.find('.menu-item-tc')
			.css({'transform': 'none',
				  'display': 'none'});
		activeTC = false
	}
      
    });
	
	$('.mask-left').on('mousedown touchstart', function() {
	
    if (!activeCS) {
		$(".radial-menu-left")
			.find('.menu-item-csp')
			.css({'transform': 'translate(120px, -38px)',
				  'display': 'inline'});
		activeCS = true;
	} else if (activeCS){
		$(".radial-menu-left")
			.find('.menu-item-csp')
			.css({'transform': 'none',
				  'display': 'none'});
		activeCS = false;
	}
	

    if (!activeTraining) {
		$(".radial-menu-left")
			.find('.menu-item-training')
			.css({'transform': 'translate(120px, 38px)',
				  'display': 'inline'});
		activeTraining = true;
	} else if (activeTraining){
		$(".radial-menu-left")
			.find('.menu-item-training')
			.css({'transform': 'none',
				  'display': 'none'});
		activeTraining = false;
	}	
	
	});
	
	$('.menu-item-sc').on('mousedown touchstart', function() {
		enableServiceCentres();
	});
	
	$('.menu-item-rc').on('mousedown touchstart', function() {
	
	});
});