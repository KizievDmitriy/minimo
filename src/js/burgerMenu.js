const btnBurger = document.querySelector('.burger');
const mobMenu = document.querySelector('.navrr');
const overflow = document.querySelector('body')

btnBurger.addEventListener('click', btnToggle);

function btnToggle() {
    btnBurger.classList.toggle("toggled");
    mobMenu.classList.toggle('show');
    overflow.classList.toggle('overflow')
};