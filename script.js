// Função para calcular a soma
console.log{
function somar() {
    let num1 = prompt("Digite o primeiro número:");
    let num2 = prompt("Digite o segundo número:");
    
    // Converte os valores de entrada para números
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Verifica se os valores são válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, digite números válidos.");
    } else {
        // Calcula a soma e exibe o resultado
        let soma = num1 + num2;
        alert("O total da soma é: " + soma);
    }

// Chama a função ao carregar a página
somar(); }