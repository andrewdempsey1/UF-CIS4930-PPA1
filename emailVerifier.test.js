// use method without database connection (TestDouble will mock the db functions)
const emailVerifier = require('./emailVerifierTestDouble');
const test_db = require('./test_db');

describe('Email verifier checks if an email is valid and either returns true or false', function() {
    
    it('should only accept string input', () => {
        const email = 1;
        expect(() => emailVerifier(email)).toThrow();
    });

    it('should contain an @ symbol', () => {
        const email = 'hello.world.com';
        expect(() => emailVerifier(email)).toThrow();
    });

    it('should not contain ..', () => {
        const email = 'he..llo@world.com';
        expect(() => emailVerifier(email)).toThrow();
    });

    it('should contain exactly one @ symbol, no more', () => {
        const email = 'hello@world@com';
        expect(() => emailVerifier(email)).toThrow();
    });

    it('should contain exactly one @ symbol, no more', () => {
        const email = 'hello@world@com';
        expect(() => emailVerifier(email)).toThrow();
    });

    it('should contain text before the @', () => {
        const email = '@com';
        expect(() => emailVerifier(email)).toThrow();
    });

    it('should contain text after the @', () => {
        const email = 'world@';
        expect(() => emailVerifier(email)).toThrow();
    });

    it('should contain text before and after the @', () => {
        const email = '@';
        expect(() => emailVerifier(email)).toThrow();
    });

    it('should not start with a period', () => {
        const email = '.hello@world.com';
        expect(() => emailVerifier(email)).toThrow();
    });

    it('string before @ should not end with a period', () => {
        const email = 'hello.@world.com';
        expect(() => emailVerifier(email)).toThrow();
    });

    it('should start with non-numeric character', () => {
        const email = '0hello@world.com';
        expect(() => emailVerifier(email)).toThrow();
    });

    it('should not contain (', () => {
        const email = 'h(ello@world.com';
        expect(() => emailVerifier(email)).toThrow();
    });

    it('should not contain )', () => {
        const email = 'h)ello@world.com';
        expect(() => emailVerifier(email)).toThrow();
    });

    it('should not contain ,', () => {
        const email = 'h,ello@world.com';
        expect(() => emailVerifier(email)).toThrow();
    });

    it('should not contain ;', () => {
        const email = 'h;ello@world.com';
        expect(() => emailVerifier(email)).toThrow();
    });

    it('should not contain :', () => {
        const email = 'h:ello@world.com';
        expect(() => emailVerifier(email)).toThrow();
    });

    it('should not contain <', () => {
        const email = 'h<ello@world.com';
        expect(() => emailVerifier(email)).toThrow();
    });

    it('should not contain >', () => {
        const email = 'h>ello@world.com';
        expect(() => emailVerifier(email)).toThrow();
    });

    it('should not contain [', () => {
        const email = 'h[ello@world.com';
        expect(() => emailVerifier(email)).toThrow();
    });

    it('should not contain ]', () => {
        const email = 'h]ello@world.com';
        expect(() => emailVerifier(email)).toThrow();
    });

    it('should not contain \\', () => {
        const email = 'h\\ello@world.com';
        expect(() => emailVerifier(email)).toThrow();
    });

    it('should not contain `', () => {
        const email = 'h`ello@world.com';
        expect(() => emailVerifier(email)).toThrow();
    });

    it('should return valid for a valid email', () => {
        const email = 'hello@world.com';
        expect(emailVerifier(email)).toBe('valid');
    });

    it('should output a string for valid email', () => {
        const email = 'hello@world.com';
        expect(typeof emailVerifier(email)).toBe('string');
    });
  
});

test('jest framework runs correctly', () => {
    expect(true).toBeTruthy();
});

// database tests
test('test database connection', () => {
    expect(test_db.connect()).toBe('Connected');
});

test('test inserting new row to database', () => {
    expect(test_db.insert()).toBe('Inserted');
});

test('test getting all entires for this function', () => {
    expect(test_db.getAll('emailVerifier')).toBe('emailVerifier');
});



