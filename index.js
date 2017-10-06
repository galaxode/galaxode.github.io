// Click handler for menu

  $('.menu-toggle').click(function() {
    $('.nav-menu').toggleClass('nav-menu--open', 500);
    $(this).toggleClass('open');
  })


// Smooth Scrolling

  // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't link to anything
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
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

