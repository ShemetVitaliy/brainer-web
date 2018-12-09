$(document).ready(function() {
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
});