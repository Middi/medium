$(function () {

  // variables
  var write = $('.write-response');
  var user = $('.response-user');

  // username fade in
  function complete() {
    user.fadeIn(300);
  };
  // write response fade in
  function completeOut() {
    write.fadeIn(300);
  };

    // slide down text area
  $('#write-comment').click(function (e) {
    e.stopPropagation();
    $('.text-area-div').slideDown('slow');
    write.fadeOut(200, complete);
    $('.text-area').focus();
  });

  // hide the "text-area-div" by clicking outside container
  $(document).click(function () {
    $('.text-area-div').slideUp('slow');
    user.fadeOut(200, completeOut);
  });
  // hide the "text-area-div" by clicking on section for mobile
  $('#footer-grey').click(function () {
    $('.text-area-div').slideUp('slow');
    user.fadeOut(200, completeOut);
  });
  
});