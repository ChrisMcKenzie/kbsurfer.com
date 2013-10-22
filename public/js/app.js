(function() {
 
    var docElem = document.documentElement,
        header = document.querySelector( 'header' ),
<<<<<<< HEAD
        overlay = document.querySelector('.overlay'),
        background = document.querySelector('.background'),
        title = document.querySelector('.title'),
        ticking = false,
=======
        didScroll = false,
>>>>>>> 09b8bf63bb12b974e9fc62ea07a2aa0557625a22
        changeHeaderOn = 250;

    var onScroll = function() {
            update();
            requestTick();
    }
 
<<<<<<< HEAD
    var update = function() {
        ticking = false;
        var sy = window.pageYOffset || docElem.scrollTop;
        //console.log(sy);
        if ( sy >= changeHeaderOn ) {
            classie.add( header, 'fixed' );
        }
        else {
            classie.remove( header, 'fixed' );
=======
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
>>>>>>> 09b8bf63bb12b974e9fc62ea07a2aa0557625a22
        }
    }

    var requestTick = function() {
        if(!ticking) {
            requestAnimationFrame(update);
        }
        ticking = true;
    }
 
    window.addEventListener( 'scroll', onScroll, false );
 
})();

