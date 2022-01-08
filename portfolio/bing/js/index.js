$(document).ready(function () {
    // present_hover
    present = () => {
        $('.present_wrap img').hover(function () {
            $(this).attr({
                src: 'img/present_ad_hover.png'
            })
        }, function () {
            $(this).attr({
                src: 'img/present_ad.png'
            })
        });
    }
    presentOn=()=>{
        $('.present_wrap img').attr({
            src: 'img/present_ad.png'
        });
    }
    presentOff=()=>{
        $('.present_wrap img').attr({
            src: ''
        });
    }
    
    // header
    // mob_menu
    let bottomMenuNub = 0;
    $('.bottom_menu_menu, .mob_menu_close_btn').click(function () {
        if (bottomMenuNub == 0) {
            $('.mob_menu_wrap').addClass('bottom_menu_active');
            $('body').css({
                overflowY:'hidden'
            });
            bottomMenuNub++;
        } else {
            $('.mob_menu_wrap, .mob_menu_close_btn').removeClass('bottom_menu_active');
            $('.mob_menu_list').removeClass('mob_menu_list_active');
            $('.mob_depth').removeClass('mob_active');
            $('body').css({
                overflowY:'scroll'
            });
            bottomMenuNub = 0;
        };
    });
    let mobNub = 0;
    $('.mob_depth').each(function (index) {
        $(this).attr('mob_index', index);
    });
    $('.mob_menu_list').each(function (index) {
        $(this).attr('mob_index', index);
    }).click(function () {

        let mobMenu = $(this).attr('mob_index');
        $('.mob_depth').eq(mobMenu).toggleClass('mob_active');
        $('.mob_menu_list').eq(mobMenu).toggleClass('mob_menu_list_active');
    });


    // info
    $('.info_wrap .cart').hover(function () {
        $(this).find('img').stop().animate({
            opacity: 0,
            top: 3,
        });
    }, function () {
        $(this).find('img').stop().animate({
            opacity: 1,
            top: 0
        });
    });
    $('.info_wrap .my').hover(function () {
        $(this).find('img').stop().animate({
            opacity: 0,
            top: 3,
        });
    }, function () {
        $(this).find('img').stop().animate({
            opacity: 1,
            top: 0
        });
    });// info end
    // navbar
    $(window).scroll(function () {
        let $headerOffset = $('header').offset().top,
            $bodyOffset = $('body').offset().top,
            $footerOffset = $('footer').offset().top,
            scrollTop = $(this).scrollTop();
        if ($headerOffset < scrollTop && scrollTop < $footerOffset - 900) {
            $('.present_wrap').fadeIn(200);
        } else if ($headerOffset >= scrollTop) {
            $('.present_wrap').fadeOut(200);
        } else if (scrollTop >= 6100) {
            $('.present_wrap').fadeOut(200);
        }
        if (scrollTop > 53) {
            $('.in_header').css({
                position: 'fixed',
                top: '0'
            });
            $('.banner_wrap').css({
                marginTop: '120px'
            });
            $('.in_header').stop().animate({
                backgroundColor: 'rgba(255,255,255)'
            }, 400);

            $('.in_header').css({
                boxShadow: '0 1px 10px 5px rgba(0,0,0,0.2)'
            });
        } else {
            $('.in_header').css({
                position: 'relative',
            });
            $('.banner_wrap').css({
                marginTop: '0px'
            });
            $('.in_header').stop().animate({
                backgroundColor: 'rgba(255,255,255,1)',
            }, 400);
            $('.in_header').css({
                boxShadow: '0 1px 10px 5px rgba(0,0,0,0)'
            });
        }


    });// scroll navbar end

    // slide

    let ba = 0;
    $('.left_arrow').click(function () {
        $('.event_btn').removeClass('event_ani')
        $('.banner_text p,.banner_text h3').removeClass('trans');
        $('.cross').removeClass('cross_ani');
        $('.main_img').removeClass('main_ani');
        $('.sub_img_1').removeClass('sub_2_1_ani sub_3_1_ani sub_4_1_ani');
        $('.sub_img_2').removeClass('sub_2_2_ani sub_3_2_ani sub_4_2_ani');
        $('.sub_img_3').removeClass('sub_2_3_ani sub_3_3_ani sub_4_3_ani');
        $('.sub_img_4').removeClass('sub_2_4_ani sub_3_4_ani sub_4_4_ani');
        if (ba == 0) {
            $('.banner_con').stop().animate({
                left: -300 + '%',
            });
            $('.banner_btn li').removeClass('btn_active');
            $('.banner_btn li').eq(3).addClass('btn_active');
            // 이미지 트랜지션
            $('.event_btn').addClass('event_ani');
            $('.banner_text p,.banner_text h3').addClass('trans');
            $('.cross').addClass('cross_ani');
            $('.main_img').addClass('main_ani');
            $('.sub_img_1').addClass('sub_4_1_ani');
            $('.sub_img_2').addClass('sub_4_2_ani');
            $('.sub_img_3').addClass('sub_4_3_ani');
            $('.sub_img_4').addClass('sub_4_4_ani');
            ba++;
        } else if (ba == 1) {
            $('.banner_con').stop().animate({
                left: -200 + '%',
            });
            $('.banner_btn li').removeClass('btn_active');
            $('.banner_btn li').eq(2).addClass('btn_active');
            // 이미지 트랜지션
            $('.event_btn').addClass('event_ani');
            $('.banner_text p,.banner_text h3').addClass('trans');
            $('.cross').addClass('cross_ani');
            $('.main_img').addClass('main_ani');
            $('.sub_img_1').addClass('sub_3_1_ani');
            $('.sub_img_2').addClass('sub_3_2_ani');
            $('.sub_img_3').addClass('sub_3_3_ani');
            $('.sub_img_4').addClass('sub_3_4_ani');
            ba++;
        } else if (ba == 2) {
            $('.banner_con').stop().animate({
                left: -100 + '%',
            });
            $('.banner_btn li').removeClass('btn_active');
            $('.banner_btn li').eq(1).addClass('btn_active');
            // 이미지 트랜지션
            $('.event_btn').addClass('event_ani');
            $('.banner_text p,.banner_text h3').addClass('trans');

            ba++;
        } else if (ba == 3) {
            $('.banner_con').stop().animate({
                left: 0,
            });
            $('.banner_btn li').removeClass('btn_active');
            $('.banner_btn li').eq(0).addClass('btn_active');
            // 이미지 트랜지션
            $('.event_btn').addClass('event_ani');
            $('.banner_text p,.banner_text h3').addClass('trans');
            $('.cross').addClass('cross_ani');
            $('.main_img').addClass('main_ani');
            $('.sub_img_1').addClass('sub_2_1_ani');
            $('.sub_img_2').addClass('sub_2_2_ani');
            $('.sub_img_3').addClass('sub_2_3_ani');
            $('.sub_img_4').addClass('sub_2_4_ani');
            ba = 0;
        }
        console.log(ba);
    });

    $('.right_arrow').click(function () {
        $('.event_btn').removeClass('event_ani')
        $('.banner_text p,.banner_text h3').removeClass('trans');
        $('.cross').removeClass('cross_ani');
        $('.main_img').removeClass('main_ani');
        $('.sub_img_1').removeClass('sub_2_1_ani sub_3_1_ani sub_4_1_ani');
        $('.sub_img_2').removeClass('sub_2_2_ani sub_3_2_ani sub_4_2_ani');
        $('.sub_img_3').removeClass('sub_2_3_ani sub_3_3_ani sub_4_3_ani');
        $('.sub_img_4').removeClass('sub_2_4_ani sub_3_4_ani sub_4_4_ani');
        if (ba == 0) {
            $('.banner_con').stop().animate({
                left: -100 + '%',
            });
            $('.banner_btn li').removeClass('btn_active');
            $('.banner_btn li').eq(1).addClass('btn_active');
            // 이미지 트랜지션
            $('.event_btn').addClass('event_ani');
            $('.banner_text p,.banner_text h3').addClass('trans');
            $('.cross').addClass('cross_ani');
            $('.main_img').addClass('main_ani');
            $('.sub_img_1').addClass('sub_2_1_ani');
            $('.sub_img_2').addClass('sub_2_2_ani');
            $('.sub_img_3').addClass('sub_2_3_ani');
            $('.sub_img_4').addClass('sub_2_4_ani');
            ba = 3;
        } else if (ba == 1) {
            $('.banner_con').stop().animate({
                left: 0
            });
            $('.banner_btn li').removeClass('btn_active');
            $('.banner_btn li').eq(0).addClass('btn_active');
            // 이미지 트랜지션
            $('.event_btn').addClass('event_ani');
            $('.banner_text p,.banner_text h3').addClass('trans');
            ba--;
        } else if (ba == 2) {
            $('.banner_con').stop().animate({
                left: -300 + '%',
            });
            $('.banner_btn li').removeClass('btn_active');
            $('.banner_btn li').eq(3).addClass('btn_active');
            // 이미지 트랜지션
            $('.event_btn').addClass('event_ani');
            $('.banner_text p,.banner_text h3').addClass('trans');
            $('.cross').addClass('cross_ani');
            $('.main_img').addClass('main_ani');
            $('.sub_img_1').addClass('sub_4_1_ani');
            $('.sub_img_2').addClass('sub_4_2_ani');
            $('.sub_img_3').addClass('sub_4_3_ani');
            $('.sub_img_4').addClass('sub_4_4_ani');
            ba--;
        } else if (ba == 3) {
            $('.banner_con').stop().animate({
                left: -200 + '%',
            });
            $('.banner_btn li').removeClass('btn_active');
            $('.banner_btn li').eq(2).addClass('btn_active');
            // 이미지 트랜지션
            $('.event_btn').addClass('event_ani');
            $('.banner_text p,.banner_text h3').addClass('trans');
            $('.cross').addClass('cross_ani');
            $('.main_img').addClass('main_ani');
            $('.sub_img_1').addClass('sub_3_1_ani');
            $('.sub_img_2').addClass('sub_3_2_ani');
            $('.sub_img_3').addClass('sub_3_3_ani');
            $('.sub_img_4').addClass('sub_3_4_ani');
            ba--;
        }
    });//rightArrow end

    $('.banner').each(function (index) {
        $(this).attr('index-data', index);
    });//

    // banner btn
    $('.banner_btn li').each(function (index) {
        $(this).attr('index-data', index);
    }).click(function () {

        let b = $(this).attr('index-data');
        $('.event_btn').removeClass('event_ani')
        $('.banner_text p,.banner_text h3').removeClass('trans');
        $('.cross').removeClass('cross_ani');
        $('.main_img').removeClass('main_ani');
        $('.sub_img_1').removeClass('sub_2_1_ani sub_3_1_ani sub_4_1_ani');
        $('.sub_img_2').removeClass('sub_2_2_ani sub_3_2_ani sub_4_2_ani');
        $('.sub_img_3').removeClass('sub_2_3_ani sub_3_3_ani sub_4_3_ani');
        $('.sub_img_4').removeClass('sub_2_4_ani sub_3_4_ani sub_4_4_ani');
        $('.banner_btn li').removeClass('btn_active');
        $('.banner_btn li').eq(b).addClass('btn_active');
        if (b == 0) {
            $('.banner_con').stop().animate({
                left: 0
            });
            // 이미지 트랜지션
            $('.event_btn').addClass('event_ani');
            $('.banner_text p,.banner_text h3').addClass('trans');
        } else if (b == 1) {
            $('.banner_con').stop().animate({
                left: -100 + '%',
            });
            // 이미지 트랜지션
            $('.event_btn').addClass('event_ani');
            $('.banner_text p,.banner_text h3').addClass('trans');
            $('.cross').addClass('cross_ani');
            $('.main_img').addClass('main_ani');
            $('.sub_img_1').addClass('sub_2_1_ani');
            $('.sub_img_2').addClass('sub_2_2_ani');
            $('.sub_img_3').addClass('sub_2_3_ani');
            $('.sub_img_4').addClass('sub_2_4_ani');
        } else if (b == 2) {
            $('.banner_con').stop().animate({
                left: -200 + '%',
            });
            // 이미지 트랜지션
            $('.event_btn').addClass('event_ani');
            $('.banner_text p,.banner_text h3').addClass('trans');
            $('.cross').addClass('cross_ani');
            $('.main_img').addClass('main_ani');
            $('.sub_img_1').addClass('sub_3_1_ani');
            $('.sub_img_2').addClass('sub_3_2_ani');
            $('.sub_img_3').addClass('sub_3_3_ani');
            $('.sub_img_4').addClass('sub_3_4_ani');
        } else if (b == 3) {
            $('.banner_con').stop().animate({
                left: -300 + '%'
            });
            // 이미지 트랜지션
            $('.event_btn').addClass('event_ani');
            $('.banner_text p,.banner_text h3').addClass('trans');
            $('.cross').addClass('cross_ani');
            $('.main_img').addClass('main_ani');
            $('.sub_img_1').addClass('sub_4_1_ani');
            $('.sub_img_2').addClass('sub_4_2_ani');
            $('.sub_img_3').addClass('sub_4_3_ani');
            $('.sub_img_4').addClass('sub_4_4_ani');
        }
    });//banner btn end

    // mob_slide
    let $mobSlideWidth = $('.mob_slide').width(),
        $mobSlideCon = $('.mob_banner_con'),
        $mobNub = 0;

    $('.mob_prev').click(function () {
        if ($mobNub == 0) {
            $mobSlideCon.stop().animate({
                left: -$mobSlideWidth
            });
            $mobNub++;
        } else if ($mobNub == 1) {
            $mobSlideCon.stop().animate({
                left: -$mobSlideWidth * 2
            });
            $mobNub++;
        } else if ($mobNub == 2) {
            $mobSlideCon.stop().animate({
                left: -$mobSlideWidth * 3
            });
            $mobNub++;
        } else if ($mobNub == 3) {
            $mobSlideCon.stop().animate({
                left: -$mobSlideWidth * 0
            });
            $mobNub = 0;
        }
    });
    $('.mob_next').click(function () {
        if ($mobNub == 0) {
            $mobSlideCon.stop().animate({
                left: -$mobSlideWidth * 3
            });
            $mobNub = 3;
        } else if ($mobNub == 1) {
            $mobSlideCon.stop().animate({
                left: -$mobSlideWidth * 0
            });
            $mobNub--;
        } else if ($mobNub == 2) {
            $mobSlideCon.stop().animate({
                left: -$mobSlideWidth * 1
            });
            $mobNub--;
        } else if ($mobNub == 3) {
            $mobSlideCon.stop().animate({
                left: -$mobSlideWidth * 2
            });
            $mobNub--;
        }
    });
    // 자동슬라이드
    rightTrigger = () => {
        $('.right_arrow').trigger('click');
    }

    rightTriggerTimer = () => {
        setTimeout(rightTrigger);
    }

    setInterval(rightTriggerTimer, 5000);

    // 브랜드 리스트 버튼
    $('.brand_list_wrap').click(function () {
        $('.brand_list').toggleClass('active');
        $('.brand_list_wrap img').toggleClass('active');
    });//브랜드 리스트 버튼 end

    // 구매 버튼
    $('.pay_btn').hover(function () {
        $(this).find('img').attr({
            src: 'img/buy_hover.png'
        });
    }, function () {
        $(this).find('img').attr({
            src: 'img/buy.png'
        });
    });//구매 버튼 end
    // 카트버튼
    $('.cart_btn').hover(function () {
        $(this).find('img').attr({
            src: 'img/cart_hover.png'
        });
    }, function () {
        $(this).find('img').attr({
            src: 'img/cart.png'
        });
    });// 카트버튼 end

    // product more
    let txt = document.querySelector('.more_btn p');
    $('.best_wrap .more_btn').click(function () {
        $('.best_product_wrap').toggleClass('height_active');
        $(this).css({
            display: 'none'
        });
    });// product more end

    //newproduct slide
    //   newproduct slide left  
    let $newPro = 0,
        $newProSlide = $('.newproduct_slide').width(),
        $newProSlideWrap = $('.newproduct_slide_wrap').width();

    newProLeft = () => {
        $('.newproduct_arrow_left').click(function () {
            if ($newPro == 0) {
                $('.newproduct_slide_wrap').stop().animate({
                    // left: -1280
                    left: -$newProSlide * 1
                });
                $newPro++;
                console.log($newPro);
            } else if ($newPro == 1) {
                $('.newproduct_slide_wrap').stop().animate({
                    left: -$newProSlide * 2
                });
                $newPro++;
                console.log($newPro);
            } else if ($newPro == 2) {
                $('.newproduct_slide_wrap').stop().animate({
                    left: -$newProSlide * 3
                });
                $newPro++;
                console.log($newPro);
            } else if ($newPro == 3) {
                $('.newproduct_slide_wrap').stop().animate({
                    left: 0
                });
                $newPro = 0;
                console.log($newPro);
            }
        });//   newproduct slide left end
    }

    //   newproduct slide right
    newProRight = () => {
        $('.newproduct_arrow_right').click(function () {
            if ($newPro == 0) {
                $('.newproduct_slide_wrap').stop().animate({
                    left: -$newProSlide * 3
                });
                $newPro = 3;
            } else if ($newPro == 1) {
                $('.newproduct_slide_wrap').stop().animate({
                    left: -$newProSlide * 0
                });
                $newPro--;
            } else if ($newPro == 2) {
                $('.newproduct_slide_wrap').stop().animate({
                    left: -$newProSlide * 1
                });
                $newPro--;
            } else if ($newPro == 3) {
                $('.newproduct_slide_wrap').stop().animate({
                    left: -$newProSlide * 2
                });
                $newPro--;
            }
            console.log($newPro)
        });//   newproduct slide right end
    }
    //shop_btn

    $('.shop_cart_btn').hover(function () {
        $(this).find('img').attr({
            src: 'img/cart_hover.png'
        });
    }, function () {
        $(this).find('img').attr({
            src: 'img/cart.png'
        });
    });
    $('.shop_pay_btn').hover(function () {
        $(this).find('img').attr({
            src: 'img/buy_hover.png'
        });
    }, function () {
        $(this).find('img').attr({
            src: 'img/buy.png'
        });
    });//shop_btn end

    // recommeded btn
    let onCart = $('.recommended_list .on_cart_btn'),
        onPay = $('.recommended_list .on_pay_btn');

    onCart.hover(function () {
        $(this).find('img').attr({
            src: 'img/cart_orange.png'
        });
    }, function () {
        $(this).find('img').attr({
            src: 'img/cart_hover.png'
        });
    });
    onPay.hover(function () {
        $(this).find('img').attr({
            src: 'img/buy_orange.png'
        });
    }, function () {
        $(this).find('img').attr({
            src: 'img/buy_hover.png'
        });
    });// recommeded btn end

    // video_con
    let $video = $('.video_con .container'),
        $videoBtn = $('.video_btn_wrap').find('li');

    $video.each(function (index) {
        $(this).attr('video-index', index);
    });
    $videoBtn.each(function (index) {
        $(this).attr('video-index', index);
    }).click(function () {
        let $videoNub = $(this).attr('video-index');
        $video.removeClass('video_active');
        $video.eq($videoNub).addClass('video_active');
        $videoBtn.removeClass('video_btn_active');
        $videoBtn.eq($videoNub).addClass('video_btn_active');
    });

    // sns slide
    let $snsPrev = $('.sns_prev'),
        $snsNext = $('.sns_next'),
        $snsWrap = $('.sns_wrap'),
        $snsWidth = $('.sns_slide').width(),
        $snsLength = $('.sns_slide').length,
        $snsNub = 0,
        $snsMarginRight = 30;

    $snsPrev.click(function () {
        if ($snsNub == 0) {
            $snsWrap.stop().animate({
                left: -($snsWidth + $snsMarginRight)
            });
            $snsNub++;
        } else if ($snsNub == 1) {
            $snsWrap.stop().animate({
                left: -($snsWidth * 2 + $snsMarginRight * 2)
            });
            $snsNub++;
        } else if ($snsNub == 2) {
            $snsWrap.stop().animate({
                left: ($snsWidth + $snsMarginRight)
            });
            $snsNub++;
        } else if ($snsNub == 3) {
            $snsWrap.stop().animate({
                left: 0
            });
            $snsNub = 0;
        }
        console.log($snsNub);
    });
    $snsNext.click(function () {
        if ($snsNub == 0) {
            $snsWrap.stop().animate({
                left: ($snsWidth + $snsMarginRight)
            });
            $snsNub = 3;
        } else if ($snsNub == 1) {
            $snsWrap.stop().animate({
                left: 0,
            });
            $snsNub--;
        } else if ($snsNub == 2) {
            $snsWrap.stop().animate({
                left: -($snsWidth + $snsMarginRight)
            });
            $snsNub--;
        } else if ($snsNub == 3) {
            $snsWrap.stop().animate({
                left: -($snsWidth * 2 + $snsMarginRight * 2)
            });
            $snsNub--;
        }
        console.log($snsNub);
    });// sns slide end

    // sns icon
    snsIcon = () => {
        $('.facebook').hover(function () {
            $(this).find('img').attr({
                src: 'img/sns_facebook_hover.png'
            });
        }, function () {
            $(this).find('img').attr({
                src: 'img/sns_facebook.png'
            });
        });
        $('.instar').hover(function () {
            $(this).find('img').attr({
                src: 'img/sns_instar_hover.png'
            });
        }, function () {
            $(this).find('img').attr({
                src: 'img/sns_instar.png'
            });
        });
    }
    kakao = () => {
        $('.kakao').hover(function () {
            $('.kakao_img').attr({
                src: 'img/sns_kakao_hover.png'
            });
            $('.kakao_pop').css({
                display: 'block'
            });
            $('.kakao_pop').stop().animate({
                opacity: 1,

            }, 400);
        }, function () {
            $('.kakao_img').attr({
                src: 'img/sns_kakao.png'
            });
            $('.kakao_pop').stop().animate({
                opacity: 0,
            }, 400);
            $('.kakao_pop').css({
                display: 'none'
            });
        });// sns icon end
    }
    kakaoStop = () => {
        $('.kakao').hover(function () {
            $('.kakao_img').attr({
                src: 'img/sns_kakao_hover.png'
            });
            $('.kakao_pop').css({
                display: 'none'
            });
        }, function () {
            $('.kakao_img').attr({
                src: 'img/sns_kakao.png'
            });
            $('.kakao_pop').css({
                display: 'none'
            });
        });
    }
    // init
    present();

    // 반응형
    let $winWidth = $(window).width();

    if ($winWidth >= 1280) { //pc
        newProLeft();
        newProRight();
        snsIcon();
        kakao();
        presentOn();
    } else if ($winWidth < 768) { //mob
        newProLeft();
        newProRight();
        snsIcon();
        kakaoStop();
        presentOff();

    } else { //tab
        newProLeft();
        newProRight();
        snsIcon();
        kakao();
        presentOn();
    }
    //resize
    $(window).resize(function () {
        let $newPro = 0,
            $newProSlide = $('.newproduct_slide').width(),
            $newProSlideWrap = $('.newproduct_slide_wrap').width(),
            $winWidth = $(window).width();

        if ($winWidth >= 1280) { //pc
            newProLeft();
            newProRight();
            snsIcon();
            kakao();
            presentOn();

        } else if ($winWidth < 768) { //mob
            newProLeft();
            newProRight();
            snsIcon();
            kakaoStop();
            presentOff();
        } else { //tab
            newProLeft();
            newProRight();
            snsIcon();
            kakao();
            presentOn();
        }//resize end
        // 반응형 end

    });
    // swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 480px
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is >= 640px
            1280: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        }
    });




});//