var connection = require("../config/connection.js");

var orm = {
    selectAll: function (table, cb) {
        connection.query("select * from ??", table , function(err, res) {
           if (err) throw err;
           cb(res); 
        })
    },
    insertOne: function (table, colInfo, cb) {
        connection.query("insert into ?? set ?", table, [colInfo[0], colInfo[1]], function(err, res) {
            if (err) throw err;
            cb(res)
        })
    },
    updateOne: function (table, colInfo) {
        connection.query("update ?? set ?? where ?? = ?", table, objVals, colName, colVal, function(err, res) {
            if(err) throw err;
            cb(res);
        })
    }
}

module.exports = orm;