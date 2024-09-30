document.getElementById('menu-btn').addEventListener('click', function() {
    document.querySelector('.mainmenu')?.classList.add('open');
});

document.getElementById('menu-btn2').addEventListener('click', function() {
    document.querySelector('.mainmenu')?.classList.remove('open');
});