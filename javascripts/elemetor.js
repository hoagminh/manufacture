let addedAnimaForLogo = false
let addedAnimaForTextWordPress = false
let addedAnimaForWiget = false
let wigetIntervalId = undefined
let targetWiget = 50
let startWiget = 0

let addedAnimaForFreeBuild = false
let freeBuildIntervalId = undefined
let targetFreeBuild = 40
let startFreeBuild = 0

let addedAnimaForPreBuild = false
let preBuildIntervalId = undefined
let targetPreBuild = 150
let startpreBuild = 0

let addedAnimaForImageContainer = false

window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset + window.innerHeight
    let logoElement = document.getElementById('logoJS')
    if (logoElement) {
        let offsetTop = logoElement.offsetTop
        if (addedAnimaForLogo == false && scrollY > offsetTop) {
            logoElement.classList.add('addAnimationForLogo')
            addedAnimaForLogo = true
        }
        if (addedAnimaForLogo == true && scrollY < offsetTop) {
            logoElement.classList.remove('addAnimationForLogo')
            addedAnimaForLogo = false
        }
    }
    let textWordPreassElement = document.getElementById('wordPressPageBuilderJS')
    if (textWordPreassElement) {
        let offsetTop = textWordPreassElement.offsetTop
        if (addedAnimaForTextWordPress == false && scrollY > offsetTop) {
            textWordPreassElement.classList.add('addAnimationForTextWordPress')
            addedAnimaForTextWordPress = true
        }
        if (addedAnimaForTextWordPress == true && scrollY < offsetTop) {
            textWordPreassElement.classList.remove('addAnimationForTextWordPress')
            addedAnimaForTextWordPress = false
        }
    }
    let wigetElement = document.getElementById('wigetJS')
    if (wigetElement) {
        let offsetTop = wigetElement.offsetTop
        if (addedAnimaForWiget == false && scrollY > offsetTop) {
            wigetElement.classList.add('wiget-animation')
            let spanWiget = document.getElementById('wigetSpanJS')
            wigetIntervalId = setInterval(() => {
                startWiget += 1
                if (spanWiget) {
                    spanWiget.innerText = startWiget > targetWiget ? targetWiget + '+' : startWiget + '+'
                }
                if (startWiget >= targetWiget) {
                    clearInterval(wigetIntervalId)
                }
            }, 50)
            addedAnimaForWiget = true
        }
        if (addedAnimaForWiget == true && scrollY < offsetTop) {
            wigetElement.classList.remove('wiget-animation')
            startWiget = 0
            addedAnimaForWiget = false
        }
    }

    let freeBuildElement = document.getElementById('freeBuildJS')
    if (freeBuildElement) {
        let offsetTop = freeBuildElement.offsetTop
        if (addedAnimaForFreeBuild == false && scrollY > offsetTop) {
            freeBuildElement.classList.add('free-build-animation')
            let spanWiget = document.getElementById('freeBuildSpanJS')
            freeBuildIntervalId = setInterval(() => {
                startFreeBuild += 1
                if (spanWiget) {
                    spanWiget.innerText = startFreeBuild > targetFreeBuild ? targetFreeBuild + '+' : startFreeBuild + '+'
                }
                if (startFreeBuild >= targetFreeBuild) {
                    clearInterval(freeBuildIntervalId)
                }
            }, 55)
            addedAnimaForFreeBuild = true
        }
        if (addedAnimaForFreeBuild == true && scrollY < offsetTop) {
            freeBuildElement.classList.remove('free-build-animation')
            startFreeBuild = 0
            addedAnimaForFreeBuild = false
        }
    }

    let preBuildElement = document.getElementById('preBuildJS')
    if (preBuildElement) {
        let offsetTop = preBuildElement.offsetTop
        if (addedAnimaForPreBuild == false && scrollY > offsetTop) {
            preBuildElement.classList.add('pre-build-animation')
            let spanWiget = document.getElementById('preBuildSpan')
            preBuildIntervalId = setInterval(() => {
                startpreBuild += 1
                if (spanWiget) {
                    spanWiget.innerText = startpreBuild > targetPreBuild ? targetPreBuild + '+' : startpreBuild + '+'
                }
                if (startpreBuild >= targetPreBuild) {
                    clearInterval(preBuildIntervalId)
                }
            }, 25)
            addedAnimaForPreBuild = true
        }
        if (addedAnimaForPreBuild == true && scrollY < offsetTop) {
            preBuildElement.classList.remove('pre-build-animation')
            startpreBuild = 0
            addedAnimaForPreBuild = false
        }
    }


    let imageContainerElement = document.getElementById('imageContainerJS')
    if (imageContainerElement) {
        let offsetTop = imageContainerElement.offsetTop
        if (addedAnimaForImageContainer == false && scrollY > offsetTop) {
            imageContainerElement.classList.add('addAnimationForImage')
            addedAnimaForImageContainer = true
        }
        if (addedAnimaForImageContainer == true && scrollY < offsetTop) {
            imageContainerElement.classList.remove('addAnimationForImage')
            addedAnimaForImageContainer = false
        }
    }
})