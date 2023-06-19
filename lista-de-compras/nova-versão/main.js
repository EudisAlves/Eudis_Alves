var total = 0;

function calcularTotal() {
    var itens = document.querySelectorAll("#lista-compras li");

    total = 0; // Reinicializar o total antes de recalcular

    for (var i = 0; i < itens.length; i++) {
        var quantidadeInput = itens[i].querySelector(".input-quantidade-item");
        var valorInput = itens[i].querySelector(".input-valor");

        var quantidade = parseFloat(quantidadeInput.value);
        var valor = parseFloat(valorInput.value.replace(",", "."));

        if (!isNaN(quantidade) && !isNaN(valor)) {
            total += quantidade * valor;
        }
    }

    var totalElement = document.getElementById("total");
    totalElement.textContent = "R$ " + total.toFixed(2).replace(".", ",");

    return total;
}

function adicionarItem() {
    var produtoInput = document.getElementById("produto");
    var quantidadeInput = document.getElementById("input-quantidade-item");
    var valorInput = document.getElementById("input-valor");

    var produto = produtoInput.value;
    var quantidade = parseFloat(quantidadeInput.value);
    var valor = parseFloat(valorInput.value.replace(",", "."));

    if (produto && !isNaN(quantidade) && !isNaN(valor)) {
        var listaCompras = document.getElementById("lista-compras-nova");
        var novoItem = document.createElement("li");
        novoItem.textContent = produto + " - Quantidade: " + quantidade + " - Preço: R$ " + (valor).toFixed(2).replace(".", ",");
        listaCompras.appendChild(novoItem);

        produtoInput.value = "";
        quantidadeInput.value = "";
        valorInput.value = "";

        total += quantidade * valor;

        var totalElement = document.getElementById("total");
        totalElement.textContent = "R$ " + total.toFixed(2).replace(".", ",");
    }
}

// Chamada inicial para calcular o total ao carregar a página
calcularTotal();
