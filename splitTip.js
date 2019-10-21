const database = require('./database');

const splitTip = bill => {
    
    if (isNaN(bill.amount) || isNaN(bill.guests)) {
        throw new TypeError('Expected numerical inputs but recieved something else');
    }

    if (!(bill.amount > 0)) {
        throw new Error('Cost must be greater than zero');
    }

    if (!(bill.guests > 0)) {
        throw new Error('Number of guests must be greater than zero');
    }

    if (bill.guests % 1 != 0) {
        throw new Error('Number of guests must be a whole number');
    }

    if (bill.amount.toString().includes(".")) {
        if (bill.amount.toString().split(".")[1].length > 2) {
            throw new Error('Cost can only contain max of 2 decimal digits');
        }
    }

    var total = (Number(bill.amount) * 1.15).toFixed(2);
    var splitArray = [];

    var splitCost = total / bill.guests;
    splitCost = splitCost.toFixed(2);

    for (var i = 0; i < bill.guests; i++ ) {
        splitArray.push(Number(splitCost));
    }

    // if split costs don't add up to total, add difference to first guest
    if (splitCost * bill.guests != total) {
        var difference = total - (splitCost * bill.guests);
        splitArray[0] = Number(splitCost) + Number(difference.toFixed(2));
    }

    var result = {totalCost: total, splitCost: splitArray};

    database.save_f('splitTip', JSON.stringify(bill), JSON.stringify(result));

    return result;

};

module.exports = splitTip;