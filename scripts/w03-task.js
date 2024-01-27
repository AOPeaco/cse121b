/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */

//addition

function add(number1, number2) {
    return number1 + number2;
}

function addNumbers(add1, add2) {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

//subtraction

function subtract(number1, number2) {
    return number1 - number2;
}

function subtractNumbers(subtract1, subtract2) {
    let subtractOne = Number(document.querySelector('#subtract1').value);
    let subtractTwo = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractOne, subtractTwo);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

//Multiplication

let multiply = (number1, number2) => number1 * number2;

let multiplyNumbers = () => {
    let fact1 = Number(document.querySelector('#factor1').value);
    let fact2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(fact1, fact2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


//Division

let divide = (number1, number2) => number1 / number2;

let divideNumbers = () => {
    let div1 = Number(document.querySelector('#dividend').value);
    let div2 = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(div1, div2);
};

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

function totalAmount() {
    let subTotal = parseFloat(document.getElementById('subtotal').value);

    if (document.getElementById('member').checked) {
        subTotal = subTotal * .80;
    }

    document.getElementById('total').textContent = `$${subTotal.toFixed(2)}`;
}

document.getElementById('getTotal').addEventListener('click', totalAmount);

/* ARRAY METHODS - Functional Programming */

/* Output Source Array */

let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector('#array').innerHTML = arrayNumbers;

/* Output Odds Only Array */

document.querySelector('#odds').innerHTML = arrayNumbers.filter((number) => number % 2 === 1);

/* Output Evens Only Array */

document.querySelector('#evens').innerHTML = arrayNumbers.filter((number) => number % 2 === 0);

/* Output Sum of Org. Array */

document.querySelector('#sumOfArray').innerHTML = arrayNumbers.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */

document.querySelector('#multiplied').innerHTML = arrayNumbers.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */

let mapArray = arrayNumbers.map(number => number * 2);
let reduceArray = mapArray.reduce((sum, number) => sum + number)
document.querySelector('#sumOfMultiplied').innerHTML = reduceArray;
