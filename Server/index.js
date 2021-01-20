const express = require('express')
const app = express()


app.get('/', (req, res) => {
    
   console.log(res.send("hello world")) 
})

app.listen(3030, () => {
    console.log('running on port 3030, happy coding')
})


