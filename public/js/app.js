var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-3655066-3']);
_gaq.push(['_trackPageview']);

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
        } else if(sy) {

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

    // let's get our analytics on!
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);

})();

