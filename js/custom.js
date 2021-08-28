if (window.top.location.href == 'https://omar-abdelatif.github.io/Project/single-product.html') {

    let inputPrice;
    let productPrice = document.querySelector('.total').innerHTML;

    function productTotal() {
        let priceTotal = inputPrice * productPrice;
        document.querySelector('.total').innerHTML = priceTotal;
    }

    document.querySelector(".btn-plus").addEventListener("click", function () {
        inputPrice = document.querySelector(".qty").value;
        inputPrice++;
        document.querySelector(".btn-minus").disabled = false;
        console.log(inputPrice);
        productTotal();
    });

    document.querySelector('.btn-minus').addEventListener("click", function () {
        // value --
        inputPrice = document.querySelector(".qty").value;
        inputPrice--;
        if (inputPrice === 1) {
            document.querySelector(".btn-minus").disabled = true;
        }
        productTotal();
    });

    // loop 4 images

    let loop = document.querySelector(".img-track").children;

    function k(o) {
        document.querySelector("img").src = o.children[0].src;
    }
    }


$(document).ready(function () {
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
        autoplayHoverPause: true,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });

        $(".testmonial-slide").owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 1000,
            margin: 10,
            autoplayHoverPause: true,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1400: {
                    items: 5
                }
            },
        });

        $(".shop-category").owlCarousel({
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 2000,
                    margin: 10,
        autoplayHoverPause: true,
        dots: false,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1024: {
                    items: 4
                },
                1200: {
                    items: 5
                },
                1400: {
                    items: 6
                },
                1600: {
                    items: 7
                }
            },
    });

    $(".carousel-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        dots: false,
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
    $(".down6").hover(
        function () {
            $('.drop6').slideDown(200)
        },
        function () {
            $('.drop6').slideUp(200)
        }
    )

    // PRODUCT COUNTER



    // PRODUCT ZOOM

    $('.parent-pic').zoom();

    // ADD PRODUCT

    // DELETE PRODUCT

    // IMG LOOP



    // SCROLL UP

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    })

    //

    //

    //

    //

});
