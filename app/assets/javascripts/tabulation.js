$(document).ready(function(){
	let tabulation = $(".tab");
	tabulation.hide();
	tabulation.eq(0).show();

	$('ul.tab-links li a').click(function(e){
		e.preventDefault();
		let a = $(this).attr('href');
		tabulation.hide();
		$('div.tab-content div'+a).show();
	});

});
