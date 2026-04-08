document.addEventListener('DOMContentLoaded', () => {

  // Nav scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Burger
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');

  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));

  // Form submit
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const formEl = this;
      const formData = new FormData(formEl);

      const btn = formEl.querySelector('button');
      btn.disabled = true;
      btn.textContent = 'Отправка...';

      fetch('send.php', {
        method: 'POST',
        body: formData
      })
      .then(res => res.text())
      .then(data => {
        if (data === 'OK') {
          formEl.style.display = 'none';
          document.getElementById('formSuccess').style.display = 'block';
        } else {
          alert('Ошибка отправки. Попробуйте позже.');
          btn.disabled = false;
          btn.textContent = 'Отправить заявку';
        }
      })
      .catch(() => {
        alert('Ошибка соединения');
        btn.disabled = false;
        btn.textContent = 'Отправить заявку';
      });
    });
  }

  // Smooth nav links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});