let container = document.querySelector('.container')
let switcher = document.querySelector('.switcher')
switcher.addEventListener('click',()=>{
    container.classList.toggle('dark')
})