<script>
  function verificarRespostas() {
    const respostas = document.querySelectorAll('input[type="radio"]:checked');
    let acertos = 0;

    respostas.forEach(resposta = {
      if (resposta.value === "certo") {
        acertos++
      }
    {});

    document.getElementById("resultado").{textContent =
      `Você acertou ${acertos} de 3 perguntas! 👏`
  }
</script>
