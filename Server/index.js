const express = require('express')
const app = express()
var mysql = require('mysql')

var con = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"password",
    database: "database_packpr",
    insecureAuth : true

})


app.post('/api/submit', (req, res) => {
    const sqlInsert= "INSERT INTO user_data( id,email, password) VALUES ('151' , 'nitish', 'ngupta@gmail.com');"

    con.query(sqlInsert, (err, result)=> {
        console.log(err)
        res.send("hello success")
    })
    
//    console.log(res.send("hello world")) 
})

app.listen(3030, () => {
    console.log('running on port 3030, happy coding')
})


