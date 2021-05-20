var mysql = require('mysql');

// buat koneksi
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'db_mahasiswa'
})

conn.connect((err) => {
    if (err) {
        throw err;
    } else {
        console.log('mysql terkoneksi');
    }
})

module.exports = conn;