const drawBtn = document.getElementById('draw-button');
const jarLid = document.querySelector('.jar-lid');
const paper = document.getElementById('papel');
const message = document.getElementById('mensagem');

const frases = [
    "Você é incrível!",
    "Acredite no seu potencial!",
    "Hoje vai ser um ótimo dia!",
    "Você merece tudo de bom!"
];

drawBtn.addEventListener('click', () => {
    // Abrir tampa
    jarLid.classList.add('open');

    // Sortear frase
    const randomIndex = Math.floor(Math.random() * frases.length);
    message.textContent = frases[randomIndex];

    // Mostrar papel subindo
    paper.classList.add('show');

    // Fechar tampa e esconder papel depois de 3s
    setTimeout(() => {
        jarLid.classList.remove('open');
        paper.classList.remove('show');
    }, 3000);
});

/*Botão de Sortear bilhete*/
const drawButton = document.getElementById('drawButton');

drawButton.addEventListener('click', (e) => {
  // prevenir multi-clique
  if (drawButton.disabled) return;
  drawButton.disabled = true;
  drawButton.setAttribute('aria-pressed', 'true');

  // animação visual curta: escala e volta
  drawButton.style.transform = 'translateY(-2px) scale(0.995)';
  setTimeout(()=> {
    drawButton.style.transform = '';
  }, 160);

  // simular ação (ex.: sortear), depois reabilita
  // substitua esse setTimeout pelo seu fluxo real de sorteio
  setTimeout(() => {
    drawButton.disabled = false;
    drawButton.setAttribute('aria-pressed', 'false');
  }, 700);
});
