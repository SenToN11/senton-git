$(document).ready(function(){
    $('.main-header__burger').click(function(event){
        $('.main-header__burger,.main-header__list').toggleClass('active');
    })

    var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    slidesPerView: 1,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },

      breakpoints: {

        768: {
            slidesPerView: 2,
            spaceBetween: 30,
            height: 400,
            width: 1000

        },

        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        },

    }


    })
})
