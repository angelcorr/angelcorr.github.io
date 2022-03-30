window.addEventListener('scroll', () => {
  const content = document.querySelector('.portfolio');
  const contentPosition = content.getBoundingClientRect().top;
  const screenPosition = window.innerHeight;

  if (contentPosition < screenPosition) {
    content.classList.add('active');
  } else {
    content.classList.remove('active');
  }
})