$(function () {

    $('.nav_home_ul li').mouseenter(function () {
        var dname = $(this).data('name')
        if (!$(this).hasClass('noslide')) {
   
            $('.nav_home_list_ycbox').stop().slideDown()
            // 获取到的dname和哪个id相同
            $('.nav_home_list_ycbox ul').each(function (index, item) {
                if ($(item).attr('id') === dname) {
                    // 这个对应下面的ul也显示出来
                    // $(item).stop().slideDown().siblings().stop().slideUp()
                    $(item).css("display","block").siblings().css("display","none")
                    // break;
                    return false;
                }
            })
        } else {
            $('.nav_home_list_ycbox').stop().slideUp()
        }
    })
    // 离开包2个盒子的最大盒子
    $('.nav_home_text').mouseleave(function () {
        $('.nav_home_list_ycbox').stop().slideUp()
    })


    // 固定导航
    let boxTop = $('.online_nav').offset().top;
    // jQuery版本
    // 1.给window添加一个滚轮事件
    $(document).scroll(function () {
        // console.log(1111);
        // 2.对比看看页面跑出去的高度是不是 大于box2距离顶部的高度 如果是 那么就固定
        console.log($(document).scrollTop(), $('.online_nav').offset().top)

        if ($(document).scrollTop() >= boxTop) {
            $('.online_nav').css({
                'position': 'fixed',
                'top': 0
            })
        } else {
            // 3.否则不固定
            $('.online_nav').css({
                'position': 'static'
            })
        }
    })
})