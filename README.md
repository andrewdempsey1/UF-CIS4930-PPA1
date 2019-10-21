# UF-CIS4930-PPA1
UF CIS4930 - SW Testing for CD - PPA1 - Intro to Unit Testing &amp; T/BDD 

### Setup and Execution Instructions

This assignment uses NodeJS (v10.15.3), npm (v6.4.1), and two npm modules: prompt and readline.

NodeJS can be downloaded from this link: 
https://nodejs.org/en/download/

Run `npm install`, `npm install prompt`, `npm install readline` 

Run `node index.js` to run the app

Run `npm run test` to execute the tests

To run individual tests with a coverage report, run `jest test-name --coverage`

The code for this assignment was developed, ran, and tested on Windows 10.

### Additions for PPA2

All four screencasts can be found in ppa2-screencasts

Run `npm run test` to execute all tests

Run `npm run test:http` to execute the http tests

The emailVerifier and splitTip functions are now using the database.

When run, they will print out the current existing entries for that function.  Inputs/outputs are inserted into the database.

Run this to start Docker container for MySQL:
docker run -p 3306:3306 --name ppa2-mysql -e MYSQL_ROOT_PASSWORD=andrew -d mysql:5.7

Access MySQL CLI inside Docker container:
winpty docker exec -it ppa2-mysql bash
1) Login to MySQL as user
2) create DB testing, create table test_functions with columns: f_name, date, input, output

After starting the application, web service is available at: http://localhost:5000/
- http://localhost:5000/emailVerifier will return all entries for emailVerifier function
- http://localhost:5000/splitTip will return all entries for splitTip function



