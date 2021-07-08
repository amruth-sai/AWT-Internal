function fetch() {
    let uname = document.getElementById('uname').value
    let request = new XMLHttpRequest()
    let url=`https://api.github.com/users/${uname}/repos`;


    
    request.open('GET',url,true)
    request.send()
    
    let table = document.createElement('TABLE')
    table.border = 1
    let row = table.insertRow(-1)
    let cell1 = row.insertCell(-1)
    let cell2 = row.insertCell(-1)
    cell1.innerHTML = 'REPO NAME'
    cell2.innerHTML = 'DESCRIPTION'

    request.onload = function() {
        try{
            res = JSON.parse(this.response)
            
            res.forEach(data => {
                console.log(data)
                let name = data.name
                let desc = data.description
                
                let row = table.insertRow(-1)
                let cell1 = row.insertCell(-1)
                let cell2 = row.insertCell(-1)
                cell1.innerHTML = name
                cell2.innerHTML = desc

            });
        }
        catch(err){
            console.log(err)
        }
    }
    document.getElementById('display').append(table)
}