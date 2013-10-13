(function(){
 
  var button = document.getElementById('logo'),
    wrapper = document.getElementById('cn-wrapper');
 
    //open and close menu when the button is clicked
  var open = false;
  button.addEventListener('click', handler, false);
  button.addEventListener('focus', handler, false);

  // For clicks elsewhere on the page
  document.onclick = function() {
      classie.remove(wrapper, 'opened-nav');
  };
 
  function handler(e) {
    if (e) { 
      e.stopPropagation(); 
    } else { 
      window.event.cancelBubble = true; 
    }

    if(!open) {
      classie.add(wrapper, 'opened-nav');
    } else { 
      classie.remove(wrapper, 'opened-nav');
    }
    open = !open;
  }

  function closeWrapper() {
    classie.remove(wrapper, 'opened-nav');
  }
 
})();