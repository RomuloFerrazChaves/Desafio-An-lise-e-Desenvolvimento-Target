// ------------------------------Função para validar e exibir o valor da soma----------------------------------- //



document.getElementById('check-button-soma').addEventListener('click', function() {
    // Calculo o valor da soma
    let soma = calcularSoma();

    // Exibo o resultado no span
    let resultText = `O valor da variável SOMA é: ${soma}`;


    document.getElementById('result-soma').style.color = 'green'; 
    document.getElementById('result-soma').innerText = resultText;
});

function calcularSoma() {
    let INDICE = 13;
    let SOMA = 0;
    let K = 0;

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }

    return SOMA;
}



// ------------------------Função para validar e exibir a resposta da sequência de Fibonacci---------------------- //



document.getElementById('check-button-fibonacci').addEventListener('click', function() {
    // Pega o número do input
    let num = parseInt(document.getElementById('number-input').value);

    // Verifica se o número é parte da sequência
    let resultText;
    let isValid = Fibonacci(num);

    if (isValid) {
        resultText = `${num} pertence à sequência de Fibonacci.`;
        document.getElementById('result-fibonacci').style.color = 'green'; 
    } else {
        resultText = `${num} não pertence à sequência de Fibonacci.`;
        document.getElementById('result-fibonacci').style.color = 'red'; 
    }

    // Exibe o resultado no span de resultado
    document.getElementById('result-fibonacci').innerText = resultText;
});

function Fibonacci(num) {
    // defino os valores iniciais da sequência
    let a = 0;
    let b = 1;

    // Verifico se o número informado é 0 ou 1
    if (num === 0 || num === 1) {
        return true;
    }

    // Calculo o próximo número da sequência somando os dois números anteriores (F(2) = F(0) + F(1))
    let next = a + b;

    // Enquanto o próximo número da sequência for menor ou igual ao número informado, continuar iterando
    while (next <= num) {
        if (next === num) {
            return true;
        }
        a = b;
        b = next;
        next = a + b;
    }

    // Se o número não foi encontrado na sequência até esse ponto, retorno false
    return false;
}



// -------------------------Função para vetor de faturamento---------------------------- //


const faturamentoDiario = [
    { "dia": 1, "valor": 22174.1664 },
    { "dia": 2, "valor": 24537.6698 },
    { "dia": 3, "valor": 26139.6134 },
    { "dia": 4, "valor": 0.0 },
    { "dia": 5, "valor": 0.0 },
    { "dia": 6, "valor": 26742.6612 },
    { "dia": 7, "valor": 0.0 },
    { "dia": 8, "valor": 42889.2258 },
    { "dia": 9, "valor": 46251.174 },
    { "dia": 10, "valor": 11191.4722 },
    { "dia": 11, "valor": 0.0 },
    { "dia": 12, "valor": 0.0 },
    { "dia": 13, "valor": 3847.4823 },
    { "dia": 14, "valor": 373.7838 },
    { "dia": 15, "valor": 2659.7563 },
    { "dia": 16, "valor": 48924.2448 },
    { "dia": 17, "valor": 18419.2614 },
    { "dia": 18, "valor": 0.0 },
    { "dia": 19, "valor": 0.0 },
    { "dia": 20, "valor": 35240.1826 },
    { "dia": 21, "valor": 43829.1667 },
    { "dia": 22, "valor": 18235.6852 },
    { "dia": 23, "valor": 4355.0662 },
    { "dia": 24, "valor": 13327.1025 },
    { "dia": 25, "valor": 0.0 },
    { "dia": 26, "valor": 0.0 },
    { "dia": 27, "valor": 25681.8318 },
    { "dia": 28, "valor": 1718.1221 },
    { "dia": 29, "valor": 13220.495 },
    { "dia": 30, "valor": 8414.61 }
];

document.getElementById("check-min-faturamento").addEventListener("click", calcularMenorFaturamento);
document.getElementById("check-max-faturamento").addEventListener("click", calcularMaiorFaturamento);
document.getElementById("check-dias-acima-media").addEventListener("click", calcularDiasAcimaDaMedia);

// Função para calcular o menor faturamento
function calcularMenorFaturamento() {
    const diasComFaturamento = faturamentoDiario.filter(dia => dia.valor > 0);
    const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
    document.getElementById("result-min-faturamento").textContent = `Menor valor de faturamento: R$ ${menorFaturamento.toFixed(2)}`;
}

// Função para calcular o maior faturamento
function calcularMaiorFaturamento() {
    const diasComFaturamento = faturamentoDiario.filter(dia => dia.valor > 0);
    const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));
    document.getElementById("result-max-faturamento").textContent = `Maior valor de faturamento: R$ ${maiorFaturamento.toFixed(2)}`;
}

// Função para calcular o número de dias com faturamento acima da média
function calcularDiasAcimaDaMedia() {
    const diasComFaturamento = faturamentoDiario.filter(dia => dia.valor > 0);
    const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
    const mediaFaturamento = somaFaturamento / diasComFaturamento.length;
    const diasAcimaMedia = diasComFaturamento.filter(dia => dia.valor > mediaFaturamento).length;
    document.getElementById("result-dias-acima-media").textContent = `Número de dias com faturamento acima da média: ${diasAcimaMedia}`;
}


// -------------------------Função para percentual de faturamento dos Estados---------------------------- //

// Valores de faturamento por estado
const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Função para calcular o percentual de cada estado
function calcularPercentual() {
    // Calcula o total de faturamento
    const totalFaturamento = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

    // Calcula o percentual de cada estado e atualiza o HTML
    const resultadoShare = document.getElementById("resultShare");
    resultadoShare.innerHTML = ''; // Limpa a lista existente

    Object.entries(faturamentoPorEstado).forEach(([estado, faturamento]) => {
        const percentual = ((faturamento / totalFaturamento) * 100).toFixed(2);
        const li = document.createElement("li");
        li.textContent = `${estado} – ${percentual}%`;
        resultadoShare.appendChild(li);
    });
}

calcularPercentual();

// -------------------------Função para inverter string---------------------------- //

document.getElementById('check-button-string').addEventListener('click', function() {

    const inputString = document.getElementById('text-input').value;
    
    let invertedString = '';

    for (let i = inputString.length - 1; i >= 0; i--) {
        invertedString += inputString[i];
    }

    document.getElementById('result-string').textContent = invertedString;
});


