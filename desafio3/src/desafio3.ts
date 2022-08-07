
let botaoAtualizar = document.getElementById("atualizar-saldo");
let botaoLimpar = document.getElementById("limpar-saldo");
let soma = document.getElementById("soma") as HTMLInputElement;
let campoSaldo = document.getElementById("campo-saldo");

let saldoTotal = 0;
limparSaldo()

if (campoSaldo) campoSaldo.innerHTML = saldoTotal.toString();

function limparCampoSoma() {
  if (soma) soma.value = "";
}

function somarAoSaldo(soma: number) {
  if (campoSaldo) {
    saldoTotal += soma;
    campoSaldo.innerHTML = saldoTotal.toString();
    limparCampoSoma();
  }
}

function limparSaldo() {
  if (campoSaldo) {
    saldoTotal = 0;
    if (campoSaldo) campoSaldo.innerHTML = saldoTotal.toString();
  }
}

if (botaoAtualizar)
  botaoAtualizar.addEventListener("click", function () {
    if (soma) somarAoSaldo(Number(soma.value));
  });

if (botaoLimpar)
  botaoLimpar.addEventListener("click", function () {
    limparSaldo();
  });