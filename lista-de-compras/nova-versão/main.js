var listaCompras = [];

function calcularTotal() {
    var total = 0;
    var itens = document.querySelectorAll("#lista-compras li");

    for (var i = 0; i < itens.length; i++) {
      var quantidadeInput = itens[i].querySelector(".input-quantidade-item");
      var valorInput = itens[i].querySelector(".input-valor");

      var quantidade = parseFloat(quantidadeInput.value);
      var valor = parseFloat(valorInput.value.replace(",", "."));

      if (!isNaN(quantidade) && !isNaN(valor)) {
          total += quantidade * valor;
      }
  }

    for (var i = 0; i < listaCompras.length; i++) {
        var item = listaCompras[i];
        total += item.quantidade * item.valor;
    }

    var totalElement = document.getElementById("total");
    totalElement.textContent = "R$ " + total.toFixed(2).replace(".", ",");
}

function adicionarItem() {
    var produtoInput = document.getElementById("produto");
    var quantidadeInput = document.getElementById("input-quantidade-item");
    var valorInput = document.getElementById("input-valor");

    var produto = produtoInput.value;
    var quantidade = parseFloat(quantidadeInput.value);
    var valor = parseFloat(valorInput.value.replace(",", "."));

    if (produto && !isNaN(quantidade) && !isNaN(valor)) {
        var item = {
            produto: produto,
            quantidade: quantidade,
            valor: valor
        };

        listaCompras.push(item);

        var novoItem = document.createElement("li");
        novoItem.textContent = produto + " - Quantidade: " + quantidade + " - Preço: R$ " + (valor).toFixed(2).replace(".", ",");
        var listaComprasElement = document.getElementById("lista-compras-nova");
        listaComprasElement.appendChild(novoItem);

        produtoInput.value = "";
        quantidadeInput.value = "";
        valorInput.value = "";

        calcularTotal();
    }
}

// Chamada inicial para calcular o total ao carregar a página
calcularTotal();


