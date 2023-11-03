var show = document.getElementById('show');
var hide = document.getElementById('hide');
var spoiler = document.getElementById('spoiler');
//spoiler.style.height = spoiler.scrollHeight + 50 + 'px';

show.addEventListener('click', clickShow)
function clickShow() {
    var spoiler = document.getElementById('spoiler');
    spoiler.classList.remove('hide');
    hide.classList.remove('display-none');
    show.classList.add('display-none');
}
hide.addEventListener('click', function () {
    var spoiler = document.getElementById('spoiler');
    spoiler.classList.add('hide');
    show.classList.remove('display-none');
    hide.classList.add('display-none');
})