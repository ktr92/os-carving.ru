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

  $('input[type="tel"]').mask('+7 (999) 999-99-99')


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


  $('.mobilemenu').on('click', function () {
    $('.mainblock__nav_mobile').slideToggle()
  })


  /* открытие и закрытие модальных окон из js  */
  $('.js-modalcall--success').on('click', function () {
    $('#modal-callback').modal('hide')
    $('#modal-success').modal('show')
  })
  /*  */

  $('.productimg__images').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    dots: false,
    fade: true,
    asNavFor: '.productimg__previews',

  });

  $('.productimg__previews').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    dots: false,
    infinite: false,
    vertical: false,
    verticalSwiping: false,
    centerMode: false,
    arrows: true,
    nextArrow: '.productimg__arrow_right',
    prevArrow: '.productimg__arrow_left',
    asNavFor: '.productimg__images',
    responsive: [{
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ]

  });

  $(".productimg__preview").click(function (e) {
    e.preventDefault();
    actIndex = $(this).attr('data-slick-index');
    var slider = $('.productimg__images');
    slider[0].slick.slickGoTo(parseInt(actIndex));
  });



  $('.js-productslider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    dots: true,
    fade: false,
    nextArrow: $(this).find('.sliderarrow__right'),
    prevArrow: $(this).find('.sliderarrow__left'),
    responsive: [{
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },

    ]
  });


  /*  $(".productslider__right").click(function (e) {
		$(this).parent().parent().find(".slick-slider").slick("slickNext");
	});
	$(".productslider__left").click(function (e) {
		$(this).parent().parent().find(".slick-slider").slick("slickPrev");
	}); */

  $('.expand').on('click', function (e) {
    e.preventDefault()
    $(this).siblings('.el_hidden').removeClass('el_hidden')
    $(this).hide()
  })



  $(function () {

    $('.js-tabs-header ul').on('click', 'li:not(.active)', function () {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('.js-tabs').find('.js-tabs-contents').removeClass('active').eq($(this).index()).addClass('active');
    });

  });



})