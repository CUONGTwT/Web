// Banner-container-section-bottom-left
// Banner-container-section-bottom-left-right


const textSliderbottom = document.querySelector('.Banner-container-section-bottom-left')
const imgSliderbottom = document.querySelector('.Banner-container-section-bottom-right')
window.addEventListener('scroll', checksliderbottom)


function checksliderbottom() {
    const sb = window.scrollY
    console.log(sb)
    if (sb >= 1050 || 200) {
        imgSliderbottom.style.setProperty('left', '5%');
        textSliderbottom.style.setProperty('right', '0');
    }



}
