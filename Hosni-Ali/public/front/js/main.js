
$(document).ready(function () {
    $(window).scroll(function() {
        var hT = $('#sec-12').offset().top,
            hH = $('#sec-12').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-wH)){
            $('#fixed').fadeOut(200)
        }else{
            $('#fixed').fadeIn(200)
        }
    });

    $(window).on('load',function () {
        $('#loading').fadeOut(200);
    })
});

