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


//animação scroll
window.addEventListener('scroll', checkBoxes)
window.addEventListener('scroll', checkValue)
window.addEventListener('scroll', checkFooter)
checkBoxes();
checkValue();
checkFooter();

function checkBoxes() {
  const elements = document.querySelectorAll('.box'); // pega todos os elementos
  for (let el of elements) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const visiblePoint = 100;

    if (elementTop < windowHeight - visiblePoint) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  }
}

function checkValue() {
  const elements = document.querySelectorAll('.carrinho'); // pega todos os elementos
  for (let el of elements) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const visiblePoint = 100;

    if (elementTop < windowHeight - visiblePoint) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  }
}

function checkFooter() {
  const elements = document.querySelectorAll('.footer'); // pega todos os elementos
  for (let el of elements) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const visiblePoint = 100;

    if (elementTop < windowHeight - visiblePoint) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  }
}