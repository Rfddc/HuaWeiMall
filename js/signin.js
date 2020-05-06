$(function () {
  // $('.main_right_input').on('click', function () {
  //     $(this).css({
  //         "border": '1px solid #007dff'

  //     })
  // })
  // $('.main_right_input').on("mouseout", function () {
  //     $(this).css({
  //         "border": '1px solid #f2f2f2'
  //     })
  // })

  // $('.main_right_input').onblur = function () {
  //     $(this).css({
  //         "border": '1px solid #f2f2f2'
  //     })
  // }

  $(".main_right_input>input").focus(function () {
    $(".main_right_input").css({
      "border": "1px solid #4990ed",
    });
  });

  $(".main_right_input>input").blur(function () {
    $(".main_right_input").css({
      "border": "1px solid #f2f2f2",
    });
  });
  $(".main_right_password>input").focus(function () {
    $(".main_right_password").css({
      "border": "1px solid #4990ed",
    });
  });

  $(".main_right_password>input").blur(function () {
    $(".main_right_password").css({
      "border": "1px solid #f2f2f2",
    });
  });
});
