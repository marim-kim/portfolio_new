$(document).ready(function(){
    
     //2차메뉴 코드
    $('.submenu').hide();
    
    $('.gnb>li.li1').mouseenter(function(){
       $('.submenu').stop().slideDown(); 
    });
    
    $('.gnb>li.li1').mouseleave(function(){
       $('.submenu').stop().slideUp(); 
    });
    
    
    //메인비주얼 슬라이드 배너
    var slider = $('.mv').bxSlider({
	auto: true,
    mode: 'fade'
    });
    
    //쇼룸 이미지 스크롤 배너
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 10,
      loop: true, 
      pagination: {
        el: '.swiper-scrollbar',
        clickable: true,
      },
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
    
    
    //모바일메뉴
    $(".m_menu").click(function(){
       $(".mgnb_wrap").animate({
          left: '50%'
       }); 
    });
    
    $(".close").click(function(){
       $(".mgnb_wrap").animate({
          left: '100%'
       }); 
    });
    
     //모바일 2차메뉴 코드
    $('.mgnb_sm').hide();
    
    $('.mgnb>li.li1').mouseenter(function(){
       $('.mgnb_sm').stop().slideDown(); 
    });
    
    $('.mgnb>li.li1').mouseleave(function(){
       $('.mgnb_sm').stop().slideUp(); 
    });
    
});