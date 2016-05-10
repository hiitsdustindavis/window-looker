$(document).ready(function(){
  $('.blind').each(function(i){
    $(this).css({
    'top' : 5 *(i+1) + 'vh',
    'z-index' : -i
  });
  });
  $(window).scroll(function(){
    //Generally, what is happening here is on every scroll this whole function is firing. First it checks to see if wScroll < 187. If it is, it will alter the transform:rotate property of the .blind <div>. Otherwise if wScroll is > 187 it will stop altering the transform:rotate property move on to the next elseif branch (explained below).
    var wScroll = $(this).scrollTop();

    $('.blind').each(function(i){
      if(wScroll < 187) {
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

    //Else if below = div with class "bottom-bar" has position "fixed" execute contents.
  } else if($('.bottom-bar').css("position") === "fixed") {
    //Change "bottom-bar" div position to "relative" and it's top so that it stays in the same position. We are defining its position from the top of the body. To figure out that distance we add the amount of pixels scrolled (wScroll) to the whole height of the window ($(window).height())) and subtract the height of the bottom bar
      $('.bottom-bar').css({
        "position" : "relative",
        "top" : (wScroll + $(window).height()) + $('.bottom-bar').height()
      })
      // $('.bottom-bar').css({
      //   "bottom" : parseInt($('.bottom-bar').css("bottom")) + 1
      // });
    }

  });
});
});
