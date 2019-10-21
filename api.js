var http = require('http');
var mysql = require('mysql');

const database = require('./database');

var con = mysql.createConnection({
    host: "192.168.99.100",
    user: "root",
    password: "andrew",
    port: 3306
});

con.connect(function(err) {
    if (err) throw err;
    //console.log("Connected!");
});

module.exports = {
    startServer: function startServer() {
        // create a server object:
        http.createServer(function (req, res) {
            
            var url = req.url;
            
            //res.write(url);
            if(url ==='/emailVerifier'){
                sql = 'select * from testing.test_functions where f_name = "emailVerifier" order by date;';
                con.query(sql, function (err, result) {
                    if (err) throw err;
                    res.write(JSON.stringify(result)); //write a response
                    res.end(); 
                });
            }else if(url ==='/splitTip'){
                sql = 'select * from testing.test_functions where f_name = "splitTip" order by date;';
                con.query(sql, function (err, result) {
                    if (err) throw err;
                    res.write(JSON.stringify(result)); //write a response
                    res.end(); 
                });
            } else {
                res.write('Hello World!'); //write a response
                res.end(); //end the response
            }

        }).listen(5000, function() {
            console.log("Server started at port 5000"); //the server object listens on port 3000
        });
    }
}


