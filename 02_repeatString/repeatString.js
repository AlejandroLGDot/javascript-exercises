const repeatString = function(string = '', num) {
    // Error scenario
    if (num < 0)
    {
        return "ERROR";
    }
    
    let aux = string;
    string = ''; // Reset value
    
    for (let i = 0; i < num; i++)
    {
        string += aux;
    }

    return string;
};

// Do not edit below this line
module.exports = repeatString;
