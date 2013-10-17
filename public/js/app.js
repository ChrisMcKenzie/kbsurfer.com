(function() {
 
    var docElem = document.documentElement,
        header = document.querySelector( 'header' ),
        didScroll = false,
        changeHeaderOn = 250;
 
    var init = function() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                scrollPage();
            }
        }, false );
    };
 
    function scrollPage() {
        if ( scrollY() >= changeHeaderOn ) {
          classie.add( header, 'fixed' );
        }
        else {
          classie.remove( header, 'fixed' );
        }
        didScroll = false;
    }
 
    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }
 
    init();
 
})();

