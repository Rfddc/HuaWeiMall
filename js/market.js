$(function () {
  // 筋斗云
  function getStyle(element, attr) {
    if (window.getComputedStyle) {
      return window.getComputedStyle(element, null)[attr];
    } else {
      return element.currentStyle[attr];
    }
  }

  function animate(element, attrObj) {
    clearInterval(element.timer);
    element.timer = setInterval(function () {
      for (let attr in attrObj) {
        let current = parseInt(getStyle(element, attr));
        let target = attrObj[attr];
        let step = parseInt(target - current) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        current += step;
        element.style[attr] = current + 'px';

        if (current == target) {
          clearInterval(element.timer)
        }
      }
    }, 20)
  }
  var cloud = document.querySelector('#cloud')
  var lis = document.querySelectorAll("#navBar>li")
  var position = 0;

  for (let i = 0; i < lis.length; i++) {
    lis[i].onmouseover = function () {
      var leftvalue = this.offsetLeft;
      animate(cloud, {
        "left": leftvalue
      })
    }
    lis[i].onmouseout = function () {
      animate(cloud, {
        "left": position
      })
    }
    lis[i].onclick = function () {
      position = this.offsetLeft
      animate(cloud, {
        "left": position
      })
    }
  }
  // 鼠标离开事件

  $('.banking_one_box_a').on("mouseover", function () {
    $(this).css("display", "block")
  })
  $('.banking_one_box_a').on("mouseout", function () {
    $(this).css("display", "none")
    $('.banking_one_box_a_aa').css("display","block")
  })





})