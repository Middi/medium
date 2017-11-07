$(function () {
    // click on the modal to close
    $('#modal').click(function () {
        $('#modal').fadeOut(400);
    });

    // Open modal
    $('#mimg').click(function (e) { 
        e.stopImmediatePropagation();
        $('img').css('cursor', 'zoom-in');
        $('#modal').fadeOut(400);
    });

    // get image 
    $('img').on('click', function (e) {
        e.stopPropagation();
        // get src of image
        var src = $(this).attr('src');
        // set src for image
        $('#mimg').attr('src', src);
        $('img').css('cursor', 'zoom-out');
        $('#modal').fadeIn(400);
    });

});