const burger = document.querySelector('.vx-burger');
const menu = document.querySelector('.vx-menu');

if (burger && menu){
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}