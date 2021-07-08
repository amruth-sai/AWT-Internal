const dateTime = require('./DateAndTime')
var http = require('http')

http.createServer(function (req,res) 
{
    if(req.url == '/')
    {
        res.write(`Date : ${dateTime.date}`)
        res.write(`Time : ${dateTime.time}`)
        res.end()
    }
    
}).listen(8000)