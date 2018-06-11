let box = document.querySelector('#d_box')
let drop = document.querySelector('#drop')
let showDop = document.querySelector('#register')
let hideDop = document.querySelector('#box_close')

starDop(drop, box)


function starDop(current, move) {
    current.onmousedown = function(e) {
        let x = e.clientX - move.offsetLeft - 205 //当前盒子的X位置
        let y = e.clientY - move.offsetTop - 155 //当前盒子的Y位置
        document.onmousemove = function(e) {
            move.style.left = e.clientX - x + 'px'
            move.style.top = e.clientY - y + 'px'
        }
        document.onmouseup = function() {
            document.onmousemove = null
        }
    }
    displayDop(hideDop, showDop)
}

function displayDop(x, y) {
    x.onclick = function() {
        box.style.display = 'none'
    }
    y.onclick = function() {
        box.style.display = 'block'
    }
}