const reverseString = function(word) {
    let reverse_array = word.split('');
    let aux = '';
    const length = reverse_array.length - 1;

    for (let i = 0; i < reverse_array.length; i++)
    {
        aux = reverse_array[i];
        reverse_array[i] = reverse_array[length - i];
        reverse_array[length - i] = aux;

        if (i == Math.floor(reverse_array.length / 2)){
            break;
        }
    }

    word = reverse_array.join('');

    return word;
};

// Do not edit below this line
module.exports = reverseString;
