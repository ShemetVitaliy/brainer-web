$(document).ready(function() {
  // swing scroll
  $("a.swingLink").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 500,
      easing: 'swing'
    });
    return false;
  });
  // fixed header
  let header = $('.header');
  let modalHeader = $('.banner-popup__header');

  $(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
      header.addClass('fixed-header');
      header.parent().addClass('pt40');
    }
    else if ($(window).scrollTop() === 0) {
      $('.header').removeClass('fixed-header');
      header.parent().removeClass('pt40');
    }
  });
  $(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
      modalHeader.addClass('fixed-header');
      modalHeader.parent().addClass('pt40');
    }
    else if ($(window).scrollTop() === 0) {
      $('.banner-popup__header').removeClass('fixed-header');
      modalHeader.parent().removeClass('pt40');
    }
  });
});