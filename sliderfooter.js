let index = 0
function sliderFooter() {
    index++;
    const sliderFooterMedia = document.querySelectorAll('.footer-content')
    const sliderFooters = document.querySelector('.footer-slider')
    const sliderFooterlenght = sliderFooterMedia.length
    console.log('reponsive succsess')
    console.log(sliderFooterlenght)
    if (index >= sliderFooterlenght) {
        index = 0
    }
    sliderFooters.style.left = "-" + index * 320 + "px"
}
setInterval(sliderFooter, 5000)