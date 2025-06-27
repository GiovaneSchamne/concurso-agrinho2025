<script>
  function mostrarMensagem() {
    document.getElementById("mensagem").style.display = "block"
  }

  function verificarRespostas() {
    const respostas = document.querySelectorAll('input[type="radio"]:checked');
    let acertos = 0;

    respostas.forEach(resposta = {
      if (resposta.value === "certo") acertos++;
    ); // Corrigido: fechamento do forEach

   { document.getElementById("resultado").textContent =
      `Você acertou ${acertos} de 3 perguntas!`// Corrigido: chaves extras e fechamento da string
   }
</script>
