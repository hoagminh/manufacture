


let slides = document.querySelectorAll('#carouselJS .slideJS')

let preBtn = document.getElementById('preBtnJS')
if (preBtn && slides) {
    preBtn.addEventListener('click', () => {
        slides.forEach(slide => {
            console.log([...slide.classList])
            if ([...slide.classList].includes('preSlide')) {
                slide.classList.remove('preSlide')
                slide.classList.add('hidePreSlide')
            }
        })
    })
}

let nextBtn = document.getElementById('nextBtnJS')
if (nextBtn && slides) {
    nextBtn.addEventListener('click', () => {
        console.log('click right')
    })
}