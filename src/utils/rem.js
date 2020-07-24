
function restsize() {
    // 获取屏幕宽度
    const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth

    // 获取根元素
    const htmlDom = document.getElementsByTagName('html')[0]

    // 设置字体大小
    console.log(htmlWidth / 10)
    htmlDom.style.fontSize = htmlWidth / 10 + 'px'
} 

restsize()

// 监听
window.addEventListener('resize', () => restsize())  