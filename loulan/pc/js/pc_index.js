// 去到预约的地方
$(".toBook").click(function(){
    $('body,html').animate({scrollTop:$(".formArea").offset().top-60},500);
});

// tab切换
$('.tab .item').click(function(){
    showPart($(this).index());
});

// 表单radio选项样式展示
setInterval(function(){
    $(".formArea .radioArea label").each(function(){
        if($(this).find("input[type=radio]").eq(0).prop("checked")){
            $(this).removeClass('checked').addClass('checked');
        }else{
            $(this).removeClass('checked');
        }
    });
},100);

function slideInit(num){
    var mySwiper = new Swiper ('#focus-item-'+num+' .swiper-container', {
        loop: true,
        // 如果需要前进后退按钮
        nextButton: '#focus-item-'+num+' .swiper-button-next',
        prevButton: '#focus-item-'+num+' .swiper-button-prev',
        onSlideChangeEnd: function(swiper){
            $('#focus-item-'+num+' .focus-text .item').removeClass("active").eq(swiper.realIndex).addClass("active");
        }
    });
}

function showPart(num){
    $(".tab .item").removeClass("active").eq(num).addClass("active");
    $(".focus-atlas .focus-item").removeClass("active").eq(num).addClass("active");
}

slideInit(0);
slideInit(1);
slideInit(2);
slideInit(3);

showPart(0);