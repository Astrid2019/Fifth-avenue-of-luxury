var currentIndex = 0;

function slideTo(index) {
    console.log(index)
    var liW = document.querySelector(`.guessYouLike li`).offsetWidth
    let list = document.querySelector(`.guessYouLike`)

    if (index === 4) {
        list.style.transitionDuration = '0s';
        list.style.left = 0;
        currentIndex = 1;
        setTimeout(() => {
            list.style.transitionDuration = ''
            list.style.left = -liW + 'px'
        }, 50)

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

        return;

    }

    var left = -index * liW
    document.querySelector(`.guessYouLike`).style.left = left + 'px'
    console.log(currentIndex)
    if (currentIndex < 3) {
        focusIndex = currentIndex;
    } else {
        focusIndex = 0
    }
  
}

function slideNext() {
    currentIndex++;
    slideTo(currentIndex)
    
}

function slidePrev() {
    currentIndex--;
    slideTo(currentIndex)
  
}

document.querySelector(`.likeBtn .prev`).onclick = function () {
    slidePrev();
    

}

document.querySelector(`.likeBtn .next`).onclick = function () {
    slideNext();
    

}