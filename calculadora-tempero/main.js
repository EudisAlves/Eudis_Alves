function calcularTempero(pesoCarne, tipoCarne) { // ele vai calcular a carne pelo peso para saber o quanto de cada tempero
  const temperos = {
    frango: {
      'pó da alegria': pesoCarne * 0.035,
      coloral: pesoCarne * 0.008,
      alho: pesoCarne * 0.015
    },
    'carne-bovina': {
      'pó da alegria': pesoCarne * 0.06,
      alho: pesoCarne * 0.025,
      óleo: pesoCarne * 0.004
    },
    coração: {
      'pó da alegria': pesoCarne * 0.035,
      alho: pesoCarne * 0.015
    },
    'carne-suina': {
      'pó da alegria': pesoCarne * 0.035,
      limão: pesoCarne * 0.02,
      alho: pesoCarne * 0.02,
      louro: pesoCarne * 0.003,
      coloral: pesoCarne * 0.008
    }
  };

  return temperos[tipoCarne]; // return vai gerar um array com todas as informações 
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
  const resultadoFinal = `<p>Resultados para ${pesoCarne} gramas de ${tipoCarne}:</p><ul>${listaTemperos}</ul>`;
  document.getElementById('resultado').innerHTML = resultadoFinal;

  // Atualize a função de compartilhamento
  document.getElementById('btn-compartilhar').addEventListener('click', function() {
    const resultadoCompartilhado = `Você precisa dos seguintes temperos para ${pesoCarne} gramas de ${tipoCarne}:\n\n${listaTemperos}`;
    navigator.share({ text: resultadoCompartilhado });
  });
}

function compartilharTemperos() {
  const quantidadeTempero = document.getElementById('resultado').innerText;

  if (navigator.share) {
    navigator.share({
      title: 'Compartilhar Temperos',
      text: `Você precisa de ${quantidadeTempero} gramas de tempero.`,
    })
      .then(() => console.log('Conteúdo compartilhado com sucesso.'))
      .catch((error) => console.log('Erro ao compartilhar conteúdo:', error));
  } else {
    alert('Compartilhamento não suportado neste dispositivo.');
  }
}
