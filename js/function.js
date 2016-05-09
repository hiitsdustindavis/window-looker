$(document).ready(function(){
  $('.blind').each(function(i){
    $(this).css({
    'top' : 5 *(i+1) + 'vh',
    'z-index' : -i
  });
  });
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    $('.blind').each(function(i){
      if(wScroll < $(window).height() * 0.11){
        $(this).css({
          'transform' : 'rotateX(' + wScroll + 'deg)'
        });
      }
      console.log(wScroll);
    });
  });
});
