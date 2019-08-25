$(function(){

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true, 
    dots: true,
    asNavFor: '.work__steps',
    customPaging : function() {
      return '<button class="slider__dots-item"></button>';
    }
  });

  $('.work__steps').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider',
    // fade: true, 
    // dots: true,
    // centerMode: true,
    focusOnSelect: true
    // customPaging : function(slider, i) {
    //   var thumb = $(slider.$slides[i]).data('image');
    //   return '<a href="#"><img src="'+thumb+'"></a>';
    // }
  });

});