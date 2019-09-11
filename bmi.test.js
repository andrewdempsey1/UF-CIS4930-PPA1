const bmi = require('./bmi');

describe('BMI returns a BMI value and category given height and weight', function() {
    
    it('should only accept numerical inputs', () => {
      const metrics = {feet: 5, inches: 'hello', pounds: 'world'};
        //expect(bmi(metrics)).toBe('The Young and the Restless');
        expect(() => bmi(metrics)).toThrow();
    });

    it('should only accept positive numerical inputs', () => {
        const metrics = {feet: 5, inches: -10, pounds: 150};
        expect(() => bmi(metrics)).toThrow();
    });

    it('should only accept whole number for feet', () => {
        const metrics = {feet: 5.2, inches: 10, pounds: 150};
        expect(() => bmi(metrics)).toThrow();
    });

    it('should return an object', () => {
        const metrics = {feet: 5, inches: 10, pounds: 150};
        expect(typeof bmi(metrics)).toBe('object');
    });

    it('should return the category as string', () => {
        const metrics = {feet: 5, inches: 10, pounds: 150};
        expect(typeof bmi(metrics).category).toBe('string');
    });

    it('should return bmi value as a number', () => {
        const metrics = {feet: 5, inches: 10, pounds: 150};
        expect(typeof bmi(metrics).value).toBe('number');
    });

    it('should calculate bmi value to one decimal place', () => {
        const metrics = {feet: 5, inches: 3, pounds: 125};
        expect(bmi(metrics).value).toBe(22.7);
        //expect(bmi(metrics).category).toBe('number');
    });

    it('should calculate bmi for Normal weight', () => {
        const metrics = {feet: 5, inches: 3, pounds: 125};
        expect(bmi(metrics).category).toBe('Normal weight');
    });

    it('should calculate bmi for underweight', () => {
        const metrics = {feet: 5, inches: 10, pounds: 125};
        expect(bmi(metrics).category).toBe('Underweight');
    });

    it('should calculate bmi for overweight', () => {
        const metrics = {feet: 5, inches: 10, pounds: 200};
        expect(bmi(metrics).category).toBe('Overweight');
    });

    it('should calculate bmi for obese', () => {
        const metrics = {feet: 5, inches: 10, pounds: 250};
        expect(bmi(metrics).category).toBe('Obese');
    });
  
  
  
  });
  
  test('jest framework runs correctly', () => {
    expect(true).toBeTruthy();
  });