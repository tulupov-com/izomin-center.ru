// Показываем маленький логотип только когда баннер уехал
const banner    = document.querySelector('.banner');
const logoSmall = document.querySelector('.logo-small');

const io = new IntersectionObserver(
  ([e]) => logoSmall.style.display = e.isIntersecting ? 'none' : 'block',
  { threshold: 0.1 }
);
io.observe(banner);