const sumAll = function(num1, num2) {
    let totalSum = 0;
    let aux = 0;
    
    if (typeof num1 != "number" || typeof num2 != "number"){
        return 'ERROR';
    }

    if (num1 < 0 || num2 < 0){
        return 'ERROR';
    }

    // Works in both ways
    if (num1 > num2){
        aux = num1;
        num1 = num2;
        num2 = aux;
    }

    while (num1 <= num2){
        totalSum += num1;
        num1++;
    }

    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
