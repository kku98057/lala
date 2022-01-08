$(document).ready(function () {

    //  index_s1

    $('.s4_items_wrap').each(function (index) {
        $(this).attr('index-data', index);
    });
    $('.s4_color .list').each(function (index) {
        $(this).attr('index-data', index);
    }).click(function () {

        let a = $(this).attr('index-data');
        $('.s4_items_wrap').removeClass('color_showing');
        $('.s4_items_wrap').eq(a).addClass('color_showing');

        $('.s4_color .list').removeClass('border_showing');
        $('.s4_color .list').eq(a).addClass('border_showing');


    });
    //  index_1_btn
    $('.itemsall > .s4_more_btn').click(function () {
        let b = $(this).attr('index-data2');
        $('.itemsall .s4_items').removeClass('btn_showing');
        $('.itemsall .s4_items').addClass('btn_showing');
        $(this).css({
            display: 'none'
        });
    });
    $('.itemsred > .s4_more_btn').click(function () {
        let b = $(this).attr('index-data2');
        $('.itemsred .s4_items').removeClass('btn_showing');
        $('.itemsred .s4_items').addClass('btn_showing');
        $(this).css({
            display: 'none'
        });
    });
    $('.itemspink > .s4_more_btn').click(function () {
        let b = $(this).attr('index-data2');
        $('.itemspink .s4_items').removeClass('btn_showing');
        $('.itemspink .s4_items').addClass('btn_showing');
        $(this).css({
            display: 'none'
        });
    });
    $('.itemspurple > .s4_more_btn').click(function () {
        let b = $(this).attr('index-data2');
        $('.itemspurple .s4_items').removeClass('btn_showing');
        $('.itemspurple .s4_items').addClass('btn_showing');
        $(this).css({
            display: 'none'
        });
    });
    $('.itemsblue > .s4_more_btn').click(function () {
        let b = $(this).attr('index-data2');
        $('.itemsblue .s4_items').removeClass('btn_showing');
        $('.itemsblue .s4_items').addClass('btn_showing');
        $(this).css({
            display: 'none'
        });
    });
    $('.itemsgreen > .s4_more_btn').click(function () {
        let b = $(this).attr('index-data2');
        $('.itemsgreen .s4_items').removeClass('btn_showing');
        $('.itemsgreen .s4_items').addClass('btn_showing');
        $(this).css({
            display: 'none'
        });
    });
    $('.itemsyellow > .s4_more_btn').click(function () {
        let b = $(this).attr('index-data2');
        $('.itemsyellow .s4_items').removeClass('btn_showing');
        $('.itemsyellow .s4_items').addClass('btn_showing');
        $(this).css({
            display: 'none'
        });
    });
    $('.itemswhite > .s4_more_btn').click(function () {
        let b = $(this).attr('index-data2');
        $('.itemswhite .s4_items').removeClass('btn_showing');
        $('.itemswhite .s4_items').addClass('btn_showing');
        $(this).css({
            display: 'none'
        });
    });

    // index_s3

    $('.s3_items_wrap').each(function (index) {
        $(this).attr('index-data', index);
    });
    $('.s3_slide .menu_wrap li').each(function (index) {
        $(this).attr('index-data', index);
    }).click(function () {

        let a = $(this).attr('index-data');


        $('.s3_items_wrap').removeClass('showing');
        $('.s3_items_wrap').eq(a).addClass('showing');


    });

    //items s1 



        $('.bigimg').each(function (index) {
            $(this).attr('index-data', index);
        });
        $('.small_img').each(function (index) {
            $(this).attr('index-data', index);
        }).click(function () {
            let b = $(this).attr('index-data');
            $('.bigimg').removeClass('big_showing');
            $('.bigimg').eq(b).addClass('big_showing');
        });


       

    
    //  pc_search
    let a = 0;
    $('.search_img').click(function () {

        if (a == 0) {
            $('.search_img > img').attr({
                src: "img/sloperose_2.png"
            })
            $('.search_img').css({
                width: '35px'
            });
            a++;
        } else if (a == 1) {
            $('.search_img > img').attr({
                src: "img/zanarose_2.png"
            })
            $('.search_img').css({
                width: '40px'
            });
            a++;
        } else if (a == 2) {
            $('.search_img > img').attr({
                src: "img/5streetrose_2.png"
            })
            $('.search_img').css({
                width: '50px'
            });
            a = 0;
        }
    });

    // popup
    




});
