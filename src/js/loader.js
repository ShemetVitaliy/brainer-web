$(document).ready(function () {
  window.domLoadEventFired = true;
  if (typeof window.domLoadEventFired !== undefined) {
    setTimeout(function () {
      $('body').removeClass('fixed');
      $('.load-container').addClass('hide-loader');
    }, 1000);
  clearInterval()
  }
});