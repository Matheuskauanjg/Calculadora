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

// Função para o carrossel de banner
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 3000); // Muda o slide a cada 3 segundos

// Filtro de produtos
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

// Função para carregar produtos do arquivo JSON
async function carregarProdutos() {
    try {
        const response = await fetch('produtos.json');
        const produtos = await response.json();

        const containerProdutos = document.getElementById('produtos');
        containerProdutos.innerHTML = ''; // Limpa o conteúdo existente

        produtos.forEach(produto => {
            const produtoDiv = document.createElement('div');
            produtoDiv.classList.add('produto');
            produtoDiv.setAttribute('data-categoria', produto.categoria);

            produtoDiv.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h4>${produto.nome}</h4>
                <p>R$ ${produto.valor.toFixed(2)}</p>
                <button class="buy-btn" onclick="adicionarAoCarrinho('${produto.nome}', ${produto.valor})">Adicionar ao Carrinho</button>
            `;
            containerProdutos.appendChild(produtoDiv);
        });
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
    }
}

// Filtro de categorias
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

// Inicializa o carregamento de produtos ao abrir o site
document.addEventListener('DOMContentLoaded', carregarProdutos);

// Função para adicionar produtos ao carrinho
function adicionarAoCarrinho(nome, valor) {
    const cartLink = document.getElementById('cart-link');
    const cartItems = document.getElementById('cart-items');
    
    const item = document.createElement('div');
    item.classList.add('cart-item');
    item.innerHTML = `<p>${nome} - R$ ${valor.toFixed(2)}</p>`;
    
    cartItems.appendChild(item);
    cartLink.textContent = 'Itens no Carrinho';
}

document.addEventListener("DOMContentLoaded", function() {
    const cart = document.getElementById("cart");
    const cartPopup = document.getElementById("cartPopup");
    const closePopup = document.getElementById("closePopup");

    // Evento de clique no carrinho
    cart.addEventListener("click", function() {
        cartPopup.style.display = "flex"; // Exibe o pop-up
    });

    // Evento de clique no botão de fechar
    closePopup.addEventListener("click", function() {
        cartPopup.style.display = "none"; // Oculta o pop-up
    });

    // Fecha o pop-up ao clicar fora dele
    cartPopup.addEventListener("click", function(event) {
        if (event.target === cartPopup) {
            cartPopup.style.display = "none"; // Oculta o pop-up
        }
    });
});

