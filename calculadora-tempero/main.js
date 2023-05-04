function calcularTempero(pesoCarne, tipoCarne, tipoTempero) {
    let quantidadeTempero = 0;
    
    if (tipoCarne === 'frango') {
      if (tipoTempero === 'sal') {
        quantidadeTempero = (pesoCarne * 0.035).toFixed(0); 
      } else if (tipoTempero === 'coloral') {
        quantidadeTempero = (pesoCarne * 0.008).toFixed(0); 
      } else if (tipoTempero === 'alho') {
        quantidadeTempero = (pesoCarne * 0.015).toFixed(0); 
      }
    } else if (tipoCarne === 'carne-bovina') {
      if (tipoTempero === 'sal') {
        quantidadeTempero = (pesoCarne * 0.06).toFixed(0); // 
      } else if (tipoTempero === 'pimenta') {
        quantidadeTempero = (pesoCarne * 0.02).toFixed(0); // 
      } else if (tipoTempero === 'alho') {
        quantidadeTempero = (pesoCarne * 0.025).toFixed(0); // 
      } else if (tipoTempero === 'óleo') {
        quantidadeTempero = (pesoCarne * 0.004).toFixed(0)
      }
    } else if (tipoCarne === 'coração') {
      if (tipoTempero === 'sal') {
        quantidadeTempero = (pesoCarne * 0.035).toFixed(0); 
      } else if (tipoTempero === 'alho') {
        quantidadeTempero = (pesoCarne * 0.015).toFixed(0); 
      }
    } else if (tipoCarne === 'carne-suina') {
      if (tipoTempero === 'sal') {
        quantidadeTempero = (pesoCarne * 0.035).toFixed(0); // 
      } else if (tipoTempero === 'limão') {
        quantidadeTempero = (pesoCarne * 0.02).toFixed(0); // 
      } else if (tipoTempero === 'alho') {
        quantidadeTempero = (pesoCarne * 0.020).toFixed(0); // 
      } else if (tipoTempero === 'louro') {
        quantidadeTempero = (pesoCarne * 0.003).toFixed(0)
      } else if (tipoTempero === 'coloral') {
        quantidadeTempero = (pesoCarne * 0.008).toFixed(0)
      }
    }
    return quantidadeTempero;
    }
  

  function exibirResultados() {
    const pesoCarne = Number(document.getElementById('peso-carne').value);
    const tipoCarne = document.getElementById('tipo-carne').value;
    const tipoTempero = document.getElementById('tipo-tempero').value;
    
    const quantidadeTempero = calcularTempero(pesoCarne, tipoCarne, tipoTempero);
    
    // Exiba os resultados para o usuário
    document.getElementById('resultado').innerHTML = `Você precisa de ${quantidadeTempero} gramas para ${pesoCarne} gramas de ${tipoCarne}.`;
    };