(function loadFontAwesome() {
    const script = document.createElement('script');
    script.src = "https://kit.fontawesome.com/bc93cf7741.js";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
})();
function backTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
};               
window.addEventListener('scroll', function(){
    let scroll = document.querySelector('.scrollTop')
    scroll.classList.toggle('active', window.scrollY > 550)
})
document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.structure__imgs, .teachers__imgs');
    containers.forEach((container) => {
        const parent = container.closest('.container__swiper');
        const leftBtn = parent.querySelector('.scroll-btn.left');
        const rightBtn = parent.querySelector('.scroll-btn.right');
        const scrollAmount = 300;

        if (!leftBtn || !rightBtn) {
            console.warn('Botões de rolagem não encontrados para um dos contêineres.');
            return;
        }

        leftBtn.addEventListener('click', () => {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        rightBtn.addEventListener('click', () => {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    });
});