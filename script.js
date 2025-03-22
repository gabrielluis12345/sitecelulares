document.addEventListener("DOMContentLoaded", () => {
    const botoesAdicionar = document.querySelectorAll(".adicionar-carrinho");
    const contadorCarrinho = document.getElementById("contador-carrinho");

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    function atualizarContador() {
        contadorCarrinho.textContent = carrinho.length;
    }

    botoesAdicionar.forEach(botao => {
        botao.addEventListener("click", (event) => {
            const produto = event.target.closest(".produto");
            const nome = produto.getAttribute("data-nome");
            const preco = parseFloat(produto.getAttribute("data-preco"));

            carrinho.push({ nome, preco });
            localStorage.setItem("carrinho", JSON.stringify(carrinho));
            atualizarContador();
        });
    });

    atualizarContador();
});

