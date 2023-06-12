function adicionarItem() {
    var produto = document.getElementById('produto').value;
    var quantidade = parseFloat(document.getElementById('input-quantidade-item').value);
    var preco = parseFloat(document.getElementById('input-valor').value.replace(",", "."));

    if (!isNaN(quantidade) && !isNaN(preco) && produto !== '') {
        // Criar o elemento de lista
        var li = document.createElement('li');

        // Criar os elementos para quantidade e preço
        var quantidadeSpan = document.createElement('span');
        quantidadeSpan.className = 'quantidade-item';
        quantidadeSpan.textContent = quantidade;

        var precoSpan = document.createElement('span');
        precoSpan.className = 'preco-item';
        precoSpan.textContent = preco.toFixed(2);

        // Adicionar o produto, quantidade e preço
        li.textContent = produto + ' - Quantidade: ';
        li.appendChild(quantidadeSpan);
        li.textContent += ' - Valor: R$ ';
        li.appendChild(precoSpan);

        // Adicionar o item à lista de compras
        document.getElementById('lista-compras').appendChild(li);

        // Limpar os campos de entrada
        document.getElementById('produto').value = '';
        document.getElementById('input-quantidade-item').value = '';
        document.getElementById('input-valor').value = '';

        // Atualizar o total
        atualizarTotal();
    }
}

function calcularTotal() {
    var totalCentavos = 0;

    // Obter os inputs da lista de compras
    var inputsQuantidade = document.querySelectorAll('#lista-compras .input-quantidade-item');
    var inputsValor = document.querySelectorAll('#lista-compras .input-valor');

    // Iterar sobre os inputs da lista de compras
    for (var i = 0; i < inputsQuantidade.length; i++) {
        var quantidade = parseFloat(inputsQuantidade[i].value);
        var valor = parseFloat(inputsValor[i].value.replace(",", "."));

        if (!isNaN(quantidade) && !isNaN(valor)) {
            var subtotalCentavos = Math.round(quantidade * valor * 100); // Calcular o subtotal em centavos
            totalCentavos += subtotalCentavos;
        }
    }

    // Obter os inputs adicionados manualmente
    var quantidadeAdicionada = parseFloat(document.getElementById('input-quantidade-item').value);
    var valorAdicionado = parseFloat(document.getElementById('input-valor').value.replace(",", "."));

    if (!isNaN(quantidadeAdicionada) && !isNaN(valorAdicionado)) {
        var subtotalAdicionadoCentavos = Math.round(quantidadeAdicionada * valorAdicionado * 100); // Calcular o subtotal dos itens adicionados manualmente em centavos
        totalCentavos += subtotalAdicionadoCentavos;
    }

    // Converter o total para reais formatados
    var totalReais = (totalCentavos / 100).toFixed(2);

    // Exibir o total
    var totalElement = document.getElementById('total');
    if (totalElement) {
        totalElement.innerText = 'Total: R$ ' + totalReais;
    }
}











