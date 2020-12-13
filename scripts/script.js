// Carne - 400 gr por pessoa   + de 6 horas - 650
// HotDog - 3un por Pessoa + 6 horas - 5un
// Salgadinho - 12 salgadinhos por pessoa
// Refrigerante/Suco - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let inputCrente = document.getElementById("crente");
let resultado = document.getElementById("resultado");

function calcular() {
  console.log("Calculando...");
  
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;
  let crente = inputCrente.value;
   
  let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
  let qdtSalgado = salgado(duracao) * adultos + (salgado(duracao) / 2 * criancas);
  let qdtTotalPaes = paes(duracao) * adultos + (paes(duracao) / 2 * criancas);
  let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    if(crente === 'sim') {

      resultado.innerHTML = `<p>${(qdtTotalCarne * 2) / 1000} Kg de Carne</p>`
      resultado.innerHTML += `<p>${Math.round(qdtSalgado * 2)} Salgadinhos</p>`
      resultado.innerHTML += `<p>${Math.round(qdtTotalPaes * 2)} Cachorro quente</p>`
      resultado.innerHTML += `<p>${Math.ceil((qdtTotalBebidas * 2) / 2000)}l de Suco e/ou Refrigerante</p>`
    } 
    else 
    {    
      resultado.innerHTML = `<p>${qdtTotalCarne / 1000} Kg de Carne</p>`
      resultado.innerHTML += `<p>${Math.ceil(qdtSalgado)} Salgadinhos</p>`
      resultado.innerHTML += `<p>${Math.ceil(qdtTotalPaes)} Cachorro quente</p>`
      resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)}l de Suco e/ou Refrigerante</p>`
    }

    
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function salgado(duracao) {
  if (duracao >= 6) {
      return 14;
  } else {
      return 10;
  }
}

function paes(duracao) {
    if (duracao >= 6) {
        return 5;
    } else {
        return 3;
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1200;
    } else {
        return 1000;
    }
}