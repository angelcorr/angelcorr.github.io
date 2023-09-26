window.addEventListener('animationend', () => {
  document.querySelector('.title').classList.remove('set-visibility');
});

window.addEventListener('mousemove', () => {
  document.querySelector('.content').classList.remove('transition-down')
  document.querySelector('.content').classList.add('transition-up')
});
