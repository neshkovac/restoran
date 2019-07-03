var $html = $('html, body');
var $bttButton = $('#back-to-top');
var $topOfThePage = $('#Home');
var $navbar = $('#navbar-fixed-top');
var $navLinksArr = $('li.navbar-links').toArray();
var nameInput = document.querySelector('#name');
var partyInput = document.querySelector('#partyNumber');
var emailInput = document.querySelector('#email');
var dateInput = document.querySelector('#date');
var nameRegEx = /^[A-Z]\w+$/
var emailRegEx = /^\w(\w|\d)+\@\w+\.com$/
var dateRegEx = /^([0-9]{2}\/){2}[0-9]{4}$/
var partyRegEx = /^[A-Z]\d{2}$/
var bookNowButton = $('#bookNow');
var fancyBoxSrcs = document.getElementsByClassName('fancyBoxGallery');
var fancyBoxHrefs = document.getElementsByClassName('fancyBoxAnchor');
var itemDescriptionArray = document.getElementsByClassName('item-description');
var fancyBoxRow = document.querySelector('#fancyBoxRow');
var formInputsArray = $('.form-control');
var itemDescriptionValueArray = ["Refreshing traditional cucumber and garlic yoghurt dip.", "Pureed eggplant, garlic, green pepper and tomato dip.",
    "Panzenella is a Tuscan bread salad, ideal for the summer months.", "The perfect summer salad of melon, olives and feta cheese with toasted pumpkin seeds.",
    "The good old potato salad with a twist!", "A quick carrot salad with a freshly made black grape dressing", "Bite-sized and absolutely divine, serve these crisp potato and channa dal ki tikkis.",
    "A Thai appetizer that’s downright delicious ", "The potatoes in this recipe take on the spicy flavours beautifully", "This filling soup is full of fibre, low fat and full of veg",
    "A crispy pie that you can adapt for your needs, add chicken or keep it veggie.", "Served with creamy mashed potatoes"
];
var $collapseBtn = $('#navbarCollapseBtn');
// about author variables and other.

// end of about author variables and other.

$('[data-fancybox="gallery"]').fancybox({
    buttons: [
        "zoom",
        //"share",
        "slideShow",
        //"fullScreen",
        //"download",
        "thumbs",
        "close"
    ],
    thumbs: {
        autoStart: true
    },
    image: {
        preload: false
    },
    infobar: true
});

function animateScroll() {
    $('body').scrollspy({
        target: '#scrollspy-nav , #buttons-nav, .navbar-header',
        offset: 10
    });

    $('.navbar-nav a, #seeTheMenuBtn, #bookATableBtn, .navbar-header a').click(function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            var hash = this.hash;
            console.log(hash);

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 600)
        }

    });
}

function validateForm() {
    bookNowButton[0].disabled = true;
    formInputsArray.on('keyup', function (e) {
        var validate = true;
        formInputsArray.each(function (index, item) {
            if (item.value == '') {
                validate = false;
            }
            var regex = new RegExp($(item).attr('data-patern'));
            if (regex.test(item.value)) {
                item.classList.remove('redBorder');
                item.classList.add('yellowBorder');
            } else {
                item.classList.remove('yellowBorder');
                item.classList.add('redBorder');
                validate = false;
            }
        });
        bookNowButton[0].disabled = !validate;
    })
}

function fancyBoxImagesAnchorsLoading() {
    for (var i = 0; i < fancyBoxHrefs.length; i++) {
        fancyBoxHrefs[i].href = "img/fancyBox-big-img-" + i + ".jpg";
    }
}


function fancyBoxImagesLoading() {
    for (var i = 0; i < fancyBoxSrcs.length; i++) {
        fancyBoxSrcs[i].src = "img/fancyBox-small-img-" + i + ".jpg";
    }
}

function backToTopOnClick() {
    $bttButton.on('click', function () {
        $html.animate({
            scrollTop: 0
        }, 1000);
    });
}

function menuItemValuesAddition() {
    for (var i = 0; i < itemDescriptionArray.length; i++) {
        itemDescriptionArray[i].textContent = itemDescriptionValueArray[i];
    }
}

function onScroll() {
    var scrolled = document.body.scrollTop;
    /* Navbar JS */
    if (window.matchMedia("(min-width: 768px)").matches) {
        if (window.matchMedia("(max-width: 1000px)").matches) {
            if (scrolled >= 20) {
                $navbar.addClass('navbar-bg-orange');
                $("#bs-example-navbar-collapse-1").removeClass('navbar-bg-orange');
            } else {
                $navbar.removeClass('navbar-bg-orange');
            }
        } else {
            if (scrolled >= 200) {
                $navbar.addClass('navbar-bg-orange');
                $("#bs-example-navbar-collapse-1").removeClass('navbar-bg-orange');
            } else {
                $navbar.removeClass('navbar-bg-orange');
            }
        }

        if (scrolled > 230) {
            $bttButton.addClass('opacity-btn')
            $bttButton.css('display', 'block');
        } else {
            $bttButton.removeClass('opacity-btn');
            $bttButton.css('display', 'none');
        }
    }
}
$collapseBtn.click(function () {
    if (window.matchMedia("(max-width: 1024px)").matches) {
        $("#bs-example-navbar-collapse-1").toggleClass('navbar-bg-orange');
        $navbar.toggleClass('navbar-bg-orange');
    }
});


window.addEventListener('load', function () {
    backToTopOnClick();
    animateScroll();
    menuItemValuesAddition();
    fancyBoxImagesLoading();
    fancyBoxImagesAnchorsLoading();
    validateForm();


});
window.addEventListener('scroll', function () {
    onScroll();
});