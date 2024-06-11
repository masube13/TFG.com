document.addEventListener("DOMContentLoaded", function() {
  const photos = document.querySelectorAll('.photo');
  const header = document.querySelector('header');
  const aside = document.querySelector('aside');
  const asideLinks = aside.querySelectorAll('a');

  const checkScroll = () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    photos.forEach(photo => {
      const photoTop = photo.getBoundingClientRect().top;

      if (photoTop < triggerBottom) {
        photo.classList.add('show');
      } else {
        photo.classList.remove('show');
      }
    });

    if (window.scrollY > 100) {
      header.style.top = '-100px';
      aside.style.display = 'block';
      aside.style.opacity = '1';
    } else {
      header.style.top = '0';
      aside.style.opacity = '0';
      setTimeout(() => {
        aside.style.display = 'none';
      }, 300);
    }
  };

  asideLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  window.addEventListener('scroll', checkScroll);
  checkScroll();
});
