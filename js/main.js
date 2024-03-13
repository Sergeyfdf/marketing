$(function(){
    var mixer = mixitup(".portfolio__content");

    $('.slider__inner').slick({
        dots: true,
        infinite: true,
        speed: 300,
        prevArrow:'<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow"></button>'
      });
})


  