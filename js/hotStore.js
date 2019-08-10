// 热门旗舰店轮播
(function hotStore() {
    var currentIndex = 0;

    function slideTo(index) {
        var hotStoreW = document.querySelector('#hotStore li').offsetWidth;
        console.log(hotStoreW)
        var hotStore = document.querySelector('#hotStore');
        console.log(hotStore)

        
        var left = -index * hotStoreW
        console.log(left)
        hotStore.style.left = left + 'px'
    }

    function slideNext() {
        if (currentIndex < 2) {
            currentIndex++;
        }
        slideTo(currentIndex)
        console.log(currentIndex)
    }

    function slidePrev() {
        if (currentIndex > 0) {
            currentIndex--;
        }

        slideTo(currentIndex)
        console.log(currentIndex)
    }

    document.querySelector('.hot_pre').onclick = function () {
        slidePrev();
    }

    document.querySelector('.hot_next').onclick = function () {
        slideNext();
    }

})()
