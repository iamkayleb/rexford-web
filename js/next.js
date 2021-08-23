
const hamburger = document.querySelector('.nav .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.nav .nav-bar .nav-list ul');
const nav = document.querySelector('.nav.container');

 

hamburger.addEventListener('click',()=>{
      hamburger.classList.toggle('active')
      mobile_menu.classList.toggle('active')
  })