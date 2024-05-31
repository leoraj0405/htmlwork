const express = require('express');
const mysql = require('mysql');
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json())
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sample1'
})
con.connect(function (err) {
    if (err) {
        console.error(err)
    } else {
        console.log('mysql connected')
    }
})
app.get('/', function (req, res) {
    try {
        con.query('select * from studentInfo', function (err, result) {
            if (err) {
                res.send(err)
            } else {
                res.send(result)
            }
        })
    } catch (error) {
        console.log(err)
    }
})
app.post('/', (req, res) => {
    const {
        firstName,
        lastName,
        yearOfStudy,
        native
    } = req.body;
        con.query('insert into studentInfo(firstName,lastName,yearOfStudy,native) values(?,?,?,?)',[firstName,lastName,yearOfStudy,native], function(err, result) {
            if (err) {
                res.send('err')
            } else {
                res.send('Insert Successfully')
            }
        })
    })
app.put('/:add',(req, res) =>{
    const studid= req.params.add
})

app.listen(2000, () => {
    console.log('listen localhost 2000')
})
