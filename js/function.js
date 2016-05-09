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
      if($(window).height() < 1200){
        $(this).css({
          'transform' : 'rotateX(' + wScroll / 1.2 + 'deg)',
          // 'transform' : 'translateY(' + -5 + 'vh)'
        });
      }
      if($(window).height() < 780){
        $(this).css({
          'transform' : 'rotateX(' + wScroll / 1.2 + 'deg)',
          // 'transform' : 'translateY(' + -5 + 'vh)'
        });
      } else {
        $(this).css({
          'transform' : 'rotateX(' + (wScroll / 2) + 'deg)'
          // 'transform' : 'translateY(' + 5 + 'vh)'
        });
      } console.log(wScroll / 1.2);
      // console.log(wScroll);
    });
  });
});
