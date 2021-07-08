const express = require('express')
const app = express()

app.use(express.urlencoded())

app.use(express.json())

app.post('/users',(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})

app.put('/users/:id',(req,res)=>{
    console.log(req.params.id)
    res.send(req.body)
})

app.get('/users',(req,res)=>{
    console.log(req.query)
})

app.get('/',(req,res)=>{
    res.send({username:'Neeraj'})
})


app.listen(8000)