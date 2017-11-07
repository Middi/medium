$(function () {
    // click on the modal to close
    $('#modal').click(function () {
        $('#modal').fadeOut(400);
    });

    // Open modal
    $('#mimg').click(function (e) {
        // Used to stop the event bubbling   
        e.stopImmediatePropagation();
        // change cursor
        $('img').css('cursor', 'zoom-in');
        $('#modal').fadeOut(400);
    });

    // Used to stop the event bubbling
    $('img').on('click', function (e) {
        // Used to stop the event bubbling  
        e.stopPropagation();
        // get src of image
        var src = $(this).attr('src');
        // set src for image
        $('#mimg').attr('src', src);
        // change cursor
        $('img').css('cursor', 'zoom-out');
        $('#modal').fadeIn(400);
    });

});