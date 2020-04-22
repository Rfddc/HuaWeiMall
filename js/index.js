$(function () {
  // 关闭头部的广告
  $(".vmall_ad_x").on("click", function () {
    $(".vmall_ad").css("display", "none");
    $(".vmall_ad").hide();
  });
  // bug*1   导航栏
  $(".more_nb>ul").on("mouseover", function () {
    $("#mor>a").css("color", "#ca151d");
  });
  $(".more_nb>ul").on("mouseout", function () {
    $("#mor>a").css("color", "#afa27f");
  });
  // 右边的导航栏
 
  
});
