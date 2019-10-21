var mysql = require('mysql');

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

// TODO function to return all entries (by date) for a function name
// call this from index.js when function is selected, before user input is accepted
module.exports = {
    get_f: function get_function_date(f_name) {

        sql = 'select * from testing.test_functions where f_name = "'+f_name+'" order by date;';
        
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Query Result for "+f_name+" function: " + JSON.stringify(result));
        });

    },

    return_f: function return_function_date(f_name) {

        sql = 'select * from testing.test_functions where f_name = "'+f_name+'" order by date;';
        var res;
        con.query(sql, function (err, result) {
            if (err) throw err;
            res = result;
        });
        return res;

    },

    //TODO function to save row given function name, current date and time, input recieved, and the output 
    // call this from each function

    save_f: function save_function_date(f_name, input, output) {

        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;


        sql = "INSERT INTO testing.test_functions (f_name, date, input, output) VALUES ('"+f_name+"', '"+dateTime+"', '"+input+"', '"+output+"');"

        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Insert Result: " + JSON.stringify(result));
        });

    }

}


function mockConnection() {

    
}


