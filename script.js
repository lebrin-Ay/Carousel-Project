let slidePosition = 0;

const slideShow = document.getElementsByClassName('slideshow');

const totalSlides = slideShow.length;

// console.log(totalSlides); To get the total images/slides

//When the next button is clicked
document.getElementById('btn-prev').addEventListener("click", function() {
    moveToPreviousSlide();
});

document.getElementById('btn-next').addEventListener("click", function() {
    moveToNextSlide();
});

//To move to other slides create a function 
function addSlide () {
    for (let slide of slideShow) {
        slide.classList.remove('first-slideshow');
        slide.classList.add('first-slideshow--hidden');
    }
    slideShow[slidePosition].classList.add('first-slideshow');
}

function moveToPreviousSlide() {
    // console.log('Move')
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    }
    else {
        slidePosition++;
    }

    addSlide();
}
moveToPreviousSlide();

function moveToNextSlide() {
    // console.log('Move')
    if (slidePosition === totalSlides) {
        slidePosition = totalSlides - 1;
    }
    else {
        slidePosition++;
    }

    addSlide();
}
moveToNextSlide();