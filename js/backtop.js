$("#back-top").hide();
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
      $('#back-top').fadeIn(1500);
    } else {
      $('#back-top').fadeOut(1000);
    }
  });
  $('#back-top a').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 2500);
    return false;
  });
});