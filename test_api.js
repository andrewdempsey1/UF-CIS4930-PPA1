const test_db = require('./test_db');

module.exports = {
    splitTipURL: function splitTipURL() {
        return test_db.getAll('splitTip');
    },
    
    emailURL: function emailURL() {
        return test_db.getAll('emailVerifier');
    },

    anyURL: function anyURL() {
        return 'Hello World!';
    },

    baseURL: function baseURL() {
        return 'Hello World!';
    },
    
    createServer: function createServer() {
        return 'Server started at port 5000';
    }
}