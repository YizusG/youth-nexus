const sharpCss = document.createElement('link');
sharpCss.rel = 'stylesheet';
sharpCss.href = 'sharp.css?v=2';
document.head.appendChild(sharpCss);

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
  });
}

const questBtn = document.getElementById('acceptQuest');
const questStatus = document.getElementById('questStatus');
if (questBtn && questStatus) {
  questBtn.addEventListener('click', () => {
    questBtn.disabled = true;
    questBtn.textContent = 'RETO ACTIVADO';
    questStatus.textContent = 'Pulso demo confirmado: tu intervención creativa puede convertirse en pieza destacada de la galería.';
  });
}

const battleResult = document.getElementById('battleResult');
document.querySelectorAll('.battle-option').forEach((button) => {
  button.addEventListener('click', () => {
    battleResult.textContent = button.dataset.choice === 'create'
      ? 'Pulso demo: CREAR 58% · COMPETIR 42%'
      : 'Pulso demo: COMPETIR 42% · CREAR 58%';
  });
});

const ideas = {
  CREAR: 'Prueba inicial: customizar una prenda, hacer collage digital o intervenir una libreta con lenguaje visual propio.',
  EXPLORAR: 'Prueba inicial: hacer una ruta fotográfica urbana, documentar vitrinas o rastrear espacios con personalidad visual.',
  COMPETIR: 'Prueba inicial: speedcubing, torneo exprés de videojuego, reto de edición o desafío creativo por tiempo.',
  COLECCIONAR: 'Prueba inicial: figuras, cartas, stickers, objetos vintage, sneakers o piezas visuales con valor narrativo.',
  APRENDER: 'Prueba inicial: dibujo digital, mezcla musical, modelado 3D, fotografía o una habilidad nueva con progresión semanal.'
};

document.querySelectorAll('.chips button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.chips button').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    document.getElementById('hobbyResult').textContent = ideas[button.textContent.trim()];
  });
});