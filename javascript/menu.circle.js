$(document).ready(function() {


    $('.mask-right').on('mouseover touchstart', function() {
    
		$(".radial-menu-left")
			.find('.menu-item-csp')
			.css({'transform': 'none',
				  'display': 'none'});
		
		$(".radial-menu-left")
			.find('.menu-item-training')
			.css({'transform': 'none',
				  'display': 'none'});
				
		$(".radial-menu-right")
			.find('.menu-item-sc')
			.css({'transform': 'translate(-73px, -103px)',
				  'display': 'inline'});

		$(".radial-menu-right")
			.find('.menu-item-rc')
			.css({'transform': 'translate(-120px, -38px)',
				  'display': 'inline'});
	
		
		$(".radial-menu-right")
			.find('.menu-item-lc')
			.css({'transform': 'translate(-120px, 38px)',
				  'display': 'inline'});

		$(".radial-menu-right")
			.find('.menu-item-tc')
			.css({'transform': 'translate(-73px, 103px)',
				  'display': 'inline'});
			

      
    });
	
	$('.mask-left').on('mouseover', function() {
		
		//disable the mask-right
		$(".radial-menu-right")
			.find('.menu-item-sc')
			.css({'transform': 'none',
				  'display': 'none'});
				  
		$(".radial-menu-right")
			.find('.menu-item-rc')
			.css({'transform': 'none',
				  'display': 'none'});
				  
		$(".radial-menu-right")
			.find('.menu-item-lc')
			.css({'transform': 'none',
				  'display': 'none'});
				  
		$(".radial-menu-right")
			.find('.menu-item-tc')
			.css({'transform': 'none',
				  'display': 'none'});

		//enable mask left 
		$(".radial-menu-left")				  
			.find('.menu-item-csp')
			.css({'transform': 'translate(120px, -38px)',
				  'display': 'inline'});
				  
		$(".radial-menu-left")
			.find('.menu-item-training')
			.css({'transform': 'translate(120px, 38px)',
				  'display': 'inline'});				  

	
	});
	

});