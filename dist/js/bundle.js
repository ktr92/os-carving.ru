/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};$(document).ready((function(){jQuery("a.scrollTo").click((function(e){e.preventDefault();let t=jQuery(this).attr("href"),i=jQuery(t).offset().top-90;return jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop:i},400),!1})),$(".shapeslider__slider").slick({infinite:!0,slidesToShow:4,slidesToScroll:1,arrows:!1,centerMode:!1,dots:!1,responsive:[{breakpoint:992,settings:{slidesToShow:4}},{breakpoint:767,settings:{slidesToShow:3}},{breakpoint:600,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]}),$(".slider-left").click((function(e){$(this).parent().parent().find(".slick-slider").slick("slickNext")})),$(".slider-right").click((function(e){$(this).parent().parent().find(".slick-slider").slick("slickPrev")}))})),(()=>{"use strict";e.r(t)})()})();
//# sourceMappingURL=bundle.js.map