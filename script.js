let display = document.getElementById("display");
const button = document.querySelectorAll(".button"); //captura botões



let currentInput = '' //variável para armazenar o valor atual do display

button.forEach(element => { //adiciona evento de click em cada botão
    element.addEventListener('click', () => {
        
        if(element.textContent === 'C'){ //limpa o display
            currentInput = ''
            display.textContent = currentInput
        }
       

        else if(element.textContent && element.textContent !== '='){// chama a função que adiciona o valor do botão ao display
            appendNumber(element.textContent)
        }
        else if(element.textContent === '='){//chama a função de calcular o resultado
            calculator()
        }
        
    })
});

function appendNumber(value) {//adiciona o valor do botão ao display
    currentInput += value
    display.textContent = currentInput
}

function operador(value){ //adiciona o valor do operador ao display
    if(currentInput === '' && value !== '.') return
    currentInput += value
    display.textContent = currentInput
}

function calculator(){//calcula o resultado
    try {
        let result = eval(currentInput)//eval é uma função que avalia uma string como código javascript
        if(!Number.isInteger(result)){//se o resultado não for inteiro, arredonda para duas casas decimais
            result = result.toFixed(2)//.toString() limita no maximo 2 casas decimais
        }
        currentInput = result //atualiza o valor atual do display com o resultado
        display.textContent = currentInput
    } catch (error) {
        display.textContent = 'Error'
        currentInput = ''
    }
}