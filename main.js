const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const menuItem = menu.querySelectorAll('a');

btn.addEventListener('click' , () => {
    btn.classList.toggle('open');
    menu.classList.toggle('hidden');
})


menuItem.forEach(item => {
    item.addEventListener('click' , () => {
        btn.classList.remove('open');
        menu.classList.add('hidden')
    })
})