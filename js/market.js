
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