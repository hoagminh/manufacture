var countDownDate = new Date("Nov 5, 2023 23:59:59").getTime();

var x = setInterval(function () {

    let hide = document.getElementById("countdown");
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let timer = `<div class="itime">
                        <span class="colorBlue">${days}</span> <span class="font-size-16">Ngày</span>
                    </div>
                    <div class="itime">
                        <span class="colorBlue">${hours}</span> <span class="font-size-16">Giờ</span>
                    </div>
                    <div class="itime">
                        <span class="colorBlue">${minutes}</span> <span class="font-size-16">Phút</span>
                    </div>
                    <div class="itime">
                        <span class="colorBlue">${seconds}</span> <span class="font-size-16">Giây</span>
                    </div>`

    document.getElementById("timer").innerHTML = timer;

    // If the count down is over
    if (distance < 0) {
        clearInterval(x);
        hide.classList.add('display-none');
    }
}, 1000);