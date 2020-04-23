$(function () {
    // 淡入淡出的效果
    $('#btn_a').on('click', function () {
        // $(this).css("color", "#a2a2a2")
        $('#unit').stop(true, false).animate({
            "left": 0,
            "color": "#a2a2a2",
            "cursor": "pointer"
        }, 500);
    })
    $('#btn_b').on('click', function () {
        $(this).css("color", "#4c4c4c")
        $('#unit').stop(true, false).animate({
            "left": -115
        }, 500);
    })



});