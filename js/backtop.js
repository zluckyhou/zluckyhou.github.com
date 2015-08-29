
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js"></script>

<script>

$(document).ready(function(){ // hide #back-top first

$("#back-top").hide(); // fade in #back-top

$(function () { $(window).scroll(function () {

if ($(this).scrollTop() > 100) { $('#back-top').fadeIn();

}

else { $('#back-top').fadeOut(); } });

// scroll body to 0px on click

$('#back-top a').click(function () {

$('body,html').animate({

scrollTop: 0

}, 800);

return false;

});

});

});

</script>