{
    let getUls = document.querySelectorAll('#ul>li')
    let getOls = document.querySelectorAll('#ol>li')
    let getOl = document.querySelector('#ol')

    let bgcolor = ['pink', 'gray', 'blue', 'red', 'green']
    let leader = 0,
        target = 0,
        timer = 0
    for (let i = 0; i < getUls.length; i++) {
        getUls[i].style.background = bgcolor[i]
        getOls[i].style.background = bgcolor[i]
        getOls[i].index = i; // 记录当前的索引号
        getOls[i].onclick = function() {
            target = getUls[this.index].offsetTop; // 核心语句
            clearInterval(timer)
            timer = setInterval(() => {
                leader = leader + (target - leader) / 10;
                window.scrollTo(0, leader); // 屏幕滑动
            }, 30)

        }
    }
}