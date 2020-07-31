
function restsize() {
    // 获取屏幕宽度
    const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth

    // 获取根元素
    const htmlDom = document.getElementsByTagName('html')[0]

    // 设置字体大小 
    htmlDom.style.fontSize = htmlWidth / 10 + 'px'
} 

restsize()
 
window.addEventListener('resize', () => restsize())  