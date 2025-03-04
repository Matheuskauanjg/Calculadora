// Função para adicionar números e operadores no display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Função para calcular a expressão
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Avalia a expressão matemática
    } catch (error) {
        display.value = "Erro";
    }
}

// Função para limpar o display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}
