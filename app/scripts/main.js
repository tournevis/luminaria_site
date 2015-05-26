$( document ).ready(function() {
	$('#arrow').click(function(){
		$.fn.fullpage.moveSectionDown();
	});

	$('#fullpage').fullpage({
		navigation: true,
	        onLeave: function(index, nextIndex, direction){
	            var leavingSection = $(this);

	            //after leaving section 2
	            if(index ==1 && direction =='down'){
	            	//console.log('black now');
	               $( ".blackoverlay" ).animate({
					    opacity: 0.4,
					}, 500);
	            }

	            else if(index == 2 && direction == 'up'){
	                $( ".blackoverlay" ).animate({
					    opacity: 0,
					}, 500);
	            }
	        }
	    });
});