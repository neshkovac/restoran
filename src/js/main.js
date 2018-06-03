// prvo promenjive dohvatamo pa tek onda radimo funkcije.
var $html = $('html, body');
var $bttButton = $('#back-to-top');
var $topOfThePage = $('#Home');
var $navbar = $('#navbar-fixed-top');

// onda funkcije
function animateScroll() {
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $html.animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                });
            }
        }
    });
}

// When the user clicks on the button, scroll to the top of the document
function backToTopOnClick() {
    $bttButton.on('click', function() {
        $html.animate({
            scrollTop: $topOfThePage.offset().top
        }, 1000);
    });
}


function onScroll() {
    var scrolled = document.body.scrollTop;
    /* Navbar JS */
    if (window.matchMedia("(max-width: 1000px)").matches) {
        if (scrolled >= 20) {
            $navbar.addClass('navbar-bg-orange');
        } else {
            $navbar.removeClass('navbar-bg-orange');
        }
    } else {
        if (scrolled >= 200) {
            $navbar.addClass('navbar-bg-orange');
        } else {
            $navbar.removeClass('navbar-bg-orange');
        }
    }

    if (scrolled > 230 || scrolled > 230) {
        $bttButton.addClass('opacity-btn')
    } else {
        $bttButton.removeClass('opacity-btn');
    }
}



// na kraju eventove....
// ready znaci da je dokument ucitaj i spreman za script



window.addEventListener('load', function () {
    backToTopOnClick();
    animateScroll();
});

window.addEventListener('scroll', function() {
    onScroll();
});


// Active links JS

$(function() {
    $('li a').click(function(e) {
        e.preventDefault();
        var $this = $(this);
        $this.closest('ul').find('.active').removeClass('active');
        $this.parent().addClass('active');

    });
});
