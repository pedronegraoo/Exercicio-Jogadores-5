function addJogador() {
  const posicao = document.getElementById("position").value;
  const nome = document.getElementById("name").value;
  const numero = document.getElementById("number").value;

  //console.log({ posicao, nome, numero });

  const confirmar = confirm("Escalar " + nome + " como " + posicao + " ?");

  if (confirmar) {
    const pegarID = document.getElementById("teamList");

    const jogadorItem = document.createElement("li");
    jogadorItem.id = "player - " + numero;

    jogadorItem.innerText = posicao + " - " + nome + " (" + numero + ")";

    pegarID.appendChild(jogadorItem);

    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
  }
}

function removeJogador() {
  const numeroRemover = document.getElementById("numberRemove").value;

  const remover = document.getElementById("player - " + numeroRemover);
  //console.log(remover);

  const confirmar = confirm(
    "Você quer remover este jogador " + remover.innerText + "?"
  );

  if (confirmar) {
    document.getElementById("teamList").removeChild(remover);
    // remover.remove();

    document.getElementById("numberRemove").value = "";
  }
}
