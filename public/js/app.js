(function() {
 
    var docElem = document.documentElement,
        header = document.querySelector( 'header' ),
        classList = header.classList,
        ticking = false,
        changeHeaderOn = 250; // Distance in pixel to scroll from top before displaying fixed header

    // Event Handler for Scrolling
    var onScroll = function() {
        update();
        requestTick();
    }

    // Scroll Logic
    var update = function() {
        ticking = false;
        // Get Yoffset otherwise set to top.
        var sy = window.pageYOffset || docElem.scrollTop;
        if(sy >= changeHeaderOn) {
            // Show fixed header
            classList.add('fixed');
        } else {
            // Remove fixed header.
            classList.remove('fixed');
        }
    }

    var requestTick = function() {
        // Standard request animationFrame with ticking.
        // This is the best way to do scroll handling w/o Jank.
        if(!ticking) {
            requestAnimationFrame(update);
        }
        ticking = true;
    }
 
    // And the kick-off!
    window.addEventListener( 'scroll', onScroll, false );
 
})();

