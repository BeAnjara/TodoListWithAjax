$(document).ready(function(){
	
	$('#avatar-image').click(function(e){
		e.preventDefault();
		 	$('.dropdown-menu').fadeToggle(1000);
	});

	$('body').click(function(e){
		if ($(e.target).attr('id') !== 'avatar-image'){
		 	$('.dropdown-menu').hide();
		}
	});

});