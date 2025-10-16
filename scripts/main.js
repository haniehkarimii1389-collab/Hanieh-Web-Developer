// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
// scripts/main.js
document.addEventListener('DOMContentLoaded', function () {
  // init AOS (اگر لود شده)
  if (window.AOS) {
    AOS.init({
      duration: 800,
      once: true
    });
  }

  // tooltip (اگر jQuery/Bootstrap لود شده)
  if (window.jQuery) {
    $(function () {
      $('[rel="tooltip"]').tooltip();
    });
  }

  // تست: اگر خواستی عناصر data-aos رو فوراً نشان بده (موقتی)
  // document.querySelectorAll('[data-aos]').forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
});

