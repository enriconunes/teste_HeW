// Cabeçalho Sticky com Transição
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header-transition');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Contador para a Promoção
const countdown = document.getElementById('countdown');
let time = 5 * 60; // 5 minutos

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    countdown.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    if (time > 0) time--;
}

setInterval(updateCountdown, 1000);


