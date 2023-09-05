const removeFromArray = function(array, ...args) {
    // Checks for each argument / Number added
    args.forEach((args) => {
        const index = array.indexOf(args);
        if (index > -1)
        {
            array.splice(index, 1);
        }
    });

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
