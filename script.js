$(document).ready(function() {
	$('.main_mov').delay(2000).hide(10, '', setTimeout(function(){$('body').removeClass('in')}, 2000));
	
	$('#fullpage').fullpage({
		anchors: ['home', 'skill'],
		autoScrolling:true,
		scrollHorizontally: true
	});
});