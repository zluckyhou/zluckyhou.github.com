$("#back-top").hide();
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('#back-top').fadeIn(1500);
    } else {
      $('#back-top').fadeOut(1000);
    }
  });
  $('#back-top a').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
});