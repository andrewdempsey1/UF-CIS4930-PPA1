const shortestDistance = require('./shortestDistance');

describe('Shortest distance calculates the distance between two points using the distance formula', function() {
    
    it('should only accept numerical inputs', () => {
        const values = {x1: 5, y1: 'hello', x2: 4, y2: 'world'};
        expect(() => shortestDistance(values)).toThrow();
    });

    it('should return a number', () => {
        const values = {x1: 5, y1: 10, x2: 4, y2: 12};
        expect(typeof shortestDistance(values)).toBe('number');
    });

    it('should return zero if both points are the same', () => {
        const values = {x1: 5, y1: 10, x2: 5, y2: 10};
        expect(shortestDistance(values)).toBe(0);
    });

    it('should handle negative input', () => {
        const values = {x1: 5, y1: 10, x2: 5, y2: -10};
        expect(shortestDistance(values)).toBe(20);
    });

});
  
test('jest framework runs correctly', () => {
    expect(true).toBeTruthy();
});