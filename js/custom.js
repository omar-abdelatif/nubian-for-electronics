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

    $(".slider").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        navigation: true,
        navigationText: ["<i class='far fa-chevron-left'></i>", '<i class="far fa-chevron-right"></i>'],
        autoplayHoverPause: true,
        slideSpeed: 100,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false,
        goToFirst: true,
        goToFirstSpeed: 500,
        pagination: false,
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

    // 

    // 

    // 

})