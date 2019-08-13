
function shoes(className1,className2) {
    var currentIndex = 0;
    function slideTo(index) {
        console.log(index)
        var liW = document.querySelector(`.${className1} li`).offsetWidth
        let list = document.querySelector(`.${className1}`)
        var focusIndex;

        if (index === 4) {
            list.style.transitionDuration = '0s';
            list.style.left = 0;
            currentIndex = 1;
            setTimeout(() => {
                list.style.transitionDuration = ''
                list.style.left = -liW + 'px'
            }, 50)
            document.querySelector(`.${className2} .pagination li.focus`).className = '';
            document.querySelectorAll(`.${className2} .pagination li`)[1].className = 'focus'

            return;
        }

        if (index === -1) {
            list.style.transitionDuration = '0s';
            list.style.left = -3 * liW + 'px'
            currentIndex = 2
            setTimeout(() => {
                list.style.transitionDuration = ''
                list.style.left = -2 * liW + 'px'
            }, 50)

            document.querySelector(`.${className2} .pagination li.focus`).className = '';
            document.querySelectorAll(`.${className2} .pagination li`)[2].className = 'focus'

            return;

        }

        var left = -index * liW
        document.querySelector(`.${className1}`).style.left = left + 'px'
        console.log(currentIndex)
        if (currentIndex < 3) {
            focusIndex = currentIndex;
        } else {
            focusIndex = 0
        }
        console.log(focusIndex)
        document.querySelector(`.${className2} .pagination li.focus`).className = '';
        document.querySelectorAll(`.${className2} .pagination li`)[focusIndex].className = 'focus'
    }

    function slideNext() {
        currentIndex++;
        slideTo(currentIndex)
    }

    function slidePrev() {
        currentIndex--;
        slideTo(currentIndex)
    }

    document.querySelector(`.${className2} .prev`).onclick = function () {
        slidePrev();
    }

    document.querySelector(`.${className2} .next`).onclick = function () {
        slideNext();
    }

    var lis = document.querySelectorAll(`.${className2} .pagination li`);
    for (let i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            slideTo(i);
            document.querySelector(`.${className2} .pagination li.focus`).className = "";
            document.querySelectorAll(`.${className2} .pagination li`)[i].className = "focus"
        }
    }
}

shoes("timepieces","timepBtn");
shoes("classicBags","bagsBtn");
shoes("accessSlider","accessBtn");
shoes("cosmSlider","cosmBtn");
shoes("apparelSlider","apparelBtn");