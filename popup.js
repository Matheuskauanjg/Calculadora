// Seleciona elementos
const cartBtn = document.getElementById('cart-link');
const cartPopup = document.getElementById('cart-popup');
const closeBtn = document.querySelector('.close-btn');

// Abre o pop-up ao clicar no botão do carrinho
cartBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Impede a ação padrão do link
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
