
function converter() {
    // Obtém os valores dos inputs
    const valorReais = parseFloat(document.getElementById('valorEmReais').value);
    const cotacao = parseFloat(document.getElementById('cotacao').value);
    
    // Verifica se os valores são válidos
    if (!isNaN(valorReais) && !isNaN(cotacao) && cotacao > 0) {
        // Calcula o valor convertido
        const valorConvertido = valorReais / cotacao;
        
        // Atualiza o campo de resultado com o valor convertido
        document.getElementById('resultado').innerHTML = `Você terá ${valorConvertido.toFixed(2)} dólares.`;
    } else {
        document.getElementById('resultado').innerHTML = 'Por favor, insira valores válidos.';
    }
}
