const bmi = require('./bmi');
const shortestDistance = require('./shortestDistance');
const emailVerifier = require('./emailVerifier');
const splitTip = require('./splitTip');
const prompt = require('prompt');
const readline = require('readline');

var rl;

var waitForUserInput = function() {
    rl.question('', function(answer) {

        switch(Number(answer)) {
            case 1:
                
                rl.close();
                var metrics = {feet: "", inches: "", pounds: ""};
                prompt.get(['feet', 'inches', 'pounds'], function (err, res) {
                    metrics.feet = Number(res.feet);
                    metrics.inches = Number(res.inches);
                    metrics.pounds = Number(res.pounds);
                    
                    console.log(bmi(metrics));
                    displayMenu();
                    startRL();
                    waitForUserInput();
                });
                break;
            case 2:
                
                rl.close();
                var values = {x1: "", y1: "", x2: "", y2: ""};
                prompt.get(["x1", "y1", "x2", "y2"], function (err, res) {
                    values.x1 = Number(res.x1);
                    values.y1 = Number(res.y1);
                    values.x2 = Number(res.x2);
                    values.y2 = Number(res.y2);

                    console.log(shortestDistance(values));
                    displayMenu();
                    startRL();
                    waitForUserInput();
                });
                break;
            case 3:
                
                rl.close();
                prompt.get('email', function (err, res) {
                    console.log(emailVerifier(res.email));
                    displayMenu();
                    startRL();
                    waitForUserInput();
                });
                break;
            case 4:
                rl.close();
                var bill = {amount: "", guests: ""};
                prompt.get(['amount', 'guests'], function (err, res) {
                    
                    bill.amount = Number(res.amount);
                    bill.guests = Number(res.guests);
 
                    console.log(splitTip(bill));
                    displayMenu();
                    startRL();
                    waitForUserInput();
                    
                });
                break;
            case 5:
                rl.close();
                return; // exit the app
            default:
                displayMenu();
                startRL();
                waitForUserInput();
        }
    });
}

startRL();
displayMenu();
waitForUserInput();

function startRL() {
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}

function displayMenu() {
    console.log('Select a function to execute (enter 1, 2, 3, 4, or 5): ');
    console.log('1: Body Mass Index');
    console.log('2: Shortest Distance');
    console.log('3: Email Verifier');
    console.log('4: Split the Tip');
    console.log('5: Exit');
}
