$(function () {

  var write = $('.write-response');
  var user = $('.response-user');

  function complete() {
    user.fadeIn(300);
  };

  function completeOut() {
    write.fadeIn(300);
  };

  $('#write-comment').click(function (e) {

    // Used to stop the event bubbling..
    e.stopPropagation()
    $('.text-area-div').slideDown('slow');
    write.fadeOut(200, complete);
    $('.text-area').focus();
  });

  // Hide the "text-area-div" by clicking outside container
  $(document).click(function () {
    $('.text-area-div').slideUp('slow');
    user.fadeOut(200, completeOut);
  });

});