$(document).ready(function(){
	let tabulation = $(".tab");
	tabulation.hide();
	tabulation.eq(0).show();

	$('ul.tab-links li a').click(function(e){
		e.preventDefault();
		$('ul.tab-links li a').removeClass('active');
		let a = $(this).attr('href');
		tabulation.hide();
		$('div.tab-content div'+a).fadeIn(1000);
		$(this).addClass("active");
	});

	$('#avatar-image').click(function(e){

	});
});
