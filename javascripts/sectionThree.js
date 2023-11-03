let addedAnimationForImageSectionThree = false
let addedAnimationForCertificate = false
let addedAnimationForInterCharge = false
let addedAnimationForDutyMetal = false
let addedAnimationForImageContainerMain = false
window.addEventListener('scroll', (e) => {
    let imageSectionThree = document.getElementById('shopAndCatalogWooLeft')
    let scrollY = window.pageYOffset + window.innerHeight
    if (imageSectionThree) {
        let offsetTop = imageSectionThree.offsetTop
        if (addedAnimationForImageSectionThree == false && scrollY > offsetTop) {
            imageSectionThree.classList.add('addAnimation')
            addedAnimationForImageSectionThree = true
        }
        if (addedAnimationForImageSectionThree == true && scrollY < offsetTop) {
            imageSectionThree.classList.remove('addAnimation')
            addedAnimationForImageSectionThree = false
        }
    }

    let catalogElement = document.getElementById('catalogElement')
    let offsetTopCatalog = catalogElement.offsetTop

    let imageContainerMainElement = document.getElementById('imageContainerMain')
    if (imageContainerMainElement) {
        let offsetTop = imageContainerMainElement.offsetTop + offsetTopCatalog
        if (addedAnimationForImageContainerMain == false && scrollY > offsetTop) {
            imageContainerMainElement.classList.add('addAnimation')
            addedAnimationForImageContainerMain = true
        }
        if (addedAnimationForImageContainerMain == true && scrollY < offsetTop) {
            imageContainerMainElement.classList.remove('addAnimation')
            addedAnimationForImageContainerMain = false
        }
    }

    let certificateElement = document.getElementById('certificate')
    if (certificateElement) {
        let certificateElementY = certificateElement.getBoundingClientRect().y
        if (addedAnimationForCertificate == false && certificateElementY < window.innerHeight) {
            addedAnimationForCertificate = true
            certificateElement.classList.add('addAertificateAnima')
        }
        if (addedAnimationForCertificate == true && certificateElementY > window.innerHeight) {
            addedAnimationForCertificate = false
            certificateElement.classList.remove('addAertificateAnima')
        }
    }
    let interChargeElement = document.getElementById('interCharge')
    if (interChargeElement) {
        let interChargeElementY = interChargeElement.getBoundingClientRect().y
        if (addedAnimationForInterCharge == false && interChargeElementY < window.innerHeight) {
            addedAnimationForInterCharge = true
            interChargeElement.classList.add('addInterChargeAnima')
        }
        if (addedAnimationForInterCharge == true && interChargeElementY > window.innerHeight) {
            addedAnimationForInterCharge = false
            interChargeElement.classList.remove('addInterChargeAnima')
        }
    }
    let dutyMetalElement = document.getElementById('dutyMetal')
    if (dutyMetalElement) {
        let dutyMetalElementY = dutyMetalElement.getBoundingClientRect().y
        if (addedAnimationForDutyMetal == false && dutyMetalElementY < window.innerHeight) {
            addedAnimationForDutyMetal = true
            dutyMetalElement.classList.add('addDutyMetalAnima')
        }
        if (addedAnimationForDutyMetal == true && dutyMetalElementY > window.innerHeight) {
            addedAnimationForDutyMetal = false
            dutyMetalElement.classList.remove('addDutyMetalAnima')
        }
    }
})