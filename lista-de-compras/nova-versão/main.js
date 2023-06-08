function adicionarItem() {
    var produto = document.getElementById('produto').value;
    var preco = document.getElementById('preco').value;

    // Verificar se o produto e o preço foram preenchidos
    if (produto !== '' && preco !== '') {
        // Criar o elemento de lista
        var li = document.createElement('li');

        // Adicionar o produto e o preço fixo
        li.innerHTML = produto + ' - R$ ' + preco;

        // Adicionar o item à lista de compras
        document.getElementById('lista-compras').appendChild(li);

        // Limpar os campos de entrada
        document.getElementById('produto').value = '';
        document.getElementById('preco').value = '';
    }
}

function calcularTotal() {
    var itens = document.getElementById('lista-compras').getElementsByTagName('li');
    var totalCentavos = 0;

    for (var i = 0; i < itens.length; i++) {
        var quantidade = parseFloat(itens[i].querySelector('.input-quantidade-item').value);
        var preco = parseFloat(itens[i].querySelector('.input-valor-item').value.replace(",", "."));

        if (!isNaN(quantidade) && !isNaN(preco)) {
            var precoCentavos = Math.round(preco * 100); // Converter o preço para centavos
            totalCentavos += quantidade * precoCentavos;
        }
    }

    var quantidadeAdd = parseFloat(document.getElementById('add-produto').querySelector('.input-quantidade').value);
    var precoAdd = parseFloat(document.getElementById('add-produto').querySelector('#preco').value.replace(",", "."));

    if (!isNaN(quantidadeAdd) && !isNaN(precoAdd)) {
        var precoAddCentavos = Math.round(precoAdd * 100); // Converter o preço para centavos
        totalCentavos += quantidadeAdd * precoAddCentavos;
    }

    // Converter o total de centavos para reais
    var reais = Math.floor(totalCentavos / 100);
    var centavos = totalCentavos % 100;

    var totalFormatado = "R$ " + reais + "," + centavos.toString().padStart(2, "0");

    document.getElementById("total").innerHTML = "Total: " + totalFormatado;
}
