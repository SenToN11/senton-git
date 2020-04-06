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

    $('.section__button--second, .button-first__size').click(function(event){
      $('.modal').show('.active');
      $('.modal__option--mail').css('display','none');
      $('.modal__option--textarea').css('display','flex');
    })

    $('.message__button, .details__button, .social__button').click(function(event){
      $('.modal__option--mail').css('display','flex');
      $('.modal__option--textarea').css('display','none');
      $('.modal--call').show('.active');
    })

    $('.modal__submit').click(function(event){
      event.preventDefault(event);
      $('.modal').hide('.active');
    })

    $('.modal__remove').click(function(event){
      event.preventDefault(event);
      $('.modal').hide('.active');
    })
})

$(function($){
	$(document).mouseup(function (e){ 
		var poppup = $(".modal"); 
		if (!poppup.is(e.target) 
		    && poppup.has(e.target).length === 0) { 
			poppup.hide(); 
		}
	});
});

