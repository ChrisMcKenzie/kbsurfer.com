(function() {
 
    var docElem = document.documentElement,
        header = document.querySelector( 'header' ),
        overlay = document.querySelector('.overlay'),
        background = document.querySelector('.background'),
        title = document.querySelector('.title'),
        didScroll = false,
        changeHeaderOn = 200;
 
    var init = function() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 50 );
            }
        }, false );
    };
 
    function scrollPage() {
        var sy = scrollY();
        //console.log(sy);
        if ( sy >= changeHeaderOn ) {
      		console.log('change header');
          classie.add( header, 'fixed' );
        }
        else {
        	console.log('No change to header');
          classie.remove( header, 'fixed' );
        }
        didScroll = false;
    }
 
    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }
 
    init();
 
})();

