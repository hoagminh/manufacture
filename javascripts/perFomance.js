
let addedAnimaForPageSpeed = false
let pageSpeedIntervalId = undefined
let targetPageSpeed = 97
let startPageSpeed = 0

let addedAnimaForYSlow = false
let YSlowIntervalId = undefined
let targetYSlow = 89
let startYSlow = 0

window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset + window.innerHeight
    let pageSpeedElement = document.getElementById('pageSpeedJS')
    if (pageSpeedElement) {
        let offsetTop = pageSpeedElement.offsetTop
        if (addedAnimaForPageSpeed == false && scrollY > offsetTop) {
            pageSpeedElement.classList.add('animation-1')
            let spanWiget = document.getElementById('pageSpeedSpanJS')
            pageSpeedIntervalId = setInterval(() => {
                startPageSpeed += 1
                if (spanWiget) {
                    spanWiget.innerText = startPageSpeed > targetPageSpeed ? targetPageSpeed + '%' : startPageSpeed + '%'
                }
                if (startPageSpeed >= targetPageSpeed) {
                    clearInterval(pageSpeedIntervalId)
                }
            }, 25)
            addedAnimaForPageSpeed = true
        }
        if (addedAnimaForPageSpeed == true && scrollY < offsetTop) {
            pageSpeedElement.classList.remove('animation-1')
            startPageSpeed = 0
            addedAnimaForPageSpeed = false
        }
    }

    let preBuildElement = document.getElementById('YSlowJS')
    if (preBuildElement) {
        let offsetTop = preBuildElement.offsetTop
        if (addedAnimaForYSlow == false && scrollY > offsetTop) {
            preBuildElement.classList.add('animation-2')
            let spanWiget = document.getElementById('YSlowSpanJS')
            YSlowIntervalId = setInterval(() => {
                startYSlow += 1
                if (spanWiget) {
                    spanWiget.innerText = startYSlow > targetYSlow ? targetYSlow + '%' : startYSlow + '%'
                }
                if (startYSlow >= targetYSlow) {
                    clearInterval(YSlowIntervalId)
                }
            }, 25)
            addedAnimaForYSlow = true
        }
        if (addedAnimaForYSlow == true && scrollY < offsetTop) {
            preBuildElement.classList.remove('animation-2')
            startYSlow = 0
            addedAnimaForYSlow = false
        }
    }
})