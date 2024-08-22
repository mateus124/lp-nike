//mostrar menu
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

    //mostrar
    if(navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    //esconder
    if(navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        })
    }

//remover do mobile
const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

//slide shoe
let swiperShoes = new Swiper('.home-swiper', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    effect: 'creative',
    creativeEffect:{
        prev:{
            translate: [-100, 0, -500],
            opacity: 0,
        },
        next:{
            translate: [100, 0, -500],
            opacity: 0,
        }
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

/* scroll */
const shadowHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header');
}
window.addEventListener('scroll', shadowHeader);