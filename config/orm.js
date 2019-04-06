var connection = require("../config/connection.js");

var orm = {
    selectAll: function (table, cb) {
        connection.query("select * from ??", table , function(err, res) {
           if (err) throw err;
           cb(res); 
        })
    },
    insertOne: function (table, cols, vals, cb) {
        var queryURL = "insert into " + table + " (" + cols.toString() + ") values (?)";
        console.log(queryURL);
        connection.query(queryURL, vals, function(err, res) {
            if (err) throw err;
            cb(res)
        })
    },
    updateOne: function (table, colName, colVal, condition, cb) {
        var queryURL = "update " + table +  " set " + colName + " = " + colVal + " where " + condition + "";
        console.log(queryURL);
        // console.log(objVals);
        connection.query(queryURL, function(err, res) {
            if(err) throw err;
            cb(res);
        })
    }
}

module.exports = orm;