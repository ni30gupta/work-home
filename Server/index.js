const express = require('express')
const app = express()
var mysql = require('mysql')

var con = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"123456",
    database: "database_packpr"

})


app.get('/', (req, res) => {
    const sqlInsert= "INSER INTO userData(email, password) VALUES ('nitish', 'ngupta@gmail.com');"

    con.query(sqlInsert, (err, result)=> {
        console.log(err)
        res.send("hello success")
    })
    
//    console.log(res.send("hello world")) 
})

app.listen(3030, () => {
    console.log('running on port 3030, happy coding')
})


