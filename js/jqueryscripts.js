$(document).ready(function () {
    // SEARCH

    $('#search').click(function () {
        $('.input').fadeIn()
    })
    $('#close').click(function () {
        $('.input').fadeOut()
    })

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

    // SCROLL UP

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    })

    //

});