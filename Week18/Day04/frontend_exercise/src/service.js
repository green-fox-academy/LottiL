module.exports = {
    calculateSum,
    calculateFactorial,
    calculateSumFromArray,
    calculateMultiplyFromArray,
    calculateDoubleFromArray,
    yodaSpeak
}

function calculateSum(num) {
    let sumOfNum = 0;
    for (let i = 0; i <= num; i++) {
        sumOfNum += i;
    }
    return sumOfNum;
}

function calculateFactorial(num) {
    let factorialOfNum = 1;
    for (let i = 1; i <= num; i++) {
        factorialOfNum = factorialOfNum * i;
    }
    return factorialOfNum;
}

//Array handler

function calculateSumFromArray(arr) {
    let sumOfNum = 0;
    for (let i = 0; i < arr.length; i++) {
        sumOfNum += arr[i];
    }
    return sumOfNum;
}

function calculateMultiplyFromArray(arr) {
    let multiplyOfNum = 1;
    for (let i = 0; i < arr.length; i++) {
        multiplyOfNum = multiplyOfNum * arr[i];
    }
    return multiplyOfNum;
}

function calculateDoubleFromArray(arr) {
    let resultArr = [];
    return resultArr = arr.map((num) => num * 2);
}

//The Reverser of the Sith

function yodaSpeak(text) {
    let myText = text.toLocaleLowerCase();
    
}