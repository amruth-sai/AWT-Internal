const express = require("express");
var path = require('path')

var app = express()

app.use(express.urlencoded())
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.post('/signup',(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})

app.put('/signup/:id',(req,res)=>{
    console.log(req.params.id)
    res.send(req.body)
})

app.delete('/delete/:id',(req,res)=>{
    console.log(req.params.id)
})

app.listen(8000)