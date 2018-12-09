$(document).ready(function() {
  $(document).keyup(function(e) {
    if (e.key === "Escape") {
      $('.popup').removeClass('show');
      $('#root').removeClass('hide');
    }
  });
  $('.icon-close').click(function () {
    $('.popup').removeClass('show');
    $('#root').removeClass('hide');
  });

  let testPopupClick = $('.testPopupClick');
  testPopupClick.click(function () {
    $('#root').addClass('hide');
    $('.popup').removeClass('show');
    $('#bubnovskyPopup').addClass('show');
  });
});
