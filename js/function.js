$(document).ready(function(){
  $('.blind').each(function(i){
    $(this).css({
      'top' : 5 *(i+1) + 'vh',
      'z-index' : -i
    });
  });
  // var $blindHeight = $('.blind').height();
  $(window).scroll(function(){
    //Generally, what is happening here is on every scroll this whole function is firing. First it checks to see if wScroll < 187. If it is, it will alter the transform:rotate property of the .blind <div>. Otherwise if wScroll is > 187 it will stop altering the transform:rotate property move on to the next elseif branch (explained below).
    var wScroll = $(this).scrollTop();

    $('.blind').each(function(){
      if(wScroll < ($('.blind').height() - 3) && wScroll > 0) {
        $(this).css({
          'transform' : 'scaleY('+ (1-wScroll/$(this).height()) +')'
        });
        // console.log((1-wScroll/$(this).height()));


      //Else if below = div with class "bottom-bar" has position "fixed" execute contents.
    } else if(wScroll > $('.blind').height()) {
      $('.blinds-parent').css({
        "height" : (($(window).height()*0.9) - wScroll)
      });
    } else if($('.bottom-bar').css("position") === "fixed") {

        $('.bottom-bar').css({
          "position" : "relative",
          "top" : ($('.blinds-parent').height())
        });
      }
      console.log("blind " + $('.blind').height());
      console.log("parent " + $('.blinds-parent').height());
    });
  });
});
