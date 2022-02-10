// This is the eventlistener for developer card to flip
const card = document.querySelector(".card__inner")

card.addEventListener("click", function () {
    card.classList.toggle("is-flipped")
})

// This is where the carousel function starts
const track = document.querySelector(".carousel__track")
const slides = Array.from(track.children)
const nextBtn = document.querySelector(".carousel__button--right")
const prevBtn = document.querySelector(".carousel__button--left")
const dotNav = document.querySelector(".carousel__nav")
const dots = Array.from(dotNav.children)
const slidSize = slides[0].getBoundingClientRect().width
const currentSlide = track.querySelector(".current-slide")
const currentDot = dotNav.querySelector(".current-slide")

//Arrange slides side by side
const setSlidePostition = (slide, index) => {
    slides.style.left = slideWidth * index + "px"
}

slides.forEach(setSlidePostition)

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")"
    currentSlide.classList.remove("current-slide")
    targetSlide.classList.add("current-slide")
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove("current-slide")
    targetDot.classList.add("current-slide")
}

//Move to left
prevBtn.addEventListener("click", e => {
    const prevSlide = currentSlide.previousElementSibling
    const prevDot = currentDot.previousElementSibling
    moveToSlide = (track, currentSlide, prevSlide)
    updateDots = (currentDot, prevDot)
})

//Move to right
nextBtn.addEventListener("click", e => {
    const nextSlide = currentSlide.nextElementSibling
    const nextDot = currentDot.nextElementSibling
    moveToSlide = (track, currentSlide, nextSlide)
    updateDots = (currentDot, nextDot)
})

//Move to slide
dotNav.addEventListener("click", e => {
    const targetDot = e.target.closest("button")

    if (!targetDot) return

    const targetIndex = dots.findIndex(dot => dot === targetDot)
    const targetSlide = slides[targetIndex]

    moveToSlide = (track, currentSlide, targetSlide)
    updateDots = (currentDot, targetDot)
})

function loopProjects() {
    if (targetSlide === null) {
        //https://www.youtube.com/watch?v=gBzsE0oieio
    }
}