const database = require('./database');

const emailVerifier = email => {
    
    if (typeof email != "string") {
        //database.save_f('emailVerifier', email, 'invalid');
        throw new TypeError('Expected string input but recieved something else');
    }

    if (!email.includes("@")) {
        //database.save_f('emailVerifier', email, 'invalid');
        throw new Error('String must include an @ symbol');
    }

    if (email.split('@').length-1 > 1) {
        //database.save_f('emailVerifier', email, 'invalid');
        throw new Error('String must include only one @ symbol');
    }

    if (email.includes("..")) {
        //database.save_f('emailVerifier', email, 'invalid');
        throw new Error('String cannot contain ".."');
    }

    var parts = email.split("@");

    if (parts.length != 2) {
        //database.save_f('emailVerifier', email, 'invalid');
        throw new Error('String must have text on both sides of @ symbol');
    }

    var string = parts[0];
    var domain = parts[1];

    if (string.length == 0 || domain.length == 0) {
        //database.save_f('emailVerifier', email, 'invalid');
        throw new Error('String must have text on both sides of @ symbol');
    }

    if (string.charAt(0) == ".") {
        //database.save_f('emailVerifier', email, 'invalid');
        throw new Error('String cannot start with .');
    }

    var numerics = /[0-9]/g;

    if (numerics.test(string.charAt(0))) {
        //database.save_f('emailVerifier', email, 'invalid');
        throw new Error('String cannot start with numeric character');
    }

    if (string.charAt(string.length-1) == ".") {
        //database.save_f('emailVerifier', email, 'invalid');
        throw new Error('String before @ cannot end with .');
    }

    var regex = /[ ()\\[\];`:\\,<>\/]/g;
    if (regex.test(string)) {
        //database.save_f('emailVerifier', email, 'invalid');
        throw new Error('String contains invalid characters');
    }

    //database.save_f('emailVerifier', email, 'valid');
    
    return 'valid';

};
  
module.exports = emailVerifier;