/*const submit = document.querySelector('.submit');
const center = document.querySelector('.modal.center');
const exit = document.querySelector('.exit');
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

const hero = document.querySelector('.hero');
const menu_item = document.querySelectorAll('.nav .nav-bar .nav-list ul li a');
    
submit.addEventListener('click',()=>{
  
     center.style.opacity = '1'

})

exit.addEventListener('click',()=>{
      center.style.opacity = '0'
})


hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobile_menu.classList.toggle('active');
  })*/

const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})