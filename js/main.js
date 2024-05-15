$(function(){
  document.querySelector('.menu__btn').addEventListener('click', function(){
    $('.header__top-inner').toggleClass('header__top-inner--active');
  });
    var mixer = mixitup(".portfolio__content");

    $('.slider__inner').slick({
        dots: true,
        infinite: true,
        speed: 300,
        prevArrow:'<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow"></button>',
      });

      // $('.menu__btn').on('click', function(){
      //   $('.header__top-inner').toggleClass('header__top-inner--active');
      // });

      
                                                                 
      var mixer = mixitup(".portfolio__content");
});


  