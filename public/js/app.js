(function(){
  $('section .hashtags').each(function(){
    var tags = $(this).children();
    console.log(tags);
    tags.hover(function(){
      tags.css({
        opacity: 1
      });
    },function(){
      tags.not(':eq(0)').css({
        opacity: 0
      });
    });
  });
})();
