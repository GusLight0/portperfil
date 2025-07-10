var menuIcon = document.querySelector('.menu');
var ul = document.querySelector('.ul');
var noScroll = document.body;
var links = document.querySelectorAll('.ul a');

function fecharMenu() {
    ul.classList.remove('ativo');
    noScroll.classList.remove('ativo');
    document.querySelector('.menu img').src = 'img/menu.png';
}

menuIcon.addEventListener('click', () => {
    if (ul.classList.contains('ativo')) {
        fecharMenu();
    } else {
        ul.classList.add('ativo');
        noScroll.classList.add('ativo');
        document.querySelector('.menu img').src = 'img/close.png';
    }
});

// Fechar menu ao clicar em qualquer link
links.forEach(link => {
    link.addEventListener('click', fecharMenu);
});

const slides = document.querySelectorAll('.slide');
const dotContainer = document.querySelector('.dots');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

let slide = 0
const maxSlide = slides.length

const createDots = () => {
    slides.forEach((_, i) => {
        dotContainer.innerHTML += `<button class="dots_dot" data-slides="${i}">.</button>`
    })
}

const activeDot = (slide) => {
    document
    .querySelectorAll('.dots_dot')
    .forEach(e => e.classList.remove('active'));

    document
    .querySelector(`.dots_dot[data-slides="${slide}"]`)
    .classList.add('active');
};

const goToSlide = (slide) => {
    slides.forEach((e,i) => e.style.transform = `translateX(${100 * (i - slide)}%)`);
};

const nextSlide = () => {
    if(slide === maxSlide - 1) {
        slide = 0;
    } else {
        slide++;
    }

    goToSlide(slide);
    activeDot(slide);
}

const prevSlide = () => {
    if(slide === 0) {
        slide = maxSlide - 1;
    } else {
        slide--;
    }

    goToSlide(slide);
    activeDot(slide);
}

window.addEventListener("load", () => {
    createDots();
    goToSlide(slide),
    activeDot(slide);
})

left.addEventListener("click", prevSlide);
right.addEventListener("click", nextSlide);

dotContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains('dots_dot')) {
        const slide = e.target.dataset.slides;
        goToSlide(slide);
        activeDot(slide);
    }
})