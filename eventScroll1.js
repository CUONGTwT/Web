
const imgSildertop = document.querySelector('.Banner-container-section-top-left')
const textSildertop = document.querySelector('.Banner-container-section-top-right')
window.addEventListener('scroll', checkslidertop)


function checkslidertop() {
    const st = window.scrollY
    console.log(st)
    if (st >= 400 || 200) {

        imgSildertop.style.setProperty('right', '0');

        textSildertop.style.setProperty('left', '10%');
    }



}
