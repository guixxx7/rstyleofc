document.addEventListener("DOMContentLoaded", () => {
    const botoesAdicionar = document.querySelectorAll(".add-carrinho");
    const listaCarrinho = document.getElementById("listaCarrinho");
    const contador = document.getElementById("contador");
    const total = document.getElementById("total");
    const carrinhoDiv = document.getElementById("carrinho");
    const abrirCarrinho = document.getElementById("abrirCarrinho");
    const fecharCarrinho = document.getElementById("fecharCarrinho");

    let carrinho = [];
    let totalValor = 0;

    // Mostrar / ocultar carrinho
    abrirCarrinho.addEventListener("click", () => {
        carrinhoDiv.classList.toggle("mostrar");
    });

    fecharCarrinho.addEventListener("click", () => {
        carrinhoDiv.classList.remove("mostrar");
    });

    // Adicionar produto
    botoesAdicionar.forEach(botao => {
        botao.addEventListener("click", () => {
            const card = botao.closest(".card");
            const nome = card.getAttribute("data-nome");
            const preco = parseFloat(card.getAttribute("data-preco"));

            carrinho.push({ nome, preco });
            totalValor += preco;

            atualizarCarrinho();
        });
    });

    // Remover produto
    function removerItem(index) {
        totalValor -= carrinho[index].preco;
        carrinho.splice(index, 1);
        atualizarCarrinho();
    }

    // Atualizar carrinho
    function atualizarCarrinho() {
        listaCarrinho.innerHTML = "";

        carrinho.forEach((item, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${item.nome} - R$ ${item.preco.toFixed(2)}</span>
                <button class="remover-item" data-index="${index}">✖</button>
            `;
            listaCarrinho.appendChild(li);
        });

        contador.textContent = carrinho.length;
        total.textContent = `Total: R$ ${totalValor.toFixed(2)}`;
    }

    // Clique para remover item
    listaCarrinho.addEventListener("click", (e) => {
        if (e.target.classList.contains("remover-item")) {
            const index = e.target.getAttribute("data-index");
            removerItem(index);
        }
    });

    // Seleciona os links do menu
const linkInicio = document.getElementById("linkInicio");
const linkProdutos = document.getElementById("linkProdutos");
const linkContato = document.getElementById("linkContato");

// Seleciona as seções
const introducao = document.querySelector(".introducao");
const produtos = document.querySelector(".produtos");
const contato = document.querySelector(".contato");

// Função para mostrar apenas a seção clicada
function mostrarSecao(secao) {
    introducao.style.display = "none";
    produtos.style.display = "none";
    contato.style.display = "none";

    secao.style.display = "grid"; // produtos precisam continuar com display: grid
    secao.scrollIntoView({ behavior: "smooth" });
}

// Inicialmente mostra apenas os produtos
produtos.style.display = "grid";

// Eventos dos links
linkInicio.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarSecao(introducao);
});

linkProdutos.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarSecao(produtos);
});

linkContato.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarSecao(contato);
});

});
