const test_db = require('./test_db');

const emailVerifier = email => {
    
    if (typeof email != "string") {
        test_db.insert();
        throw new TypeError('Expected string input but recieved something else');
    }

    if (!email.includes("@")) {
        test_db.insert();
        throw new Error('String must include an @ symbol');
    }

    if (email.split('@').length-1 > 1) {
        test_db.insert();
        throw new Error('String must include only one @ symbol');
    }

    if (email.includes("..")) {
        test_db.insert();
        throw new Error('String cannot contain ".."');
    }

    var parts = email.split("@");

    if (parts.length != 2) {
        test_db.insert();
        throw new Error('String must have text on both sides of @ symbol');
    }

    var string = parts[0];
    var domain = parts[1];

    if (string.length == 0 || domain.length == 0) {
        test_db.insert();
        throw new Error('String must have text on both sides of @ symbol');
    }

    if (string.charAt(0) == ".") {
        test_db.insert();
        throw new Error('String cannot start with .');
    }

    var numerics = /[0-9]/g;

    if (numerics.test(string.charAt(0))) {
        test_db.insert();
        throw new Error('String cannot start with numeric character');
    }

    if (string.charAt(string.length-1) == ".") {
        test_db.insert();
        throw new Error('String before @ cannot end with .');
    }

    var regex = /[ ()\\[\];`:\\,<>\/]/g;
    if (regex.test(string)) {
        test_db.insert();
        throw new Error('String contains invalid characters');
    }

    test_db.insert();
    
    return 'valid';

};
  
module.exports = emailVerifier;