$(window).on('load', function () {
  $('#preloader .inner').fadeOut();
  $('#preloader').delay(300).fadeOut('slow'); 
  $('body').delay(3000).css({'overflow': 'visible'});
})