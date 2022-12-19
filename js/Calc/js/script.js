'use strict';

let runnigTotal = 0;
let buffer = "0";
let previousoperator;

const screen1 = document.querySelector('.screen');
 
function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }else{
        handleSymbol(value);
    }
    screen1.innerText = buffer;
}

function handleSymbol(symbol){
    switch(symbol){
        case 'C':
            buffer = '0';
            runnigTotal = 0;
            break;
        case '=':
            if(previousoperator === null){
               return;  
            }    
            flushOperation(parseInt(buffer));
            previousoperator = null;
            buffer = runnigTotal;
            runnigTotal = 0;
            break;

        case '←':
            if(buffer.length === 1){
                buffer = '0';
            }else{
                buffer = buffer.toString(0, buffer.length -1);
            }
            break;

            case '+':
            case '−':
            case '×':
            case '÷':  
                handleMath(symbol);
                break;  
    }
}

function handleMath(symbol){
    if(buffer === '0'){
        return;
    }
    const intBuffer = parseInt(buffer);

    if(runnigTotal === 0){
        runnigTotal = intBuffer;
    }else{
        flushOperation(intBuffer);
    }
    previousoperator = symbol;
    buffer = '0';
}

function flushOperation(intBuffer){
    if(previousoperator === '+'){
        runnigTotal += intBuffer;
    }else if (previousoperator === '−'){
            runnigTotal -= intBuffer;
    }else if (previousoperator === '×'){
                runnigTotal *= intBuffer;
    }else if(previousoperator === '÷'){
        runnigTotal /= intBuffer;
        }
    }

    function handleNumber(numberString){
        if(buffer === '0'){
            buffer = numberString;
        }else{
            buffer += numberString;
        }
    }

    function init(){
        document.querySelector('.calc-buttons').addEventListener('click', function(event){
            buttonClick(event.target.innerText);
        });
    }

    init();
