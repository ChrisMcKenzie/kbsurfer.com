(function(){
  /*************Menu Actions************/
  var button = $('.menu-button'),
    wrapper = $('.menu-wrapper'),
    header = $('header');

  //Header management
  header.waypoint('sticky', {
    stuckClass: 'fixed',
    offset: -50
  });

})();

