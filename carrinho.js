document.addEventListener("DOMContentLoaded", () => {
    const listaCarrinho = document.getElementById("lista-carrinho");
    const totalCarrinho = document.getElementById("total-carrinho");
    const botaoLimpar = document.getElementById("limpar-carrinho");
    const botaoFinalizar = document.getElementById("finalizar-compra");

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    function atualizarCarrinho() {
        listaCarrinho.innerHTML = "";
        let total = 0;

        carrinho.forEach((item) => {
            total += item.preco;
            const li = document.createElement("li");
            li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
            listaCarrinho.appendChild(li);
        });

        totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)}`;
    }

    botaoFinalizar.addEventListener("click", () => {
        window.location.href = "pagamento.html";
    });

    botaoLimpar.addEventListener("click", () => {
        localStorage.removeItem("carrinho");
        carrinho = [];
        atualizarCarrinho();
    });

    atualizarCarrinho();
});

