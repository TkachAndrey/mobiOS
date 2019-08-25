$(function(){

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: true,
    customPaging: function(slider, i) {
      return "";
      // <a href="#!" class="slider__dots-item"></a>
    },
    asNavFor: '.work__steps'
  });
  $('.work__steps').slick({
    slidesToShow: 7,
    arrows: false,
    // slidesToScroll: 0,
    asNavFor: '.slider',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });

  $('.slider .slick-dots li').addClass('slider__dots-item'); //  Add class to "li"

});