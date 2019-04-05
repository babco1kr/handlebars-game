var connection = require("../config/connection.js");

var orm = {
    selectAll = function (table) {
        connection.query("select * from ??", table, function(err, res) {
           if (err) throw err;
           return res; 
        })
    },
    insertOne = function (table, colInfo) {
        connection.query("insert into ?? set ?", table, [colInfo[0], colInfo[1]], function(err, res) {
            if (err) throw err;
            return res;
        })
    },
    updateOne = function (table, colInfo) {
        connection.query("")
    }
}

module.exports = orm;