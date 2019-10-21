const test_api = require('./test_api');

describe('(HttpTest): Test http functions', function() {

    // http tests
    test('test server connection', () => {
        expect(test_api.createServer()).toBe('Server started at port 5000');
    });

    test('test base url response', () => {
        expect(test_api.baseURL()).toBe('Hello World!');
    });

    test('test any other url response', () => {
        expect(test_api.anyURL()).toBe('Hello World!');
    });

    test('test any emailVerifier api access and url response', () => {
        expect(test_api.emailURL()).toBe('emailVerifier');
    });

    test('test any splitTip api access and url response', () => {
        expect(test_api.splitTipURL()).toBe('splitTip');
    });

});



