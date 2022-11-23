
const imgSliderfooter = document.querySelectorAll('.footer-img img')
const textSliderfooter = document.querySelector('.Banner-container-section-top-right')
window.addEventListener('scroll', checkslidertop)


function checkslidertop() {
    const st = window.scrollY
    console.log(st)
    if (st >= 1905) {
        imgSliderfooter.forEach(img => {
            img.style.setProperty('height', '340px');
            img.style.setProperty('width', '335px');
            img.style.setProperty('opacity', '1');
            img.style.setProperty('border-radius', '12px');
        })


        textSliderfooter.style.setProperty('', '');
    }



}
