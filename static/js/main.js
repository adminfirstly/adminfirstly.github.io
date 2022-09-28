/*-----------------------------------------------------------------------------------
    Template Name: Landio - Multipurpose Landing Page HTML Template
    Template URI: https://webtend.net/demo/html/landio/
    Author: WebTend
    Author URI:  https://webtend.net/
    Version: 1.3

    Note: This is Main Js file
-----------------------------------------------------------------------------------
    Js INDEX
    ===================
    #. Main Menu
    #. Testimonials Slider One
    #. Testimonials Slider Two
    #. Testimonials Slider Three
    #. Testimonials Slider Four
    #. Testimonials Slider Five
    #. Testimonials Slider Six
    #. Counter Up
    #. Service Slider One
    #. Brand Slider One
    #. Brand Slider Two
    #. Testimonial Slider (On Sidebar)
    #. Progress bar
    #. Active Nice Select
    #. Hero Slider
    #. Screenshot Slider
    #. Sticky Header
    #. Preloader
    #. Video Popup
    #. Team Slider
    #. Scroll To Top
    #. Portfolio FIlter
-----------------------------------------------------------------------------------*/

(function ($) {
    'use strict';

    // ===== Main Menu
    function mainMenu() {
        const navbarToggler = $('.navbar-toggler'),
            navMenu = $('.nav-menu'),
            mobilePanel = $('.mobile-slide-panel'),
            mobilePanelMenu = $('.mobile-menu'),
            mobileOverly = $('.panel-overlay'),
            navClose = $('.panel-close');

        // Show Mobile Slide Panel
        navbarToggler.on('click', function (e) {
            e.preventDefault();
            mobilePanel.toggleClass('panel-on');
        });

        // Close Mobile Slide Panel
        navClose.add(mobileOverly).on('click', function (e) {
            e.preventDefault();
            mobilePanel.removeClass('panel-on');
        });

        // Adds toggle button to li items that have children
        navMenu.find('li a').each(function () {
            if ($(this).next().length > 0) {
                $(this).append('<span class="dd-trigger"><i class="fas fa-angle-down"></i></span>');
            }
        });

        mobilePanelMenu.find('li a').each(function () {
            if ($(this).next().length > 0) {
                $(this).append('<span class="dd-trigger"><i class="fas fa-angle-down"></i></span>');
            }
        });

        // Expands the dropdown menu on each click
        mobilePanelMenu.find('.dd-trigger').on('click', function (e) {
            e.preventDefault();
            $(this).parent().parent('li').children('ul.sub-menu').stop(true, true).slideToggle(350);
            $(this).toggleClass('sub-menu-opened');
        });


        const offCanvasBtn = $('.off-canvas-btn'),
            offCanvasClose = $('.canvas-close'),
            canvasOverly = $('.canvas-overlay'),
            offCanvasPanel = $('.off-canvas-wrapper');

        // Show Off canvas Panel
        offCanvasBtn.on('click', function (e) {
            e.preventDefault();
            offCanvasPanel.addClass('canvas-on');
        });

        // Hide Off canvas Panel
        offCanvasClose.add(canvasOverly).on('click', function (e) {
            e.preventDefault();
            offCanvasPanel.removeClass('canvas-on');
        });
    }

    // ===== Testimonials Slider One
    function testimonialActiveOne() {
        const slider = $('#testimonialActiveOne');

        slider.slick({
            infinite: true,
            dots: true,
            arrows: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    // =====Testimonials Slider Two
    function testimonialActiveTwo() {
        const slider = $('#testimonialActiveTwo');

        slider.slick({
            infinite: true,
            dots: true,
            arrows: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    // ===== Testimonials Slider Three
    function testimonialActiveThree() {
        const slider = $('#testimonialActiveThree');

        slider.slick({
            infinite: true,
            dots: false,
            arrows: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            prevArrow: '<button class="slick-arrow prev-arrow"><i class="fas fa-arrow-left"></i></button>',
            nextArrow: '<button class="slick-arrow next-arrow"><i class="fas fa-arrow-right"></i></button>',
            responsive: [
                {
                    breakpoint: 430,
                    settings: {
                        arrows: false,
                    }
                }
            ]
        });
    }

    // ===== Testimonials Slider Four
    function testimonialActiveFour() {
        const slider = $('#testimonialActiveFour');

        slider.slick({
            infinite: true,
            dots: true,
            arrows: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    // ===== Testimonials Slider Five
    function testimonialActiveFive() {
        const slider = $('#testimonialActiveFive');

        slider.slick({
            infinite: true,
            dots: true,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
        });
    }

    // ===== Testimonials Slider Six
    function testimonialActiveSix() {
        const slider = $('#testimonialActiveSix');

        slider.slick({
            infinite: true,
            dots: true,
            arrows: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    // ===== Counter Up
    function counterUp() {
        $('.counter-item').on('inview', function (event, isInView) {
            if (isInView) {
                $(this).find('.counter').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 3000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                $(this).unbind('inview');
            }
        });
    }

    // ===== Service Slider One
    function serviceSliderActive() {
        const slider = $('#serviceSliderActive');

        slider.slick({
            infinite: true,
            dots: false,
            arrows: false,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 1800,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    // ===== Brand Slider One
    function brandSlider() {
        const slider = $('.brand-slider-one-active');

        slider.slick({
            infinite: true,
            dots: false,
            arrows: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        });
    }

    // ===== Brand Slider Two
    function brandSliderTwo() {
        const slider = $('.brand-slider-two-active');

        slider.slick({
            infinite: true,
            dots: false,
            arrows: false,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        });
    }

    // ===== Testimonial Slider (On Sidebar)
    function testimonialWidgetSlider() {
        const slider = $('.testimonial-widget-active');

        slider.slick({
            infinite: true,
            dots: true,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
        });
    }

    // ===== Progress bar
    function progressBar() {
        $('.progress-bars').on('inview', function (event, isInView) {
            if (isInView) {
                $(this).find('.single-progress').each(function () {
                    const percentage = $(this).data('percentage'),
                        lineInner = $(this).find('.line-inner'),
                        widthCss = percentage + '%';

                    lineInner.width(widthCss);
                });
                $(this).unbind('inview');
            }
        });
    }

    // ===== Active Nice Select
    function activeNiceSelect() {
        $('select').niceSelect();
    }

    // ===== Hero Slider
    function heroSlider() {
        const slider = $('.hero-slider');

        slider.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            speed: 500,
            arrows: true,
            fade: false,
            dots: true,
            swipe: true,
            prevArrow: '<button class="slick-arrow prev-arrow"><i  class="fas fa-angle-left"></i></button>',
            nextArrow: '<button class="slick-arrow next-arrow"><i  class="fas fa-angle-right"></i></button>',
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        dots: false,
                    }
                },
                {
                    breakpoint: 425,
                    settings: {
                        dots: false,
                        arrows: false,
                    }
                }
            ]
        });
    }

    // ==== Screenshot Slider
    function screenshotSlider() {
        $('.screenshot-slider').slick({
            dots: false,
            arrows: true,
            infinite: true,
            autoplay: false,
            speed: 600,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<button class="slick-arrow prev-arrow"><i class="far fa-angle-left"></i></button>',
            nextArrow: '<button class="slick-arrow next-arrow"><i class="far fa-angle-right"></i></button>',
            appendArrows: $('.screenshot-arrows'),
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        });
    }

    // ==== Sticky Header
    function stickyHeader() {
        const scroll_top = $(window).scrollTop(),
            siteHeader = $('.template-header');

        if (siteHeader.hasClass('sticky-header')) {
            if (scroll_top < 110) {
                siteHeader.removeClass('sticky-on');
            } else {
                siteHeader.addClass('sticky-on');
            }
        }
    }

    // ==== Preloader
    function preloader() {
        $('#preloader').delay(500).fadeOut(500);
    }

    // ==== Video Popup
    function videoPopup() {
        $('.popup-video').each(function () {
            $(this).magnificPopup({
                type: 'iframe',
            });
        });
    }

    // ===== Team Slider
    function teamSliderOne() {
        const slider = $('#teamSliderOne');

        slider.slick({
            infinite: true,
            dots: false,
            arrows: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 620,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    // ===== Scroll To Top
    function scrollToTop() {
        var $scrollUp = $('#scroll-top'),
            $lastScrollTop = 0,
            $window = $(window);

        $window.on('scroll', function () {
            var st = $(this).scrollTop();
            if (st > $lastScrollTop) {
                $scrollUp.removeClass('show');
            } else {
                if ($window.scrollTop() > 200) {
                    $scrollUp.addClass('show');
                } else {
                    $scrollUp.removeClass('show');
                }
            }
            $lastScrollTop = st;
        });

        $scrollUp.on('click', function (evt) {
            $('html, body').animate({ scrollTop: 0 }, 600);
            evt.preventDefault();
        });
    }

    // ===== Portfolio FIlter
    function portfolioFilter() {
        const items = $('.portfolio-filter-items').isotope();

        // Items on button click
        $('.portfolio-filter').on('click', 'li', function (e) {
            const filterValue = $(this).attr('data-filter');
            items.isotope({
                filter: filterValue
            });
        });

        // Menu active class
        $('.portfolio-filter li').on('click', function (event) {
            $('.portfolio-filter .active').removeClass('active');
            $(this).addClass('active');

            event.preventDefault();
        });
    }

    /*---------------------
    === Document Ready  ===
    ----------------------*/
    $(document).ready(function () {
        mainMenu();
        testimonialActiveOne();
        testimonialActiveTwo();
        testimonialActiveThree();
        testimonialActiveFour();
        testimonialActiveFive();
        testimonialActiveSix();
        counterUp();
        serviceSliderActive();
        brandSlider();
        testimonialWidgetSlider();
        progressBar();
        activeNiceSelect();
        heroSlider();
        brandSliderTwo();
        screenshotSlider();
        videoPopup();
        teamSliderOne();
        scrollToTop();
        portfolioFilter();
    });

    /*---------------------
    === Window Scroll  ===
    ----------------------*/
    $(window).on('scroll', function () {
        stickyHeader();
    });

    /*------------------
    === Window Load  ===
    --------------------*/
    $(window).on('load', function () {
        preloader();

        // wow Init
        new WOW().init();
        updateLoginStatus();
    });

 

    window.Util = {
        set(key, val, expire) {
            let exp = expire ? Date.now() + expire * 1000 * 60 : -1;
            localStorage.setItem(key, JSON.stringify({ value: val, expire: exp }));
            console.log('set ' + key + ':' + JSON.stringify({ value: val, expire: new Date(exp).toLocaleString() }));
        },
        get(key) {
            let data = localStorage.getItem(key);
            // console.log(data);

            if (!data) return null;

            let dataObj = JSON.parse(data);

            if (dataObj.expire == -1) return dataObj.value;

            if (Date.now() >= dataObj.expire) {
                localStorage.removeItem(key);
                return null;
            } else {
                return dataObj.value;
            }
        }
    };
 
   var serverhost = 'https://server.adminfirstly.com/'
      // var serverhost = 'http://localhost:3212/'

    // var apipath = 'http://localhost:8000/api/store/collection/retrieve-a-product-collection'
    // var docpath = 'http://localhost:3000/tutorial/set-up-your-development-environment'
    var apipath = 'https://others.adminfirstly.com/api/admin/auth/authenticate-a-user'
    var docpath = 'https://others.adminfirstly.com/tutorial/set-up-your-development-environment'
    
    //https://doc.adminfirstly.com/tutorial/creating-your-medusa-server
    function openApi(){
        window.open(apipath,'_blank');
    }
    function openDoc(){
        window.open(docpath,'_blank');
    }
    window.openApi = openApi;
    window.openDoc = openDoc;
    function updateLoginStatus(){
        var obj = Util.get('adminfirstly_user');
        if(obj==null){
            console.log('not login');
            $('.nav-signup,.nav-signin').show();
            $('.user-profile').hide();
            $('.sign-out').hide();
            $('.user-profile a').text('');
        }else{
            console.log('login!');
            $('.nav-signup,.nav-signin').hide();
            $('.user-profile').show();
            $('.sign-out').show();
            $('.user-profile a').text(obj.first_name+' '+obj.last_name);
        }
    }
    function checklog(){
        var obj = Util.get('adminfirstly_user');
        if(obj!=null){
            window.location.href='/';
        }
    }
    function checklog2(){
        var obj = Util.get('adminfirstly_user');
        if(obj==null){
            window.location.href='/';
        }
    }
    window.checklog = checklog;
    window.checklog2 = checklog2;
    function signin() {
        if ($('#Username').val() == '') {
            layer.msg('email is required');
            return;
        }
        if ($('#Password').val() == '') {
            layer.msg('password is required');
            return;
        }
        layer.load(1, {
            shadeClose: false,
         
            shade: [0.5,'#000'] 
        });
        $.ajax(
            {
                url: serverhost + 'store/auth',
                'data': JSON.stringify({
                    "email": $('#Username').val(), "password": $('#Password').val()
                }),
                'type': 'POST',
                'processData': false,
                'contentType': 'application/json', //typically 'application/x-www-form-urlencoded', but the service you are calling may expect 'text/json'... check with the service to see what they expect as content-type in the HTTP header.
                success: function (msg) {
                    layer.closeAll();
                    layer.msg('Login success');
                    console.log(msg)
                    Util.set('adminfirstly_user',msg.customer,20);
                    updateLoginStatus();
                    window.location.href='/';
                },
                error: function (msg) {
                    layer.closeAll();
                    layer.msg('Login failed');
                },
            }
        );
    }
    function signup() {
        if ($('#FirstName').val() == '') {
            layer.msg('FirstName is required');
            return;
        }
        if ($('#LastName').val() == '') {
            layer.msg('LastName is required');
            return;
        }
        if ($('#Email').val() == '') {
            layer.msg('Email is required');
            return;
        }
        if ($('#Password').val() == '') {
            layer.msg('Password is required');
            return;
        }
        if ($('#ConfirmPassword').val() != $('#Password').val()) {
            layer.msg('The passwords entered twice need to be consistent');
            return;
        }
        layer.load(1, {
            shadeClose: false,
         
            shade: [0.5,'#000'] 
        });
        $.ajax(
            {
                url: serverhost + 'store/customers',
                'data': JSON.stringify({
                    "email": $('#Email').val(),"first_name":$('#FirstName').val(),"last_name":$('#LastName').val(),"password":$('#Password').val()
                }),
                'type': 'POST',
                'processData': false,
                'contentType': 'application/json', //typically 'application/x-www-form-urlencoded', but the service you are calling may expect 'text/json'... check with the service to see what they expect as content-type in the HTTP header.
                success: function (msg) {
                    console.log('success')
                    console.log(msg)
                    layer.closeAll();
                    layer.msg('sign up success');
                    window.location.href='/sign-in.html';
             
                },
                error: function (msg) {
                    console.log('error')
                    console.log(msg.responseJSON.message)
                    layer.closeAll();
                    var retstr = (msg&&msg.responseJSON&&msg.responseJSON.message)||'sign up failed';
                    layer.msg(retstr);
                },
            }
        );
    }
    $('#login').on('click', function () {
        signin();
    });
    $('#CreateAccount').on('click', function () {
        signup();
    });
    $('.sign-out').on('click', function () {
        layer.msg('log out?', {
            time: 20000, //20s后自动关闭
            btn: ['yes', 'cancel'],
            yes: function(){
                Util.set('adminfirstly_user',null,1);
                layer.closeAll();
                updateLoginStatus();
                window.location.href="/";
            },
            btn2: function(){
                layer.closeAll();
            }
        });
    });
    // $('.sel-plane').on('click', function () {
    //     layer.msg("We are applying for payment service solution and can't buy it for the time being. You can contact me by email(hello@adminfirstly.com)", {
    //         time: 20000, //20s后自动关闭
    //         btn: ['got it'],
    //         yes: function(){
    //             layer.closeAll();
    //         } 
    //     });
    // });
    $('.forgot-password').on('click', function () {
        layer.msg('Please send us an email(hello@adminfirstly.com) and the administrator will reset your password within 24 hours');
    });
    window.addEventListener("adminfirstly_updateLoginStatus", (event) => {
        updateLoginStatus();
    }, false);
    updateLoginStatus();
})(jQuery);