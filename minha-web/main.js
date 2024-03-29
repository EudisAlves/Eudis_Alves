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


// slider

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


function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  const slides = document.getElementsByClassName("slide");
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

function startAutoPlay() {
  // Define um intervalo de 3 segundos para trocar automaticamente as imagens
  setInterval(function() {
    nextSlide();
  }, 3000);
}


// Inicializa o slider com o primeiro slide
showSlide(slideIndex);

// Inicia a troca automática de imagens
startAutoPlay();


btnMenu.addEventListener('click', toggleMenu);
btnMenu.addEventListener('touchstart', toggleMenu);