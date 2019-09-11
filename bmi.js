const bmi = metrics => {
    
    if (isNaN(metrics.feet) || isNaN(metrics.inches) || isNaN(metrics.pounds)) {
        throw new TypeError('Expected numerical inputs but recieved something else');
    }

    if (metrics.feet < 0 || metrics.inches < 0 || metrics.pounds < 0) {
        throw new Error("inputs must be positive numbers");
    }

    if (metrics.feet % 1 != 0) {
        throw new Error("feet must be a whole number");
    }

    var height = 0.025 * ((metrics.feet * 12) + metrics.inches);
    var weight = metrics.pounds * 0.45;

    var value = Math.round( (weight / (height * height)) * 10) / 10;
    var category;
    if (value <= 18.5) {
        category = 'Underweight';
    } else if (18.5 < value && value <= 24.9) {
        category = 'Normal weight';
    } else if (25 < value && value < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    } 

    var results = {value: value, category: category};
    return results;

  };
  
  module.exports = bmi;

