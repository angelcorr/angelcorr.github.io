function nav(){
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.main-nav');
  burger.addEventListener('click', ()=>{
    nav.classList.toggle('show')
  })
}

document.addEventListener('DOMContentLoaded', nav);