let convidados = parseInt('Diga a quantidade de pessoas na festa');
let consumo = parseFloat('Diga a média de consumo de vinho de cada pessoa:');

function quantidadeGarrafas(){
    const calculo = consumo*convidados
    const media = calculo/convidados
}

function precoTotal(precoGarrafa) {
    const quantidadeGarrafas = consumo * convidados / 750;
    const precoTotal = quantidadeGarrafas * precoGarrafa;
    return precoTotal;
}

const precoGarrafaMenor = 20; 
const precoGarrafaMaior = 45;

function precoTotal(precoGarrafa) {
    const quantidadeGarrafas = consumo * convidados / 750;
    const quantidadeGarrafasMenor = Math.ceil(quantidadeGarrafas / precoGarrafaMenor) * precoGarrafaMenor;
    const quantidadeGarrafasMaior = Math.ceil(quantidadeGarrafas / precoGarrafaMaior) * precoGarrafaMaior;
    const precoTotalMenor = quantidadeGarrafasMenor * precoGarrafaMenor;
    const precoTotalMaior = quantidadeGarrafasMaior * precoGarrafaMaior;
    return {precoTotalMenor, precoTotalMaior, quantidadeGarrafasMenor, quantidadeGarrafasMaior};
  }
