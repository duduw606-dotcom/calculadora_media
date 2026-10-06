const campos = document.querySelectorAll(".nota");
const resultado = document.getElementById("resultado");

document.getElementById("calcular").addEventListener("click", () => {
  let soma = 0;

  for (const campo of campos) {
    if (campo.value === "") {
      resultado.textContent = "Preencha todas as notas.";
      return;
    }
    soma += parseFloat(campo.value);
  }

  const media = soma / campos.length;
  resultado.textContent = "Média: " + media.toFixed(1);
});
