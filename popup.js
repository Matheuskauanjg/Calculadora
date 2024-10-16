// Seleciona elementos
const cartBtn = document.getElementById('cart-link');
const cartPopup = document.getElementById('cart-popup');
const closeBtn = document.querySelector('.close-btn');
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

// Array para armazenar os itens do carrinho
let cartItems = [];

// Função para adicionar um item ao carrinho
function addItemToCart(itemName, itemPrice, itemImage) {
    const item = {
        name: itemName,
        price: itemPrice,
        image: itemImage
    };
    cartItems.push(item);
    updateCart();
}

// Atualiza a exibição dos itens no carrinho
function updateCart() {
    cartItemsContainer.innerHTML = ''; // Limpa a lista de itens
    let total = 0; // Variável para armazenar o total

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>Carrinho Vazio</p>';
    } else {
        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');

            // Cria o HTML para cada item do carrinho
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-info">
                    <strong>${item.name}</strong>
                    <div class="item-price">R$ ${item.price.toFixed(2)}</div>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);

            total += item.price; // Atualiza o total
        });
    }
    totalPriceElement.textContent = total.toFixed(2); // Atualiza o valor total
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
addItemToCart('Prancha de Surf', 499.90, 'https://example.com/image1.jpg');
addItemToCart('Camiseta de Surf', 99.90, 'https://example.com/image2.jpg');
