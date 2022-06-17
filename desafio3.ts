let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLElement;

campoSaldo.innerHTML = "0";

let campoSaldoAux: number = Number(campoSaldo.innerHTML);


function somarAoSaldo(numero: number) {
    campoSaldoAux += numero;
    campoSaldo.innerHTML = String(campoSaldoAux);
    return campoSaldoAux;
}

function limparSaldo() {
    campoSaldoAux = 0;
    campoSaldo.innerHTML = String(campoSaldoAux);
    return campoSaldo.innerHTML;
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
  });
}

if (botaoLimpar) {
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });

}


