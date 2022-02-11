$(document).ready(function () {

  jQuery("a.scrollTo").click(function (event) {
    event.preventDefault()
    let elementClick = jQuery(this).attr("href");
    let destination = jQuery(elementClick).offset().top - 90;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 400);
    return false;
  });


  $(".shapeslider__slider").slick({
    // normal options...
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    dots: false,
    // the magic
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,

        }
      },
      
    ]
  });

  $(".slider-left").click(function (e) {
    $(this).parent().parent().find(".slick-slider").slick("slickNext");
  });
  $(".slider-right").click(function (e) {
    $(this).parent().parent().find(".slick-slider").slick("slickPrev");
  });


  $('.mobilemenu').on('click', function() {
    $('.mainblock__nav_mobile').slideToggle()
  })

})