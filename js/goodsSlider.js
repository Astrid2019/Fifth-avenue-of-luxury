(function () {
    var currentIndex = 0;

    function slideTo(index) {
        if (index === 4) {
            currentIndex = index = 0;
        }

        if (index === -1) {
            currentIndex = index = 3;
        }

        document.querySelector('.current').className = '';
        document.querySelectorAll('.list li')[index].className = 'current';

        //设定焦点
        document.querySelector('.focus').className = ''
        document.querySelectorAll('.pagination li')[index].className = 'focus'
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


    //数组的解构赋值
    var [prev, next] = document.querySelectorAll('.btn')

    prev.onclick = function () {
        slidePrev();
    }
    next.onclick = function () {
        slideNext();
    }

    var bullets = document.querySelectorAll('.pagination li')

    for (let i = 0; i < bullets.length; i++) {
        bullets[i].onmouseenter = function () {
            currentIndex = i;
            slideTo(i)
        }
    }

    var id;

    autoplay();



    document.querySelector('.slider').onmouseover = function () {
        stop()
    }
    document.querySelector('.slider').onmouseout = function () {
        autoplay()
    }
})()