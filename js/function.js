$(document).ready(function(){
  // var blindHeight = $(window).height() / 40;
  // console.log(blindHeight + "sup");
  $('.blind').each(function(i){
    $(this).css({
    'top' : 5 *(i+1) + 'vh',
    'z-index' : -i
  });
  });
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    $('.blind').each(function(i){
      if(wScroll < 80){
        $(this).css({
          'transform' : 'rotateX(' + wScroll + 'deg)'
        });
      }
      console.log(wScroll);
    });
  });
});
