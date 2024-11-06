# Teste-Tecnico-Desafio-Target-Análise-Desenvolvimento

## Questões

### Questão 1: Variável SOMA

Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?

#### Solução:

O código abaixo foi implementado para verificar o valor da variável SOMA.

```javascript
document.getElementById('check-button-soma').addEventListener('click', function() {
    let soma = calcularSoma();

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
```

### Questão 2: Sequência de Fibonacci

Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

#### Solução:

O código abaixo foi implementado para verificar se um número pertence à sequência de Fibonacci.

```javascript
document.getElementById('check-button-fibonacci').addEventListener('click', function() {
    let num = parseInt(document.getElementById('number-input').value);

    let resultText;
    let isValid = Fibonacci(num);

    if (isValid) {
        resultText = `${num} pertence à sequência de Fibonacci.`;
        document.getElementById('result-fibonacci').style.color = 'green'; 
    } else {
        resultText = `${num} não pertence à sequência de Fibonacci.`;
        document.getElementById('result-fibonacci').style.color = 'red'; 
    }

    document.getElementById('result-fibonacci').innerText = resultText;
});

function Fibonacci(num) {
    let a = 0;
    let b = 1;

    if (num === 0 || num === 1) {
        return true;
    }

    let next = a + b;

    while (next <= num) {
        if (next === num) {
            return true;
        }
        a = b;
        b = next;
        next = a + b;
    }

    return false;
}
```

### Questão 3: Vetor de faturamento

 Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

#### Solução:

O código abaixo foi implementado para verificar os valores pedidos.

```javascript
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

function calcularMenorFaturamento() {
    const diasComFaturamento = faturamentoDiario.filter(dia => dia.valor > 0);
    const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
    document.getElementById("result-min-faturamento").textContent = `Menor valor de faturamento: R$ ${menorFaturamento.toFixed(2)}`;
}

function calcularMaiorFaturamento() {
    const diasComFaturamento = faturamentoDiario.filter(dia => dia.valor > 0);
    const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));
    document.getElementById("result-max-faturamento").textContent = `Maior valor de faturamento: R$ ${maiorFaturamento.toFixed(2)}`;
}

function calcularDiasAcimaDaMedia() {
    const diasComFaturamento = faturamentoDiario.filter(dia => dia.valor > 0);
    const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
    const mediaFaturamento = somaFaturamento / diasComFaturamento.length;
    const diasAcimaMedia = diasComFaturamento.filter(dia => dia.valor > mediaFaturamento).length;
    document.getElementById("result-dias-acima-media").textContent = `Número de dias com faturamento acima da média: ${diasAcimaMedia}`;
}
```

### Questão 4: Faturamento Mensal por Estado

Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

#### Solução:

O código abaixo foi implementado para verificar os valores mensais faturados por unidade.

```javascript
const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

function calcularPercentual() {
    const totalFaturamento = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

    const resultadoShare = document.getElementById("resultShare");
    resultadoShare.innerHTML = ''; 

    Object.entries(faturamentoPorEstado).forEach(([estado, faturamento]) => {
        const percentual = ((faturamento / totalFaturamento) * 100).toFixed(2);
        const li = document.createElement("li");
        li.textContent = `${estado} – ${percentual}%`;
        resultadoShare.appendChild(li);
    });
}

calcularPercentual();

```


### Questão 5: Inverter caracteres de uma string

Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;

#### Solução:

O código abaixo foi implementado para inverter uma string.

```javascript
document.getElementById('check-button-string').addEventListener('click', function() {

    const inputString = document.getElementById('text-input').value;
    
    let invertedString = '';

    for (let i = inputString.length - 1; i >= 0; i--) {
        invertedString += inputString[i];
    }

    document.getElementById('result-string').textContent = invertedString;
});

```
