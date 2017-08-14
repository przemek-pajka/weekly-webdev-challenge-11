(function() {
      
    var n = {
        origin: "bottom",
        viewFactor: .65,
        duration: 1100,
        distance: "20px",
        scale: .8,
        reset: !0
    };
    
window.sr = new ScrollReveal(n), sr.reveal("#header .headbox"), sr.reveal(".about__section .container"),sr.reveal(".destination__section .places__wrapper__row"),sr.reveal(".destination__section .places__wrapper__image");

    $('.toggle-menu').jPushMenu();
  $('.hamburger').click(function() {
    $(this).toggleClass('is-active');
    $('body').toggleClass('overflow-hidden');
  });

    $(window).click(function() {
        if($('.hamburger').hasClass('is-active')) {
            $('.hamburger').removeClass('is-active');
            $('body').removeClass('overflow-hidden');
        }
    });

    // sticky function 
var stickyNavTop = $('.top-wrapper').offset().top;
 
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
      
if (scrollTop > stickyNavTop) { 
    $('.top-wrapper').addClass('fixed');
} else {
    $('.top-wrapper').removeClass('fixed'); 
}
};
 
stickyNav();
 
$(window).scroll(function() {
  stickyNav();
});

 // Select all links with hashes // SMOOTH SCROLLING SCRIPT
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
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
  })
})();
