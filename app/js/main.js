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
    focusOnSelect: true
  });
  // ///////////////////////////////
  // $(".form__needs-list_products").chosen({
  //   placeholder_text_multiple: "Select an Option"
  // });

  // //////////////////////////////
  $('#FCA').on('change', function() {
    $('#portName').attr("placeholder", "Port name").removeAttr("disabled");
  });
  $('#DAP').on('change', function() {
    $('#portName').attr("placeholder", "Port name").removeAttr("disabled");
  });
  $('#FOB').on('change', function() {
    $('#portName').attr("placeholder", "Delivery place").removeAttr("disabled");
  });
  $('#CFR').on('change', function() {
    $('#portName').attr("placeholder", "Delivery place").removeAttr("disabled");
  });


});