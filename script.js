// Função para filtrar produtos
document.querySelectorAll('.categorias a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const categoria = event.target.getAttribute('data-categoria');
        filtrarProdutos(categoria);
    });
});

function filtrarProdutos(categoria) {
    const produtos = document.querySelectorAll('.produto');
    produtos.forEach(produto => {
        if (categoria === 'all' || produto.getAttribute('data-categoria') === categoria) {
            produto.style.display = 'block';
        } else {
            produto.style.display = 'none';
        }
    });
}

// Carrinho
const carrinho = [];

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarCarrinho();
}

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
