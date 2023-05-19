const previousOperand = document.querySelector('.previous-operand')
const currentOperand = document.querySelector('.current-operand');
const buttons = document.querySelectorAll('[data-buttons]');
const operands = document.querySelectorAll('[data-operand]');
const equalBtn = document.querySelector('[data-equal]');
const clearall = document.querySelector('[data-clear-all]');
const deleteBtn = document.querySelector('[data-delete]');
let current = '';
let previous = '';
let operation = undefined;
let lngth = 0;

function clearAllBtn() {
    current = '';
    previous = '';
    operation = undefined;
}

function deleteNumber() {
    current = current.slice(0, -1);
}

function appendNumber(number) {
    if(number === '.' && current.includes('.')) return ;
    // if(current === '0') return
    // if(number = '0') return
    current = current + number;

    if(current === '.') {
       let res = current = '0' + current
       return res;
    }

    if(current.length > 16) {
        currentOperand.style.fontSize = '1.8rem'
    } 

    if (current.length >= 20) {
        currentOperand.style.fontSize = '1.4rem';
    }

    
    
    
}

function chooseOperation(operations) {
    if(operations == '') return
    if(previous != '') {
        compute();
    }



    console.log('this is from operations', operations)
    
        operation = operations
        console.log(current);
        previous = `${current} ${operation}`;
        current = ''
    
   
    console.log('this is from operation', operation)

}


function compute() {
    let computation;
    const prev = parseFloat(previous);
    const curr = parseFloat(current);
    if(isNaN(prev) || isNaN(curr)) return;
    
    switch(operation) {
        case '+':
            computation = prev + curr;
            break;
        case '−':
            computation = prev - curr;
            break;
        case '×':
            computation = prev * curr;
            break;
        case '÷':
            computation = prev / curr;
            break;
        case '%':
            computation = prev % curr;
            break;
        default:
            return;
    }

    current = computation;
    operation = undefined;
    previous = '6876';

}

function getDisplay(number) {
    const floatNumber = parseFloat(number);
    if(isNaN(floatNumber)) return ''
    return floatNumber.toLocaleString('en');
}


function updateDisplay() {
    
    currentOperand.innerHTML = current;
    console.log(operation)
    if(operation != null) {
       
            console.log('inside if condition.')
            previousOperand.innerHTML = `${previous}`;
    }else {
        previousOperand.innerHTML = '';
    }
    
    // console.log(operation)

    // currentOperand.innerHTML = ''
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerHTML);
        updateDisplay();
    })
})

operands.forEach(operation => {
    operation.addEventListener('click', () => {
        chooseOperation(operation.innerHTML);
        updateDisplay();
    })
})

clearall.addEventListener('click', () => {
    clearAllBtn();
    updateDisplay()
})

deleteBtn.addEventListener('click', () => {
    deleteNumber();
    updateDisplay();
})

equalBtn.addEventListener('click', () => {
    compute();
    updateDisplay()
})


