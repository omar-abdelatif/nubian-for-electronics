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
    // BILLING INFORMATION
    $(".regular").click(function () {
        $(".address-input").slideUp();
    });
    $(".diffrent").click(function () {
        $(".address-input").slideDown();
    });
    // SCROLL TOP
    $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scroll-top').fadeIn();
    } else {
        $('.scroll-top').fadeOut();
    }
    })
    });

    if (window.top.location.href == 'http://127.0.0.1:5500/index.html' || 'file:///C:/Users/Phantom/Desktop/Tasks/Project/index.html') {
        // CAROUSEL
        $(".carousel-slider").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            dots: false,
        })
        // SCROLL TOP
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scroll-top').fadeIn();
            } else {
                $('.scroll-top').fadeOut();
            }
        })
        // ADD TO CART
        allItems = document.querySelectorAll(".feature-item");
        basket = document.querySelector(".basket-list");
        allItems.forEach(function (item) {
            item.onclick = function () {
                basket.innerHTML = item
            }
        })

    }
    if (window.top.location.href == 'http://127.0.0.1:5500/about-designer.html' || 'file:///C:/Users/Phantom/Desktop/Tasks/Project/about-designer.html.html') {
        // CAROUSEL
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
            }
            });
            }
            if (window.top.location.href == 'http://127.0.0.1:5500/shop.html' || 'file:///C:/Users/Phantom/Desktop/Tasks/Project/shop.html.html') {
                // CAROUSEL
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
                // RANGE SLIDER
                var lower = $('.lower');
                var upper = $('.upper');
                var lowerVal = parseInt(lower.val());
                var upperVal = parseInt(upper.val());
                var resultL = $('.result-l');
                var resultU = $('.result-u');
                var lowMin = parseInt(lower.attr('min'));
                var lowMax = parseInt(lower.attr('max'));
                var upMin = parseInt(upper.attr('min'));
                var upMax = parseInt(upper.attr('max'));
                var line = $('.line');
                var lineW = upperVal - lowerVal - 15;
                line.width(lineW);
                console.log(lineW);
                lower.on('input', function () {
                    lowerVal = parseInt(lower.val());
                    upperVal = parseInt(upper.val());
                    if (upperVal <= lowerVal + 1) {
                        upper.val(lowerVal + 2);
                        if (lowerVal == lowMin) {
                            upper.val(lowerVal + 2)
                        }
                    };
                    resultL.html(lowerVal);
                    resultU.html(upperVal);
                    lineW = upperVal - lowerVal;
                    line.css({
                        'left': +lowerVal +
                            'px'
                    });
                    line.width(lineW);
                })
                upper.on('input', function () {
                    lowerVal = parseInt(lower.val());
                    upperVal = parseInt(upper.val());
                    if (lowerVal >= upperVal - 1) {
                        lower.val(upperVal - 2)
                        if (upperVal == upMax) {
                            lower.val(upperVal - 2)
                        }
                    }
                    resultL.html(lowerVal)
                    resultU.html(upperVal)
                    lineW = upperVal - lowerVal;
                    line.css({
                        'left': +lowerVal + 'px'
                    });
                    line.width(lineW);
                })
            }
if (window.top.location.href == 'http://127.0.0.1:5500/single-product.html' || 'file:///C:/Users/Phantom/Desktop/Tasks/Project/single-product.html') {

    let sub = document.querySelector('.btn-minus');
    let qty = document.querySelector('.qty');
    let add = document.querySelector('.btn-plus');
    let price = document.querySelector('.total').innerHTML;
    let a = 0;

    let inputPrice;
    let productPrice = document.querySelector('.total').innerHTML;

    function productTotal() {
        let priceTotal = inputPrice * productPrice;
        document.querySelector('.total').innerHTML = priceTotal;
    }
    document.querySelector(".btn-plus").addEventListener("click", function () {
        inputPrice = document.querySelector(".qty").value;
        ++inputPrice;
        document.querySelector(".btn-minus").disabled = false;
        console.log(inputPrice);
        productTotal();
    });
    document.querySelector('.btn-minus').addEventListener("click", function () {
        // value --
        inputPrice = document.querySelector(".qty").value;
        --inputPrice;
        if (inputPrice === 1) {
            document.querySelector(".btn-minus").disabled = true;
        }
        productTotal();
    });
    add.addEventListener("click", function () {
        ++a;
        if (a >= 1) {
            sub.disabled = false;
        }
        qty.value = a
        let final = price * qty.value;
        final = document.querySelector('price');
    });
    sub.addEventListener("click", function () {
        if (a > 1) {
            --a
        } else if (qty.value == 1) {
            sub.disabled = true;
        }
        qty.value = a
        let final = price * qty.value;
        final = document.querySelector('price');
    });
    // loop 4 images
    let loop = document.querySelector(".img-track").children;

    function k(o) {
        document.querySelector("img").src = o.children[0].src;
    }
    // PRODUCT ZOOM
    $('.parent-pic').zoom();
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
    // COPY CLIPBOARD
    var copy = document.querySelector('.copy-link');
    copy.addEventListener('click', () => {
                const textCopied = ClipboardJS.copy(document.querySelector('.copy'));
                console.log('copied!', textCopied);
    })
}
if (window.top.location.href == 'http://127.0.0.1:5500/checkout.html' || 'file:///C:/Users/Phantom/Desktop/Tasks/Project/checkout.html') {

}