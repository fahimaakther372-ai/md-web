
/* =================================
   NASHRUL QURAN INSTITUTE
   WEBSITE JAVASCRIPT
================================= */

// MOBILE NAVIGATION

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {

  const opened = nav.classList.toggle('open');

  menuButton.setAttribute(
    'aria-expanded',
    String(opened)
  );

  menuButton.textContent = opened ? '×' : '☰';

});


// CLOSE MENU AFTER CLICKING LINK

document.querySelectorAll('.nav a').forEach(link => {

  link.addEventListener('click', () => {

    nav.classList.remove('open');

    menuButton.setAttribute(
      'aria-expanded',
      'false'
    );

    menuButton.textContent = '☰';

  });

});


// AUTOMATIC COPYRIGHT YEAR

document.getElementById('year').textContent =
  new Date().getFullYear();


// SCROLL REVEAL ANIMATION

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add('visible');

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);

document.querySelectorAll('.reveal').forEach(element => {

  observer.observe(element);

});


// IMAGE GALLERY LIGHTBOX

const lightbox = document.getElementById('lightbox');

const lightboxImage = lightbox.querySelector('img');


document.querySelectorAll('.gallery-item').forEach(item => {

  item.addEventListener('click', () => {

    lightboxImage.src = item.dataset.image;

    lightbox.classList.add('open');

    lightbox.setAttribute(
      'aria-hidden',
      'false'
    );

  });

});


// CLOSE IMAGE POPUP

function closeLightbox() {

  lightbox.classList.remove('open');

  lightbox.setAttribute(
    'aria-hidden',
    'true'
  );

  lightboxImage.src = '';

}


// CLOSE BUTTON

lightbox.querySelector('.lightbox-close')
  .addEventListener('click', closeLightbox);


// CLOSE WHEN CLICKING OUTSIDE IMAGE

lightbox.addEventListener('click', event => {

  if (event.target === lightbox) {

    closeLightbox();

  }

});


// ESCAPE KEY

document.addEventListener('keydown', event => {

  if (event.key === 'Escape') {

    closeLightbox();

  }

});


// ADMISSION FORM TO WHATSAPP

document.getElementById('admissionForm')
  .addEventListener('submit', event => {

    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const message = [

      'আসসালামু আলাইকুম।',

      'নাশরুল কুরআন ইন্টারন্যাশনাল ইনস্টিটিউটে ভর্তি সম্পর্কে জানতে চাই।',

      `শিক্ষার্থীর নাম: ${data.get('student')}`,

      `অভিভাবকের নাম: ${data.get('guardian') || 'উল্লেখ নেই'}`,

      `মোবাইল: ${data.get('phone')}`,

      `বিভাগ: ${data.get('department')}`,

      `ঠিকানা: ${data.get('address') || 'উল্লেখ নেই'}`

    ].join('\n');


    const whatsappURL =
      `https://wa.me/8801739657202?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappURL,
      '_blank',
      'noopener'
    );

});
