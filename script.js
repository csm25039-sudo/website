// Gentle falling petals. The site still works if JavaScript is disabled.
(() => {
  const field = document.querySelector('.petal-field');
  if (!field || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const symbols = ['✿', '❀', '♡', '·'];
  for (let i = 0; i < 17; i++) {
    const petal = document.createElement('span');
    petal.className = 'petal';
    petal.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.fontSize = `${10 + Math.random() * 15}px`;
    petal.style.animationDuration = `${9 + Math.random() * 12}s`;
    petal.style.animationDelay = `${Math.random() * -18}s`;
    petal.style.setProperty('--drift', `${-70 + Math.random() * 140}px`);
    field.appendChild(petal);
  }
})();
