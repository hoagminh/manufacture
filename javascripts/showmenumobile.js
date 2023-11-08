let openMenu = document.getElementById('openMenu');
let closeMenu = document.getElementById('closeMenu');
let showMenu = document.getElementById('showMenu');

openMenu.addEventListener('click', function () {
    openMenu.classList.add('display-none');
    closeMenu.classList.remove('display-none');
    showMenu.classList.remove('display-none');
})

closeMenu.addEventListener('click', function () {
    openMenu.classList.remove('display-none');
    closeMenu.classList.add('display-none');
    showMenu.classList.add('display-none');
})