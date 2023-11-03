

let addedAnimaForColumn0 = false
let addedAnimaForColumn1 = false
let addedAnimaForColumn2 = false
let addedAnimaForColumn3 = false
window.addEventListener('scroll', () => {
    let columnLists = document.querySelectorAll('#sectionFour .columnJS')
    let scrollY = window.pageYOffset + window.innerHeight
    if (columnLists) {
        columnLists.forEach((column, index) => {
            if (column) {
                let offsetTop = column.offsetTop
                if (index == 0) {
                    if (addedAnimaForColumn0 == false && scrollY > offsetTop) {
                        column.classList.add('addAnimationForColumn')
                        addedAnimaForColumn0 = true
                    }
                    if (addedAnimaForColumn0 == true && scrollY < offsetTop) {
                        column.classList.remove('addAnimationForColumn')
                        addedAnimaForColumn0 = false
                    }
                }
                if (index == 1) {
                    if (addedAnimaForColumn1 == false && scrollY > offsetTop) {
                        column.classList.add('addAnimationForColumn')
                        addedAnimaForColumn1 = true
                    }
                    if (addedAnimaForColumn1 == true && scrollY < offsetTop) {
                        column.classList.remove('addAnimationForColumn')
                        addedAnimaForColumn1 = false
                    }
                }
                if (index == 2) {
                    if (addedAnimaForColumn2 == false && scrollY > offsetTop) {
                        column.classList.add('addAnimationForColumn')
                        addedAnimaForColumn2 = true
                    }
                    if (addedAnimaForColumn2 == true && scrollY < offsetTop) {
                        column.classList.remove('addAnimationForColumn')
                        addedAnimaForColumn2 = false
                    }
                }
                if (index == 3) {
                    if (addedAnimaForColumn3 == false && scrollY > offsetTop) {
                        column.classList.add('addAnimationForColumn')
                        addedAnimaForColumn3 = true
                    }
                    if (addedAnimaForColumn3 == true && scrollY < offsetTop) {
                        column.classList.remove('addAnimationForColumn')
                        addedAnimaForColumn3 = false
                    }
                }
            }
        })
    }
})