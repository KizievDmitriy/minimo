    
const openBtn = document.querySelector('#openSideBar');
const closeBtn = document.querySelector('.hideBtn');
const sideBar = document.querySelector('.sideBar');
const wraper = document.querySelector('#wrapper');

openBtn.addEventListener('click', open);
closeBtn.addEventListener('click', close);
function open() {
    wraper.classList.add("cardWrap");
    sideBar.classList.add("showSideBar");
}
function close() {
    wraper.classList.remove("cardWrap");
    sideBar.classList.remove("showSideBar");
}