'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Rest API running",res)
};

// show databases
exports.tampildatamhs = function (row, res) {
    connection.query('SELECT * FROM mahasiswa', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// tampil berdasarkan ID
exports.tampilid = function (row, res) {
    connection.query('SELECT * FROM mahasiswa WHERE id = ?', [id], function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};