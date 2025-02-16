let menu = document.getElementById('menu');
let openMenu = document.getElementById('open-menu');
let closeMenu = document.getElementById('close-menu');

openMenu.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('show-menu');


if (menu.classList.contains('show-menu')) {
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
} else {
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
}
}