// 图集轮播
var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
});


// 初始化隐藏其余图集, 只显示第一个
$(".atlas .focus-slide").hide().eq(0).show();

$(".tuji .tab a").click(function(){
    $(".tuji .tab a").removeClass('active');
    $(this).addClass('active'); 
    $(".atlas .focus-slide").hide().eq($(this).index()).show();
});