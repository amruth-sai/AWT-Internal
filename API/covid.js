function fetch() {
    let country = document.getElementById('country').value
    let request = new XMLHttpRequest()
    let url=`https://api.covid19api.com/live/country/${country}`;

    
    request.open('GET',url,true)
    request.send()
    
    let table = document.createElement('TABLE')
    table.border = 1
    let row = table.insertRow(-1)
    let cell1 = row.insertCell(-1)
    let cell2 = row.insertCell(-1)
    let cell3 = row.insertCell(-1)
    cell1.innerHTML = 'ACTIVE'
    cell2.innerHTML = 'DEATH'
    cell3.innerHTML = 'RECOVERED'

    request.onload = function() {
        try{
            res = JSON.parse(this.response)
            
            res.forEach(data => {
                console.log(data.index)
                let row = table.insertRow(-1)
                let cell1 = row.insertCell(-1)
                let cell2 = row.insertCell(-1)
                let cell3 = row.insertCell(-1)
                cell1.innerHTML = data.Active
                cell2.innerHTML = data.Deaths
                cell3.innerHTML = data.Recovered
            });
        }
        catch(err){
            console.log(err)
        }
    }
    document.getElementById('display').append(table)
}