// script.js

// Scroll para o topo
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Quiz
function verificarRespostas() {
  const respostas = document.querySelectorAll('input[type="radio"]:checked');
  let acertos = 0;

  respostas.forEach(resposta => {
    if (resposta.value === "certo") {
      acertos++;
    }
  });

  document.getElementById("resultado").textContent =
    `Você acertou ${acertos} de 3 perguntas! 👏`;
}

// Modo contraste
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-contraste").addEventListener("click", function () {
    document.body.classList.toggle("contraste");
  });
});
