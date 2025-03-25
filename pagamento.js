document.addEventListener("DOMContentLoaded", () => {
    const listaPagamento = document.getElementById("lista-pagamento");
    const totalPagamento = document.getElementById("total-pagamento");
    const formCartao = document.getElementById("form-cartao");
    const botaoPix = document.getElementById("confirmar-pix");
    
    const pagamentoCartao = document.getElementById("dados-pagamento");
    const pagamentoPix = document.getElementById("pagamento-pix");
    const opcoesPagamento = document.querySelectorAll("input[name='forma-pagamento']");

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

    formCartao.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Pagamento com cartão realizado com sucesso!");
        localStorage.removeItem("carrinho");
        window.location.href = "index.html";
    });

    botaoPix.addEventListener("click", () => {
        alert("Pagamento via PIX confirmado!");
        localStorage.removeItem("carrinho");
        window.location.href = "index.html";
    });

    opcoesPagamento.forEach((opcao) => {
        opcao.addEventListener("change", () => {
            if (opcao.value === "cartao") {
                pagamentoCartao.style.display = "block";
                pagamentoPix.style.display = "none";
            } else {
                pagamentoCartao.style.display = "none";
                pagamentoPix.style.display = "block";
            }
        });
    });

    carregarResumo();
});
