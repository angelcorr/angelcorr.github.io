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

const contentAnimation = document.getElementById('info');

contentAnimation.addEventListener('animationend', () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => 
        entry.target.classList.remove('set-visibility', entry.isIntersecting)
      );
    },
    { root: null, threshold: 1 }
  );
  observer.observe(document.querySelector('.my-info'));
  observer.observe(document.querySelector('.about-me'));
})

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) =>
      entry.target.classList.add('active-right', entry.isIntersecting),
      entry.target.classList.remove('active-left', entry.isIntersecting)
    );
  },
  { root: null, threshold: 0.01 }
);
observer.observe(document.querySelector('.angeles-asset'));
observer.observe(document.querySelector('.angeles-description'));
