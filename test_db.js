// 4 DB Tests
// 2 to test calling function to get all entries for each function (stub)
// 1 to test calling function to insert to DB (mock)
// 1 calling function to mock database connection (mock)
module.exports = {
    getAll: function getAllRows(f_name) {
        return f_name;
    },
    
    insert: function insertRow() {
        return 'Inserted';
    },
    
    connect: function connect() {
        return 'Connected';
    }
}

