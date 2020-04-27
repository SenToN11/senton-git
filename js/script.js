$(document).ready(function () {
  $('.main-header__burger').click(function (event) {
    $('.main-header__burger,.main-header__list').toggleClass('active');
  })

  var mySwiper = new Swiper('.swiper-container', {
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

  $('.section__button--second, .button-first__size').click(function (event) {
    $('.modal').show('.active');
    $('.modal__option--mail').css('display', 'none');
    $('.modal__option--textarea').css('display', 'flex');
    $('.modal-overlay').css('display', 'block');
  })

  $('.message__button, .details__button, .social__button').click(function (event) {
    $('.modal__option--mail').css('display', 'flex');
    $('.modal__option--textarea').css('display', 'none');
    $('.modal--call').show('.active');
    $('.modal-overlay').css('display', 'block');
  })

  // $('.modal__submit').click(function (event) {
  //   event.preventDefault(event);
  //   $('.modal').hide('.active');
  // })

  $('.modal__remove').click(function (event) {
    event.preventDefault(event);
    $('.modal').hide('.active');
  })

  $('.modal__close').click(function (event) {
    event.preventDefault(event);
    $('.modal').hide('.active');
  })



})

$(function poppupOff($) {
  $(document).mouseup(function (e) {
    var poppup = $(".modal");
    if (!poppup.is(e.target)
      && poppup.has(e.target).length === 0) {
      poppup.hide();
    }
    $('.modal-overlay').hide();
  });
});

$(function () {

  $('.main-header__item--1').on('click', function (e) {
    $('html,body').stop().animate({ scrollTop: $('#my-works').offset().top }, 1000);
    e.preventDefault();
  });

});

$(function () {

  $('.main-header__item--2').on('click', function (e) {
    $('html,body').stop().animate({ scrollTop: $('#portfolio').offset().top }, 1000);
    e.preventDefault();
  });

});

$(function () {

  $('.main-header__item--3').on('click', function (e) {
    $('html,body').stop().animate({ scrollTop: $('#banner').offset().top }, 1000);
    e.preventDefault();
  });

});

$(function () {
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
      e.preventDefault();
    e.returnValue = false;
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  function disableScroll() {
    if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);

    console.log('modernizr', Modernizr.passiveeventlisteners);

    window.addEventListener('wheel', preventDefault,
      Modernizr.passiveeventlisteners ? { passive: false } : false); // modern standard
    document.addEventListener('mousewheel', preventDefault,
      Modernizr.passiveeventlisteners ? { passive: false } : false); // older browsers, IE
    window.addEventListener('mousewheel', preventDefault,
      Modernizr.passiveeventlisteners ? { passive: false } : false); // older browsers, IE
    window.addEventListener('touchmove', preventDefault,
      Modernizr.passiveeventlisteners ? { passive: false } : false); // mobile
    document.onkeydown = preventDefaultForScrollKeys;
  }

  function enableScroll() {
    if (window.removeEventListener)
      window.removeEventListener('DOMMouseScroll', preventDefault, false);
    document.removeEventListener('mousewheel', preventDefault, false);
    window.removeEventListener('mousewheel', preventDefault, false);
    window.removeEventListener('wheel', preventDefault, false);
    window.removeEventListener('touchmove', preventDefault, false);
    document.onkeydown = null;
  }

  $('.section__button--second, .button-first__size, .message__button, .details__button, .social__button').click(disableScroll);
  $('.modal__submit, .modal__remove, .modal__close, .modal-overlay').click(enableScroll);
});




