document.addEventListener("DOMContentLoaded", () => {
  const caixa = document.getElementById("caixinha");
  const tampa = caixa.querySelector(".caixa_tampa");
  const magnetos = caixa.querySelectorAll(".caixa__magneto");
  const bilhete = document.getElementById("texto-bilhete");
  const botaoSortear = document.getElementById("drawButton");

  const telaSentimento = document.getElementById("tela-sentimento");
  const botaoEnviar = document.getElementById("btn-enviar-sentimento");
  const inputSentimento = document.getElementById("input-sentimento");

  // 🎭 Mensagens categorizadas
  const mensagensPorSentimento = {
    feliz: [
      "🌞 Continue espalhando essa luz por onde passa!",
      "💛 Que essa alegria dure o dia inteiro!",
      "🌸 Sorrir te deixa ainda mais bonito(a).",
      "🌈 Que nunca te falte motivos para celebrar!",
      "😁 Sorrir é sua forma mais bonita de agradecer à vida.",
      "🍃 Você é prova de que dias leves existem.",
      "🌞 Que sua felicidade inspire outras pessoas a acreditarem em dias melhores.",
      "☕ Às vezes, a felicidade mora no simples: um café, um abraço, um riso.",
      "😃 Ser feliz também é um ato de coragem.",
      "🎁 Sinta o agora — ele é o presente que a vida te deu.",
      "⏳ Quando você sorri, até o tempo parece parar pra olhar.",
      "🍃 Que cada risada de hoje vire lembrança de amanhã.",
      "🍃 Você carrega o dom raro de transformar o comum em bonito."
    ],
    triste: [
      "🌻 Tudo bem não estar bem — o amanhã traz novos começos.",
      "💙 Chorar também é forma de limpeza emocional.",
      "☁️ Respira fundo… dias ruins não duram para sempre.",
      "💫 Você é mais forte do que esse momento triste.",
      "😮‍💨 Nem sempre é fraqueza se sentir cansado de ser forte.",
      "🎶 Há beleza até nas pausas; elas também fazem parte da música.",
      "😢 A tristeza vem visitar, mas não vai morar aí pra sempre.",
      "😭 Chorar hoje não te faz menos corajoso amanhã.",
      "🔦 A sua luz ainda está acesa, mesmo que fraquinha.",
      "⏳ Às vezes, o que mais cura é o tempo que você se permite parar.",
      "🌌 Mesmo o céu mais cinza guarda o azul atrás das nuvens.",
      "💪 Você é mais forte do que esse momento triste."
    ],
    ansioso: [
      "🌿 Um passo de cada vez, o agora é suficiente.",
      "🕊️ Respire fundo, tudo se ajeita no tempo certo.",
      "💛 Calma: a vida não está correndo contra você.",
      "🌤️ Às vezes, o melhor que podemos fazer é desacelerar.",
      "🌬 Respira. O agora é o único momento que que realmente existe.",
      "⏰ Você não está atrasado(a), está no seu próprio tempo.",
      "🌱 Você está indo bem, mesmo sem sentir que está.",
      "💪 A calma também é uma forma de força.",
      "⚖️ Você não precisa provar o seu valor sendo produtivo.",
      "⏳ Deixa o tempo fazer o trabalho que a pressa não consegue.",
      "🧘‍♀️ Você não é o que pensa; é quem observa o pensamento.",
      "🕊️ Você não precisa apressar o que o coração ainda está aprendendo.",
      "🌊 Você não precisa ter controle, só confiança."
    ],
    cansado: [
      "😴 Descanse um pouco, o mundo pode esperar.",
      "🌙 Até o sol precisa se pôr para renascer no dia seguinte.",
      "💤 Você não precisa dar conta de tudo agora.",
      "🫶 Você não está parado, está recarregando.",
      "💤 Descansar é um ato de amor-próprio.",
      "🪞 Olhe pra você com gentileza — você fez o melhor que pôde.",
      "🌙 Mesmo o sol precisa se pôr pra voltar a brilhar.",
      "🌿 Permita-se parar sem culpa.",
      "🍃 Seu corpo e sua mente merecem um respiro.",
      "🌷 Seja paciente consigo — até as flores precisam de tempo pra abrir.",
      "💭 O amanhã vai te agradecer pelo cuidado de hoje.",
      "🚶‍♀ Desacelerar também é seguir em frente.",
      "🌻 Seu valor não depende do quanto você faz."
    ],
    neutro: [
      "✨ Cada dia guarda pequenas surpresas.",
      "🌻 Às vezes o simples já é bonito.",
      "🍃 Mesmo parado, você ainda está crescendo.",
      "🌻 Pequenas pausas constroem grandes calmas.",
      "🌸 O equilíbrio também é forma de alegria.",
      "🌿 A neutralidade é o espaço entre o ontem e o amanhã.",
      "☀️ Mesmo parado, você segue crescendo.",
      "☕ Há leveza nos dias sem grandes emoções.",
      "🪶 Respirar fundo faz valer a calma do dia.",
      "🫶 Hoje é um bom dia pra só estar presente.",
      "💫 A vida também acontece nos meios-termos.",
      "🌞 Dias comuns também são dias bons.",
      "💫 Um dia leve também é um bom dia."
    ]
  };

  // 🔍 Detecta o sentimento a partir do texto
  function detectarSentimento(texto) {
    texto = texto.toLowerCase();
    if (texto.match(/feliz|alegre|animado|contente|gratidão|empolgado/)) return "feliz";
    if (texto.match(/triste|deprimido|desanimado|chateado|melancólico/)) return "triste";
    if (texto.match(/ansioso|preocupado|nervoso|tenso/)) return "ansioso";
    if (texto.match(/cansado|esgotado|exausto/)) return "cansado";
    return "neutro";
  }

  let sentimentoAtual = "neutro";

  // === Abertura e fechamento da caixa ===
  function abrirCaixa() {
    caixa.dataset.aberta = "true";
    tampa.setAttribute("aria-expanded", "true");
  }

  function fecharCaixa() {
    caixa.dataset.aberta = "false";
    tampa.setAttribute("aria-expanded", "false");
  }

  function alternarCaixa() {
    if (caixa.dataset.aberta === "true") fecharCaixa();
    else abrirCaixa();
  }

  // Clique nas bolinhas magnéticas
  magnetos.forEach(btn => btn.addEventListener("click", alternarCaixa));

  // Teclado na tampa
  tampa.addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      alternarCaixa();
    }
  });

  // Clique direto na tampa
  tampa.addEventListener("click", alternarCaixa);

  // ==============================
  // ✨ Botão “Enviar” da tela de sentimento
  // ==============================
  if (botaoEnviar) {
    botaoEnviar.addEventListener("click", () => {
      const texto = inputSentimento?.value.trim();
      if (!texto) {
        alert("Antes de continuar, conte como você está se sentindo 💛");
        return;
      }

      sentimentoAtual = detectarSentimento(texto);
      console.log("Sentimento detectado:", sentimentoAtual);

      // Transição suave entre telas
      telaSentimento.classList.add("fade-out");
      setTimeout(() => {
        telaSentimento.style.display = "none";
        document.getElementById("tela-caixinha").style.display = "flex";
      }, 600);
    });
  }

    // ==============================
    // ✨ Botão “Sortear Bilhete”
    // ==============================
    botaoSortear.addEventListener("click", () => {
      const hoje = new Date().toDateString();
      const ultimoSorteio = localStorage.getItem("ultimoSorteio");

      // Se já sorteou hoje → mostra aviso e volta pra tela de sentimento
      if (ultimoSorteio === hoje) {
        mostrarAviso();
        return;
      }

      // Marca que sorteou hoje
      localStorage.removeItem("ultimoSorteio");

      abrirCaixa();

      // Pega a categoria e sorteia mensagem correspondente
      const mensagens = mensagensPorSentimento[sentimentoAtual] || mensagensPorSentimento.neutro;
      const sorteada = mensagens[Math.floor(Math.random() * mensagens.length)];
      bilhete.textContent = sorteada;

      // Fecha após 50s
      setTimeout(fecharCaixa, 50000);
    });

    // ==============================
    // 💛 Overlay de aviso diário
    // ==============================
    function mostrarAviso() {
      const overlay = document.createElement("div");
      overlay.id = "aviso-overlay";
      overlay.innerHTML = `
        <div class="aviso-box">
          <p>💛 Você só pode sortear 1 mensagem por dia 💛</p>
          <button id="btn-ok-aviso">OK</button>
        </div>
      `;
      document.body.appendChild(overlay);

      // Referências fixas
      const telaCaixinha = document.getElementById("tela-caixinha");
      const telaSentimento = document.getElementById("tela-sentimento");
      const inputSentimento = document.getElementById("input-sentimento");
      const bilhete = document.getElementById("texto-bilhete");
      const botaoSortear = document.getElementById("drawButton");

      // Clique no botão OK
      document.getElementById("btn-ok-aviso").addEventListener("click", () => {
        // Remove overlay
        overlay.remove();

        // 🔒 Remove qualquer foco ou estado pendente do botão sortear
        if (botaoSortear) {
          botaoSortear.blur(); // tira foco
          botaoSortear.disabled = false; // garante desbloqueio pra amanhã
        }

        // 🧹 Fecha a caixinha, limpa mensagem e input
        if (bilhete) bilhete.textContent = "";
        if (inputSentimento) inputSentimento.value = "";

        // 🕒 Delay pequeno pra evitar reexecução de eventos antigos
        setTimeout(() => {
          if (telaCaixinha) telaCaixinha.style.display = "none";
          if (telaSentimento) {
            telaSentimento.style.display = "flex";
            telaSentimento.classList.remove("fade-out");
          }

          // Opcional: rola pro topo da tela de sentimento
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 250);
      });
    }
});
