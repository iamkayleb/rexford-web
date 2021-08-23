
const hamburger = document.querySelector('.nav .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.nav .nav-bar .nav-list ul');
const nav = document.querySelector('.nav.container');
const overlay = document.querySelector('.overlay')
const modal= document.querySelector('.modal')
const dismiss = document.querySelector('.dismiss')

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active')
    mobile_menu.classList.toggle('active')
})

window.onload = function(){
    setTimeout(function(){
        modal.style.display = 'block'
    }, 2000)
    setTimeout(function(){
        overlay.style.display = 'block'
    }, 2000)
}


dismiss.addEventListener('click', () => {
     modal.style.display = 'none'
})

overlay.addEventListener('click', () => {
    modal.style.display = 'none'
    overlay.style.display = 'none'
})