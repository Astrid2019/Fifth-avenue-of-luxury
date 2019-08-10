(function sliderBanner() {

    var listW = document.querySelector(".list");
    var listLiW = document.querySelectorAll(".list li");
    var sliderW = document.querySelector(".slider");
    var bodyW = document.body.clientWidth;
    for (var i = 0; i < listLiW.length; i++) {
        listLiW[i].style.width = bodyW + "px";
    }
    sliderW.style.width = bodyW + "px";
    listW.style.width = bodyW * 8 + "px";

    var currentIndex = 0;

    function slideTo(index) {
        // console.log(index)
        var liW = document.querySelector('.list li').offsetWidth;
        // console.log(liW)
        let list = document.querySelector('.list')
        var focusIndex;

        if (index === 8) {
            //下面四部在执行时，浏览器并没有机会对其描绘，所以
            //浏览器进行优化操作，将连续修改的属性，只使用最后设定的那个
            //所以中间的赋值过程，被优化掉了
            //  解决方案：在第一次修改完属性之后，做一个延时操作，再执行第二次修改，这样浏览器就有机会描绘第一次的赋值
            //  1. 去掉ul的过渡
            list.style.transitionDuration = '0s';
            //  2. 设定left值为0
            list.style.left = 0;
            currentIndex = 1;
            setTimeout(() => {
                //  3. 加上过渡
                list.style.transitionDuration = '' //删除了行内的过渡，使用选择器内的过渡
                //  4. 过渡到真1
                list.style.left = -liW + 'px'
            }, 50)
            document.querySelector('.focus').className = '';
            document.querySelectorAll('.pagination li')[1].className = 'focus'

            return;
        }

        if (index === -1) {
            //  1. 去掉ul的过渡
            list.style.transitionDuration = '0s';
            //  2. 设定left值为
            list.style.left = -4 * liW + 'px'
            currentIndex = 6
            setTimeout(function () {
                //  3. 加上过渡
                list.style.transitionDuration = '' //删除了行内的过渡，使用选择器内的过渡
                //  4. 过渡到真1
                list.style.left = -3 * liW + 'px'
            }, 50)

            document.querySelector('.focus').className = '';
            document.querySelectorAll('.pagination li')[6].className = 'focus'

            return;

        }

        var left = -index * liW
        document.querySelector('.list').style.left = left + 'px'
        if (currentIndex < 7) {
            focusIndex = currentIndex;
        } else {
            focusIndex = 0
        }
        document.querySelector('.focus').className = '';
        document.querySelectorAll('.pagination li')[focusIndex].className = 'focus'
    }

    function slideNext() {
        currentIndex++;
        slideTo(currentIndex)
    }

    function slidePrev() {
        currentIndex--;
        slideTo(currentIndex)
    }

    function autoplay() {
        id = setInterval(() => {
            slideNext()
        }, 3000)
    }

    function stop() {
        clearInterval(id)
    }

    document.querySelector('.prev').onclick = function () {
        slidePrev();
    }

    document.querySelector('.next').onclick = function () {
        slideNext();
    }

    var lis = document.querySelectorAll('.pagination li');
    for (let i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            slideTo(i);
        }
    }

    autoplay();
    document.querySelector('.slider').onmouseover = function () {
        stop()
    }
    document.querySelector('.slider').onmouseout = function () {
        autoplay()
    }

})()

