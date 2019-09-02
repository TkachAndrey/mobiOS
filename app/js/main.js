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


  // /////////////////////////////////////
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
    $(".mm").toggleClass("mm__visible");
  });

  // /////////////////////////////////
  $( ".mm__panel" ).accordion({
    collapsible: true,
    heightStyle: "content"
  });
  // ///////////////////////////////////
  $(".mm__link_products").on("click", function () {
    $(".mm__block").toggleClass("mm__visible");
  });
  // ////////////////////////////////////
  $(".mm__btn").on("click", function () {
    $(".mm__block").toggleClass("mm__visible");
  });
  // /////////////////////////
  let show = true;
    let countbox = ".about__group";
    $(window).on("scroll load resize", function () {
        if (!show) return false;
        let w_top = $(window).scrollTop();
        let e_top = $(countbox).offset().top;
        let w_height = $(window).height();
        let d_height = $(document).height();
        let e_height = $(countbox).outerHeight();
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.about__group-item').css('opacity', '1');
            $('.about__group-item').spincrement({
                thousandSeparator: "",
                duration: 3500
            });
            show = false;
        }
    });
});