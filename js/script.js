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
      $('.modal-overlay').css('display','block');
    })

    $('.message__button, .details__button, .social__button').click(function(event){
      $('.modal__option--mail').css('display','flex');
      $('.modal__option--textarea').css('display','none');
      $('.modal--call').show('.active');
      $('.modal-overlay').css('display','block');
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
    $('.modal-overlay').hide();
	});
});

$(function(){

  $('.main-header__item--1').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#my-works').offset().top }, 1000);
    e.preventDefault();
  });
  
  });

  $(function(){

    $('.main-header__item--2').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#portfolio').offset().top }, 1000);
      e.preventDefault();
    });
    
    });

    $(function(){

      $('.main-header__item--3').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#banner').offset().top }, 1000);
        e.preventDefault();
      });
      
      });


