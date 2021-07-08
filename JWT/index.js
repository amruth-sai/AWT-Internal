const express = require('express')
var jwt = require('jsonwebtoken');
let secretKey = 'NeverSharing'

const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.get("/",(req,res)=>{    
    res.send(`This is home page`)
})

app.get('/students',verifyToken,(req,res)=>{
    res.send({user:'Valid User'})
})

app.post('/login',(req,res)=>{
    const user = {
        username : 'I am user',
        password : 'User Unknown'
    }
    jwt.sign({user:user},secretKey,(err,token)=>{
        res.send({token:token})
    })
})

app.listen(8000)

function verifyToken(req,res,next) 
{
    /*

    {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYm5lZXJhajI3IiwicGFzc3dvcmQiOiI5MzgxOTQ4OTc2In0sImlhdCI6MTYyNTc1NjE5OH0.-B-v54CSYp-iI5qoWZgrVewovHzn-LB_j3sQi5PwkcM"
    }

    */
    let token = req.headers['authorization']
    try {
        token = token.split(' ')[1]
        
        console.log(token)
        jwt.verify(token,secretKey,(err,decoded)=>{
            if(err)
            {
                return res.json({success:false,message:'Unauthorized user'})
            }
            else
            {
                req.decoded = decoded;
                next()
            }
        })
    } catch (error) {
        
    }
}