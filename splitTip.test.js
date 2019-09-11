const splitTip = require('./splitTip');

describe('Email verifier checks if an email is valid and either returns true or false', function() {
    
    it('should only accept numerical input for guests', () => {
        const bill = {amount: 10, guests: 'four'};
        expect(() => splitTip(bill)).toThrow();
    });

    it('should only accept numerical input for amount', () => {
        const bill = {amount: 'hello', guests: 4};
        expect(() => splitTip(bill)).toThrow();
    });

    it('should only accept amount value with up to 2 decimal digits', () => {
        const bill = {amount: 24.223, guests: 4};
        expect(() => splitTip(bill)).toThrow();
    });

    it('should only accept whole number of guests', () => {
        const bill = {amount: 10, guests: 4.2};
        expect(() => splitTip(bill)).toThrow();
    });

    it('should only accept positive number greater than 0 for guests', () => {
        const bill = {amount: 10, guests: 0};
        expect(() => splitTip(bill)).toThrow();
    });

    it('should only accept positive number greater than 0 for guests', () => {
        const bill = {amount: 10, guests: -1};
        expect(() => splitTip(bill)).toThrow();
    });

    it('should return a number for total cost', () => {
        const bill = {amount: 10, guests: 1};
        expect(typeof splitTip(bill).totalCost).toBe('number');
    });

    it('should return an array of split costs', () => {
        const bill = {amount: 10, guests: 1};
        expect(typeof splitTip(bill).splitCost).toBe('object');
    });

    it('array of split costs should be contain only numbers', () => {
        const bill = {amount: 22, guests: 5};
        var array = splitTip(bill).splitCost;
        for (var i = 0; i < array.length; i++) {
            expect(typeof array[i]).toBe('number');
        }
    });

    it('each value in array of split costs should be to two decimal places', () => {
        const bill = {amount: 22, guests: 5};
        var array = splitTip(bill).splitCost;
        for (var i = 0; i < array.length; i++) {
            expect(array[i].toString().split(".")[1].length).toBe(2);
        }
    });

    it('split costs should sum to total cost', () => {
        const bill = {amount: 10, guests: 3};
        var array = splitTip(bill).splitCost;
        
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum = sum + Number(array[i]);
        }
        expect(sum).toBe(11.50);
    });

    it('should be a split cost for each guest', () => {
        const bill = {amount: 22, guests: 5};
        for (var i = 0; i < splitTip(bill).splitCost.length; i++) {
            expect(splitTip(bill).splitCost.length).toBe(5);
        }
    });

    it('total cost should include 15% tip', () => {
        const bill = {amount: 10, guests: 5};
        for (var i = 0; i < splitTip(bill).splitCost.length; i++) {
            expect(splitTip(bill).totalCost).toBe(11.50);
        }
    });



});

test('jest framework runs correctly', () => {
    expect(true).toBeTruthy();
});
