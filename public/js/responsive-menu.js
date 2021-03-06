$(document).ready(function () {
    $('.menu-trigger').click(function () {
        $('ul').toggleClass('active')
    })
    $('.menu-trigger').click(function () {
        $('body').toggleClass('no-scroll')
    })
})

$(document).ready(function(){
    // Add smooth scrolling to all links
    $(".page-link").on('click', function(event) {

      $('ul').toggleClass('active')
      $('body').removeClass('no-scroll')
      
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 70
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash - 70;
        });
      } // End if
    });
  });