
$(function(){
  var section_height=$('.section-block').offset().top;
  $(window).scroll(function(){
    var this_scrollTop=$(this).scrollTop();
    if(this_scrollTop=section_height){
      $('.circle').addClass('animated wobble');
    }
  })
});

//$(function(){
//  setInterval(function(){
//    $('.circle').addClass('animated wobble');
//  },5000)
//});


$(function(){
  $('.flash').addClass('animated bounce')
});





