$(document).ready(function(){
  var $blind = $('.blind');
  $blind.each(function(i){
    $(this).css({
      'top' : 5 *(i+1) + 'vh',
      'z-index' : -i
    });
  });

  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    var $blindsParent = $('.blinds-parent');
    var $bottomBar = $('.bottom-bar');

    $blind.each(function(){
      if(wScroll < ($blind.height() - 3) && wScroll > 0) {
        $blind.css({
          'transform' : 'scaleY('+ (1-wScroll/$blind.height()) +')'
        });

      } else if(wScroll > $blind.height()) {
        $blindsParent.css({
          "height" : (($(window).height()*0.9) - wScroll)
        });

      } else if($bottomBar.offset().top >= $blindsParent.height()) {
        $bottomBar.css({
          "position" : "relative",
          "top" : ($blindsParent.height())
        });
//Else if below is not working. Still sorting out how to make blinds-parent stop reducing in height and bottom-bar stays fixed near top of implied window
      } else if(wScroll === $(window).height()*0.71979 && $bottomBar.css({"position" : "relative"})) {

        $bottomBar.css({
          "position" : "fixed",
          "top" : 560 + 'px'
        });
      }
    });
  });
});
