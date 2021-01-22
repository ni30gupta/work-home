const express = require('express')
const app = express()
var mysql = require('mysql')
var bodyParser = require('body-parser')
var cors = require('cors')




var con = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"123456",
    database: "database_packpr",
    insecureAuth : true

})
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())


app.post('/api/submit', (req, res) => {

    const userName = req.body.userName
    const email = req.body.email
    const mobile = req.body.mobile
    const password = req.body.password

    const sqlInsert= "INSERT INTO user_data( userName,email,mobile, password) VALUES (?,?,?,?);"

    con.query(sqlInsert,[userName,email,mobile,password], (err, result)=> {
        console.log(err)
        res.send("hello success")
    })
    
//    console.log(res.send("hello world")) 
})

app.listen(3030, () => {
    console.log('running on port 3030, happy coding')
})


