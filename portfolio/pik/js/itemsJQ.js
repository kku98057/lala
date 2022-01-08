$(document).ready(function () {
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
                src: "../img/sloperose_2.png"
            })
            $('.search_img').css({
                width: '35px'
            });
            a++;
        } else if (a == 1) {
            $('.search_img > img').attr({
                src: "../img/zanarose_2.png"
            })
            $('.search_img').css({
                width: '40px'
            });
            a++;
        } else if (a == 2) {
            $('.search_img > img').attr({
                src: "../img/5streetrose_2.png"
            })
            $('.search_img').css({
                width: '50px'
            });
            a = 0;
        }
    });

    // popup

    
        $('.items_s4 .container').addClass('checkpop');
        $('.checkpop img').click(function () {
            $('.popup').css({
                display: 'block',
            });
            $('body').css({
                overflowY: 'hidden'
            });
        });
        $('.popup').click(function () {
            $('.popup').css({
                display: 'none',
            });
            $('body').css({
                overflowY: 'scroll'
            });
        });

    

});