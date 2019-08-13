(function sliderBanner() {

    var listW = document.querySelector(".slider .list");
    var listLiW = document.querySelectorAll(".slider .list li");
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
        var liW = document.querySelector('.slider .list li').offsetWidth;
        // console.log(liW)
        let list = document.querySelector('.slider .list')
        var focusIndex;

        if (index === 8) {
            list.style.transitionDuration = '0s';
            list.style.left = 0;
            currentIndex = 1;
            setTimeout(() => {
                list.style.transitionDuration = '' 

                list.style.left = -liW + 'px'
            }, 50)
            document.querySelector('.slider .focus').className = '';
            document.querySelectorAll('.slider .pagination li')[1].className = 'focus'

            return;
        }

        if (index === -1) {
            list.style.transitionDuration = '0s';
            list.style.left = -4 * liW + 'px'
            currentIndex = 6
            setTimeout(function () {
                list.style.transitionDuration = '' 
                list.style.left = -3 * liW + 'px'
            }, 50)

            document.querySelector('.slider .focus').className = '';
            document.querySelectorAll('.slider .pagination li')[6].className = 'focus'

            return;

        }

        var left = -index * liW
        document.querySelector('.slider .list').style.left = left + 'px'
        if (currentIndex < 7) {
            focusIndex = currentIndex;
        } else {
            focusIndex = 0
        }
        document.querySelector('.slider .focus').className = '';
        document.querySelectorAll('.slider .pagination li')[focusIndex].className = 'focus'
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

    document.querySelector('.slider .prev').onclick = function () {
        slidePrev();
    }

    document.querySelector('.slider .next').onclick = function () {
        slideNext();
    }

    var lis = document.querySelectorAll('.slider .pagination li');
    // console.log(lis)
    for (let i = 0; i < lis.length; i++) {
        lis[i].onmousedown = function () {
            slideTo(i);
            countIndex = i;
            document.querySelector('.slider .focus').className = '';
            document.querySelectorAll('.slider .pagination li')[countIndex].className = 'focus'
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