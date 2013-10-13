(function(){
  /*************Menu Actions************/
  var button = $('.menu-button'),
    wrapper = $('.menu-wrapper'),
    header = $('header');

  $(document).on('click', function(e){
    wrapper.removeClass('opened-nav');
  });

  var handler = function(e){
    if(e){
      e.stopPropagation();
    } else {
      window.event.cancelBubble = true;
    }
    wrapper.toggleClass('opened-nav');
  };

  button.on('click', handler);
  button.on('focus', handler);

  //Header management
  header.waypoint('sticky', {
    stuckClass: 'fixed',
    offset: -50
  });

})();

