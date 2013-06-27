(function(){
  $('section .hashtags').each(function(){
    var tags = $(this).children();
    tags.each(function(i, el){
      var tag       = el,
          color     = LightenDarkenColor('#ff6644', ((i+1) * 25));

      if(i > 0) {
        $(el).css({
          'border-right': '3px solid ' + color
        });
      }
    });

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

  function LightenDarkenColor(col, amt) {
      var usePound = false;
      if (col[0] == "#") {
          col = col.slice(1);
          usePound = true;
      }
      var num = parseInt(col,16);
      var r = (num >> 16) + amt;
      if (r > 255) r = 255;
      else if  (r < 0) r = 0;
      var b = ((num >> 8) & 0x00FF) + amt;
      if (b > 255) b = 255;
      else if  (b < 0) b = 0;
      var g = (num & 0x0000FF) + amt;
      if (g > 255) g = 255;
      else if (g < 0) g = 0;
      return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  }
})();
