
(function(QLD) {
    "use strict";

    /**
     * @module carouselSlick
     */
     var carouselSlick = {};

    /**
     * Initialise the location finder
     * 
     * @memberof module:carouselSlick
     */
    carouselSlick.init = function() {
        var $slick = $(`[data-action="slick-slider"]`);

        var breakpoint = {
            "Lg": 991,
            "Md": 698,
            "Sm": 399
        };
        var slickSettingsMobileOnly = {
            slidesToShow: 1.3,
            slidesToScroll: 1,
            mobileFirst: true,
            infinite: false,
            centerMode: false,
            arrows: true,
            prevArrow: '<button class="qld__slick-prev"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></button>',
            nextArrow: '<button class="qld__slick-next"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></button>',
            responsive: [
                {
                    breakpoint: breakpoint.Md,
                    settings: 'unslick'
                }
            ]
        };

        var slickSettingsThree = {
            slidesToShow: 1.4,
            slidesToScroll: 1,
            mobileFirst: true,
            infinite: false,
            centerMode: false,
            arrows: true,
            dots: false,
            appendArrows: '',
            appendArrows: '',
            prevArrow: '<button class="qld__slick-prev"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></button>',
            nextArrow: '<button class="qld__slick-next"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></button>',
            responsive: [
                {
                    breakpoint: breakpoint.Lg,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3
                    }
                },
                {
                    breakpoint: breakpoint.Md,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2
                    }
                }
            ]
        }

        var slickSettingsFour = {
            slidesToShow: 1.4,
            slidesToScroll: 1,
            mobileFirst: true,
            infinite: false,
            centerMode: false,
            arrows: true,
            dots: false,
            appendArrows: '',
            appendDots: '',
            prevArrow: '<button class="qld__slick-prev"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></button>',
            nextArrow: '<button class="qld__slick-next"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></button>',
            responsive: [
                {
                    breakpoint: breakpoint.Lg,
                    settings: {
                      dots: true,
                      slidesToShow: 4,
                      slidesToScroll: 4
                    }
                },
                {
                    breakpoint: breakpoint.Md,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2
                    }
                }
            ]
        }

        if($slick.length) {
            $slick.each(function() {
                var $this = $(this);
                if ($this.attr('data-type') == 'mobile-only' && $this.children('li').length > 1) {
                    slickSettingsMobileOnly.appendArrows = $this.next().find('.qld__slick-controls');
                    $this.slick(slickSettingsMobileOnly);
                } else if ($this.attr('data-type') == 'one'){
                    slickSettingsMobileOnly.appendArrows = $this.next().find('.qld__slick-controls');
                    slickSettingsMobileOnly.appendDots = $this.next().find('.qld__slick-controls');
                    $this.slick(slickSettingsMobileOnly);
                }
                else if ($this.attr('data-type') == 'two'){
                    slickSettingsMobileOnly.appendArrows = $this.next().find('.qld__slick-controls');
                    slickSettingsMobileOnly.appendDots = $this.next().find('.qld__slick-controls');
                    $this.slick(slickSettingsMobileOnly);
                }
                 else if ($this.attr('data-type') == 'four'){
                    slickSettingsFour.appendArrows = $this.next().find('.qld__slick-controls');
                    slickSettingsFour.appendDots = $this.next().find('.qld__slick-controls');
                    $this.slick(slickSettingsFour);
                } else if ($this.attr('data-type') == 'three'){
                    slickSettingsThree.appendArrows = $this.next().find('.qld__slick-controls');
                    slickSettingsThree.appendDots = $this.next().find('.qld__slick-controls');
                    $this.slick(slickSettingsThree);
                }
            });

            $(window).on("resize", function () {
                if ($(window).width() > breakpoint.Md) {
                    return;
                }

                $slick.each(function() {
                    var $this = $(this);

                    if (!$this.hasClass("slick-initialized") && $this.attr('data-type') == 'mobile-only' && $this.children('li').length > 1) {
                        $this.slick(slickSettingsMobileOnly);
                    }
                });
            });
        }
    }

    var QLD = QLD ? QLD : {};
    QLD.carouselSlick = carouselSlick;
    window.QLD = QLD;

    document.addEventListener("DOMContentLoaded", function(event) {
        if ($(`[data-action="slick-slider"]`).length > 0) {
            QLD.carouselSlick.init();
        }
    });
}(window.QLD));