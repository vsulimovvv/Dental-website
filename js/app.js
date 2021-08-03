const showMenu = (navId, toggleId) => {
  const navEl = document.getElementById(navId);
  const toggleEl = document.getElementById(toggleId);
  const body = document.querySelector('body');
  const overlay = document.querySelector('.overlay');

  if (navEl && toggleEl) {
    toggleEl.addEventListener('click', (e) => {
      navEl.classList.toggle('active');
      toggleEl.classList.toggle('active');
      body.classList.toggle('active');
    });
  }
  overlay.addEventListener('click', (e) => {
    body.classList.remove('active');
    navEl.classList.remove('active');
    toggleEl.classList.remove('active');
  });
};
showMenu('nav-menu', 'nav-toggle');



// const scrollDown = document.querySelector('.scroll-down');
// const notif = document.querySelector('.notif');

// const bodyHeight = document.querySelector('body').clientHeight;

// scrollDown.addEventListener('click', () => {
//   window.scrollBy(0, bodyHeight - 72);
// });

const scrollUp = document.querySelector('.scroll-up');
function scrollTop() {
  if (window.scrollY >= 560) {
    scrollUp.classList.add('visible');
  } else {
    scrollUp.classList.remove('visible');
  }
}
window.addEventListener('scroll', scrollTop);

scrollUp.addEventListener('click', (e) => {
  window.scrollTo(0, 0);
});
