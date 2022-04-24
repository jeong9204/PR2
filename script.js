$(document).ready(function() {
	jQuery(".detail-cnt").click(function() {
    if($(this).hasClass("active")){
			$(".detail-cnt").removeClass("active");
		}else{
			$(".detail-cnt").addClass("active"); 
		}
	});

  jQuery(".tab-content").hide();
	jQuery(".nav>ul>li:first").addClass("active"); 	
	jQuery(".tab-content:first").show();

	jQuery(".nav>ul>li").click(function(e) {
		e.preventDefault();
		jQuery(".nav>ul>li").removeClass("active");
		jQuery(this).addClass("active");
		jQuery(".tab-content").hide();		

		var activeTab = jQuery(this).find("a").attr("href");
		jQuery(activeTab).show();
		return false;
	});

	//scroll btn
	$(window).load(function(){
		$(".visual-scroll a").click(function(event){
			var id = $(this).attr('href');
			var offset = $(id).offset().top;

			$('html, body').animate({
				scrollTop : offset//-$("#header").height()
			}, 1200, 'easeInOutCubic');

			event.preventDefault();
		});
	});
});