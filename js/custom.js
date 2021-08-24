$(document).ready(function () {

    // PRELOADER

    $('.preloader').fadeOut(1000)

    // SEARCH

    $('#search').click(function () {
        $('.input').fadeIn()
    })
    $('#close').click(function () {
        $('.input').fadeOut()
    })

    // OWL CAROUSEL
        $(".parent-related").owlCarousel({
                    items: 4,
                    autoplay: true,
                    loop: true,
                    nav: true,
                        navText: ["<i class='far fa-chevron-left'></i>", '<i class="far fa-chevron-right"></i>'],
                        autoplayHoverPause: true,
                        slideSpeed: 100,
                        itemsDesktop: false,
                        itemsDesktopSmall: false,
                        itemsTablet: false,
                        itemsMobile: false,
                        goToFirst: true,
                        goToFirstSpeed: 500,
                    dots: false,
    });

    // WOW

    new WOW().init();

    // NAVBAR

    $(window).on("scroll", function () {
        $(window).scrollTop();
        if ($(window).scrollTop() > 50) {
            $(".navbar").addClass("fixed")
        } else {
            $(".navbar").removeClass("fixed");
        }
    })
    $(".down1").hover(
        function () {
            $('.drop1').slideDown(200)
        },
        function () {
            $('.drop1').slideUp(200)
        }
    )
    $(".down2").hover(
        function () {
            $('.drop2').slideDown(200)
        },
        function () {
            $('.drop2').slideUp(200)
        }
    )
    $(".down3").hover(
        function () {
            $('.drop3').slideDown(200)
        },
        function () {
            $('.drop3').slideUp(200)
        }
    )
    $(".down4").hover(
        function () {
            $('.drop4').slideDown(200)
        },
        function () {
            $('.drop4').slideUp(200)
        }
    )
    $(".down5").hover(
        function () {
            $('.drop5').slideDown(200)
        },
        function () {
            $('.drop5').slideUp(200)
        }
    )
    $(".down6").hover(
        function () {
            $('.drop6').slideDown(200)
        },
        function () {
            $('.drop6').slideUp(200)
        }
    )

    // PRODUCT COUNTER

    var proQty = $('.counter');
    proQty.prepend('<span class="dec qtybtn">-</span>');
    proQty.append('<span class="inc qtybtn">+</span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    // PRODUCT ZOOM

    $('.parent-pic').zoom();

    // 

    //

    //

    //

    //

    //

    //

    //

    //

    //

})