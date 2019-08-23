$(function(){
  $('.header__link_products').mouseenter(function () {
    $('.header__dropdown').css('display', 'flex');
  });
  $('.header__link_products', '.header__dropdown').mouseout(function () {
    $('.header__dropdown').css('display', 'none');
});
 
});