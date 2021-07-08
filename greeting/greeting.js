var fs = require('fs')

var http = require('http')
fs.readFile('greet.txt',function(err,data) {
    if(err)
    {
        console.log(err)
    }
    else
    {
        http.createServer(function (req,res) 
        {
            if(req.url == '/')
            {
                res.write(data.toString())
                res.end()
            }
        }).listen(8000)
    }
})