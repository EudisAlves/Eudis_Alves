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

        // Calcular o total
        calcularTotal();
    }
}

function calcularTotal() {
    var inputs = document.getElementsByClassName("input-valor");
    var total = 0;

    for (var i = 0; i < inputs.length; i++) {
        var valor = parseFloat(inputs[i].value.replace(",", "."));
        if (!isNaN(valor)) {
            total += valor;
        }
    }

    var listaItens = document.getElementById('lista-compras').getElementsByTagName('li');
    for (var j = 0; j < listaItens.length; j++) {
        var item = listaItens[j].innerHTML;
        var preco = parseFloat(item.split('R$ ')[1]);
        if (!isNaN(preco)) {
            total += preco;
        }
    }

    document.getElementById("total").innerHTML = "R$ " + total.toFixed(2);
}
