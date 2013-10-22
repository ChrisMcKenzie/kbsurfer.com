(function() {
 
    var docElem = document.documentElement,
        header = document.querySelector( 'header' ),
        overlay = document.querySelector('.overlay'),
        background = document.querySelector('.background'),
        title = document.querySelector('.title'),
        ticking = false,
        changeHeaderOn = 250;

    var onScroll = function() {
            update();
            requestTick();
    }

    var update = function() {
        ticking = false;
        var sy = window.pageYOffset || docElem.scrollTop;
        //console.log(sy);
        if ( sy >= changeHeaderOn ) {
            classie.add( header, 'fixed' );
        }
        else {
            classie.remove( header, 'fixed' );
    }

    var requestTick = function() {
        if(!ticking) {
            requestAnimationFrame(update);
        }
        ticking = true;
    }
 
    window.addEventListener( 'scroll', onScroll, false );
 
})();

