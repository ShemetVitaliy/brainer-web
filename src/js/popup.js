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

  let bubnovskyPopup = $('.bubnovskyPopup');
  bubnovskyPopup.click(function () {
    $('#root').addClass('hide');
    $('.popup').removeClass('show');
    $('#bubnovskyPopup').addClass('show');
  });

  let dataMonstersPopup = $('.dataMonstersPopup');
  dataMonstersPopup.click(function () {
    $('#root').addClass('hide');
    $('.popup').removeClass('show');
    $('#dataMonstersPopup').addClass('show');
  });

  let greenmPopup = $('.greenmPopup');
  greenmPopup.click(function () {
    $('#root').addClass('hide');
    $('.popup').removeClass('show');
    $('#greenmPopup').addClass('show');
  });

  let kittelsPopup = $('.kittelsPopup');
  kittelsPopup.click(function () {
    $('#root').addClass('hide');
    $('.popup').removeClass('show');
    $('#kittelsPopup').addClass('show');
  });
});
