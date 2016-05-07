$(document).ready(function(){
  var blindHeight = $('.blind').height() - 35;
  console.log(blindHeight + "sup");
  $('.blind').each(function(i){
    $(this).css({
    'top' : blindHeight *(i+1) + 'vh',
    'z-index' : -i
  });
  });
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    console.log(hey);
    $('.blind').each(function(i){
      $(this).css({
        'transform' : 'rotateX(' + wScroll + 'deg)'
      });
    });
  });
});
