var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',onSlideChangeEnd: function(swiper){
      slideTo((swiper.activeIndex-1)%4, false);
    }
  })        

$('.tab .item').click(function(){
    slideTo($(this).index(), true);
});

function slideTo(num, needScroll) {
    $(".tab .item").removeClass("active").eq(num).addClass("active");
    $(".focus-text .item").removeClass("active").eq(num).addClass("active");
    if(needScroll){
        mySwiper.slideTo(num+1);
    }
}


setInterval(function(){
    $(".formArea .radioArea label").each(function(){
        if($(this).find("input[type=radio]").eq(0).prop("checked")){
            $(this).removeClass('checked').addClass('checked');
        }else{
            $(this).removeClass('checked');
        }
    });
},100);
