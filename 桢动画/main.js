let img = document.querySelector('#img')
let quantity = 8160 / 480,
    flag = false,
    i = 0
let timer = setInterval(function() {
    if (!flag) {
        if (i < quantity) {
            img.style.backgroundPosition = '0 ' + -480 * i + 'px';
            i === quantity - 1 ? flag = true : i++;
        }
    } else {
        if (i > 0) {
            i--;
            img.style.backgroundPosition = '0 ' + -480 * i + 'px';
            i === 0 ? flag = false : '';
        }
    }
}, 100)