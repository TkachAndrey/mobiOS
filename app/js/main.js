$(function () {
  // ////////////////////////////////////
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: true,
    asNavFor: '.work__steps',
    customPaging: function () {
      return '<button class="slider__dots-item"></button>';
    },
    mobileFirst: true,
    responsive: [{
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          fade: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          fade: true
        }
      }
    ]
  });

  $('.work__steps').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider',
    focusOnSelect: true
  });
  // ///////////////////////////////


  // //////////////////////////////
  $('#FCA').on('change', function () {
    $('#portName').attr("placeholder", "Port name").removeAttr("disabled");
  });
  $('#DAP').on('change', function () {
    $('#portName').attr("placeholder", "Port name").removeAttr("disabled");
  });
  $('#FOB').on('change', function () {
    $('#portName').attr("placeholder", "Delivery place").removeAttr("disabled");
  });
  $('#CFR').on('change', function () {
    $('#portName').attr("placeholder", "Delivery place").removeAttr("disabled");
  });
  // ////////////////////
  var $hamburger = $(".hamburger");
  $hamburger.on("click", function (e) {
    $hamburger.toggleClass("is-active");
  });
  ////////////////////////
  $(".hamburger").on("click", function () {
    $(".header__nav-mob").toggleClass("header__nav-mob_visible");
  });

});