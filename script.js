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
