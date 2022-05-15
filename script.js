$(document).ready(function() {
	$('.main_mov').delay(2000).hide(10, '', setTimeout(function(){$('body').removeClass('in')}, 2000));
	
	$('#fullpage').fullpage({
		anchors: ['home', 'skill', 'project'],
		autoScrolling:true,
		scrollHorizontally: true
	});

	$('.skill-box .list li div').hover(function(){
		//마우스를 올렸을때
		t = $(this).parent('li');
		if (t.hasClass('active')) {
			t.removeClass('active');
		}else {
			$(".skill-box .list li").removeClass('active');
			t.addClass('active');
			t.find('span.counter').counterUp({
				delay: 10,
				time: 1000
			});	
		}
	}, function(){
		$(".skill-box .list li").removeClass('active');
	});

	var idx_lgth = $(".slider-box>.items>div").length;
	var srt = 1;
	
	$("#control>a").click(function(){
		var idx = $(this).index();
		srt = idx;
		$(this).addClass('on').siblings().removeClass('on');
		$("#visual>div").eq(idx).addClass('on').siblings().removeClass('on');
	});
	
	setInterval(AutoRun, 3000);
		
	function AutoRun(){
		if(srt == idx_lgth){
				srt = 0;	
		}
		$("#control>a").eq(srt).addClass('on').siblings().removeClass('on');
		$(".slider-box>.items>div").eq(srt).addClass('on').siblings().removeClass('on');
		srt++;	
	}
});
