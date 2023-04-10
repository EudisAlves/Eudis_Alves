const btnMenu = document.getElementById('btn-menu');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

let slideIndex = 0;

function showSlide(index) {
  const slides = document.getElementsByClassName("slide");
  const prev = document.getElementsByClassName("prev")[0];
  const next = document.getElementsByClassName("next")[0];

  // Verifica se chegou no primeiro ou último slide para esconder os botões prev/next
  if (index === 0) {
    prev.style.display = "none";
  } else {
    prev.style.display = "block";
  }

  if (index === slides.length - 1) {
    next.style.display = "none";
  } else {
    next.style.display = "block";
  }

  // Oculta todos os slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Mostra o slide atual
  slides[index].style.display = "block";
}

setInterval(() => {
  proximaImg()
}, 2000)
function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

// Inicializa o slider com o primeiro slide
showSlide(slideIndex);


btnMenu.addEventListener('click', toggleMenu);
btnMenu.addEventListener('touchstart', toggleMenu);