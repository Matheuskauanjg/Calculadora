// Função para filtrar produtos por categoria
function filtrarProdutos(categoria) {
    const produtos = document.querySelectorAll('.produto');
    produtos.forEach(produto => {
        produto.style.display = produto.getAttribute('data-categoria') === categoria ? 'block' : 'none';
    });
}

// Função para adicionar itens ao carrinho
const carrinho = [];

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarCarrinho();
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    const cartLink = document.getElementById('cart-link');
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    carrinho.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        cartItems.appendChild(div);
    });

    cartLink.textContent = `Carrinho (${carrinho.length})`;
    cartItems.classList.remove('hidden');
}
