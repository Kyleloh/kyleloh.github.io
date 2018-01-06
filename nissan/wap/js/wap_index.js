// 图集轮播
var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
});

// 初始化隐藏其余图集, 只显示第一个
$(".atlas .focus-slide").hide().eq(0).show();

// 弹窗关闭按钮
$(".popover .close").click(function(){
    $(".popover").hide();
});

// 内容弹窗
$(".content a.detail").click(function(){
    $(".pov01").show();
})

$(".tab .tabSelect").click(function(){
    $(".pov02").show();
});

$(".carType .choice a").click(function(){
    $(".carType .choice a").removeClass("active");
    $(this).addClass("active");
    $(".atlas .focus-slide").hide().eq($(this).index()).show();
    $(".tab h3").text($(this).text());
    $(".popover").hide();
});

$(".zoneTab a").click(function(){
    $(".zoneTab a").removeClass("active");
    $(this).addClass("active");
    $(".zoneInfo .zoneTable").hide().eq($(this).index()).show();
});