// Seleciona elementos
const cartBtn = document.getElementById('cart-link');
const cartPopup = document.getElementById('cart-popup');
const closeBtn = document.querySelector('.close-btn');
const cartItemsContainer = document.getElementById('cart-items');

// Array para armazenar os itens do carrinho
let cartItems = [];

// Função para adicionar um item ao carrinho
function addItemToCart(itemName) {
    cartItems.push(itemName);
    updateCart();
}

// Atualiza a exibição dos itens no carrinho
function updateCart() {
    cartItemsContainer.innerHTML = ''; // Limpa a lista de itens
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>Carrinho Vazio</p>';
    } else {
        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.textContent = item;
            cartItemsContainer.appendChild(itemElement);
        });
    }
}

// Abre o pop-up ao clicar no botão do carrinho
cartBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Impede a ação padrão do link
    updateCart(); // Atualiza os itens do carrinho antes de abrir o pop-up
    cartPopup.style.display = 'block';
});

// Fecha o pop-up ao clicar no botão de fechar
closeBtn.addEventListener('click', () => {
    cartPopup.style.display = 'none';
});

// Fecha o pop-up se clicar fora da área do conteúdo
window.addEventListener('click', (event) => {
    if (event.target === cartPopup) {
        cartPopup.style.display = 'none';
    }
});

// Exemplo de adicionar itens ao carrinho (substitua isso pela lógica do seu produto)
addItemToCart('Prancha de Surf');
addItemToCart('Camiseta de Surf');
