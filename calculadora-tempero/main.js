function calcularTempero(pesoCarne, tipoCarne) {
  const temperos = {
    frango: {
      sal: pesoCarne * 0.035,
      coloral: pesoCarne * 0.008,
      alho: pesoCarne * 0.015
    },
    'carne-bovina': {
      sal: pesoCarne * 0.06,
      pimenta: pesoCarne * 0.02,
      alho: pesoCarne * 0.025,
      óleo: pesoCarne * 0.004
    },
    coração: {
      sal: pesoCarne * 0.035,
      alho: pesoCarne * 0.015
    },
    'carne-suina': {
      sal: pesoCarne * 0.035,
      limão: pesoCarne * 0.02,
      alho: pesoCarne * 0.02,
      louro: pesoCarne * 0.003,
      coloral: pesoCarne * 0.008
    }
  };

  return temperos[tipoCarne];
}

function exibirResultados() {
  const pesoCarne = Number(document.getElementById('peso-carne').value);
  const tipoCarne = document.getElementById('tipo-carne').value;

  const temperos = calcularTempero(pesoCarne, tipoCarne);
  let listaTemperos = '';

  for (let tempero in temperos) {
    const quantidade = temperos[tempero].toFixed(0);
    listaTemperos += `<li>${tempero}: ${quantidade} gramas</li>`;
  }

  // Exiba os resultados para o usuário
  document.getElementById('resultado').innerHTML = `<ul>${listaTemperos}</ul>`;

  // Atualize a função de compartilhamento
  document.getElementById('btn-compartilhar').addEventListener('click', function() {
    const resultadoCompartilhado = `Você precisa dos seguintes temperos para ${pesoCarne} gramas de ${tipoCarne}:\n\n${listaTemperos}`;
    navigator.share({ text: resultadoCompartilhado });
  });
}
