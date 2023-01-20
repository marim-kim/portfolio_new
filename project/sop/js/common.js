$(document).ready(function(){
    
    //맨 위로 가기 버튼 코드
    $(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$("#gotop").fadeIn();
	} else {
		$("#gotop").fadeOut();
	}
    });

    $("#gotop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
    
    //스크롤트리거
    $(window).scroll(function () {
        $('.ani_stop').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).removeClass('ani_stop');
            }
            if (bottom_of_window < bottom_of_object) {
                $(this).addClass('ani_stop');
            }
        });
    });
    
    //2차메뉴 코드
    $('.dp2,.dp2_bg').hide();
    
    $('.gnb>li').mouseenter(function(){
       $('.dp2,.dp2_bg').stop().slideDown(); 
    });
    
    $('.gnb>li').mouseleave(function(){
       $('.dp2,.dp2_bg').stop().slideUp(); 
    });
   
    //메인비주얼 슬라이드 배너
    var slider = $('.mv').bxSlider({
	auto: true
    });
    
    //가이드 슬라이드 배너
    var slider = $('.bn').bxSlider({
	auto: true
    });
    
    
});