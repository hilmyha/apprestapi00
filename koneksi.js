var mysql = require('mysql');

// buat koneksi
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'haidar',
    database:'db_mahasiswa'
})

conn.connect((err) => {
    if (err) throw err;
    console.log('mysql terkoneksi');
})

module.exports = conn;