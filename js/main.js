document.addEventListener('DOMContentLoaded', () => {
  initExperienceToggles();
  initPreloader();
});

function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('hidden');
      }, 3000);
    });
  }
}

function initExperienceToggles() {
  const expItems = document.querySelectorAll('.exp-item');
  expItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('is-open');
      const bullets = item.querySelector('.exp-bullets');
      if (bullets) {
        bullets.style.display = item.classList.contains('is-open') ? 'flex' : 'none';
      }
    });
  });
}

function openLightbox(element) {
  const img = element.querySelector('img');
  const caption = element.querySelector('.gallery-item__caption');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  
  lightboxImg.src = img.src;
  lightboxCaption.textContent = caption.textContent;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});
