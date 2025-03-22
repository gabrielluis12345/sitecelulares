document.addEventListener("DOMContentLoaded", () => {
    const listaPagamento = document.getElementById("lista-pagamento");
    const totalPagamento = document.getElementById("total-pagamento");
    const formPagamento = document.getElementById("form-pagamento");

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    function carregarResumo() {
        listaPagamento.innerHTML = "";
        let total = 0;

        carrinho.forEach((item) => {
            total += item.preco;
            const li = document.createElement("li");
            li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
            listaPagamento.appendChild(li);
        });

        totalPagamento.textContent = `Total: R$ ${total.toFixed(2)}`;
    }

    formPagamento.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Pagamento realizado com sucesso!");
        localStorage.removeItem("carrinho");
        window.location.href = "index.html";
    });

    carregarResumo();
});
