function performOperation() {
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
        let result1 = multiply(num1, num2);
        let result2 = add(num1,num2);
        displayResult(result1, result2);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    debugger;

    return a * b;
}

function add(a,b){
    return a + b;
}

function displayResult(result1, result2) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result of multiplication of is: ${result1}  
    The result of addition of is: ${result2}`;
}