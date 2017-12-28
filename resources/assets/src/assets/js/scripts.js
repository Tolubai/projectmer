jQuery(document).ready(function ($) {

    // News
    function newserviceSlick() {

        $('.newservice-news-slide').not('.slick-initialized').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            prevArrow: '<button type="button" class="slick-arrow arrow-prev"><i class="fas fa-chevron-left"></button>',
            nextArrow: '<button type="button" class="slick-arrow arrow-next"><i class="fas fa-chevron-right"></button>',
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            ]
        });

    }

    newserviceSlick();
    $(window).on('resize', newserviceSlick);

    // Photos
    function mediasPhotoSlick() {

        $('.medias-photo-slide').not('.slick-initialized').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            infinite: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            ]
        });

        $('.fll-photo').click(function () {
            $('.medias-photo-slide').slick('slickPrev');
        })
    
        $('.flr-photo').click(function () {
            $('.medias-photo-slide').slick('slickNext');
        })
    }

    mediasPhotoSlick();
    $(window).on('resize', mediasPhotoSlick);

    // Videos
    function mediasVideoSlick() {

        $('.medias-video-slide').not('.slick-initialized').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            infinite: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            ]
        });

        $('.fll-video').click(function () {
            $('.medias-video-slide').slick('slickPrev');
        })

        $('.flr-video').click(function () {
            $('.medias-video-slide').slick('slickNext');
        })
    }

    mediasVideoSlick();
    $(window).on('resize', mediasVideoSlick);

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $('.newservice-news-slide').slick('setPosition', 0);
        $('.medias-photo-slide').slick('setPosition', 0);
        $('.medias-video-slide').slick('setPosition', 0);
    })

    // Blocks
    function blockSlick() {
        $('.blocks-slide').not('.slick-initialized').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: false,
            prevArrow: '<button type="button" class="slick-arrow arrow-prev"><i class="fas fa-chevron-left"></button>',
            nextArrow: '<button type="button" class="slick-arrow arrow-next"><i class="fas fa-chevron-right"></button>',
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            ]
        });
    }

    blockSlick();
    $(window).on('resize', blockSlick);

    // Links
    function linksSlick() {
        $('.links-slide').not('.slick-initialized').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: false,
            prevArrow: '<button type="button" class="slick-arrow arrow-prev"><i class="fas fa-chevron-left"></button>',
            nextArrow: '<button type="button" class="slick-arrow arrow-next"><i class="fas fa-chevron-right"></button>',
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            ]
        });
    }

    linksSlick();
    $(window).on('resize', linksSlick);

    // Bootstrapp
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    // Navbar
    $(window).scroll(function () {
        if ($(".navbar").offset().top > 250) {
            $(".fixed-top").addClass("fixed-collapse");
        } else {
            $(".fixed-top").removeClass("fixed-collapse");
        }
    });

    $(".search-toggle").click(function () {
        $(".navbar-collapse").addClass("search-show");
        $(".form-search").addClass("visible");
    });
    $(".close-search").click(function () {
        $(".navbar-collapse").removeClass("search-show");
        $(".form-search").removeClass("visible");
    });

});