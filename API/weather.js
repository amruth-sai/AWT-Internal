function fetchWeather() {
    let cityName = document.getElementById('city').value
    let request = new XMLHttpRequest()
    let apikey = `431b656892250c4e5e7f9620748aca9f`
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apikey}`
    
    request.open('GET',url,true)
    request.send()
    
    let table = document.createElement('TABLE')
    table.border = 1
    let row = table.insertRow(-1)
    let cell1 = row.insertCell(-1)
    let cell2 = row.insertCell(-1)
    let cell3 = row.insertCell(-1)
    cell1.innerHTML = 'DATE'
    cell2.innerHTML = 'TEMP'
    cell3.innerHTML = 'TIME'

    request.onload = function() {
        res = JSON.parse(this.response)
        res = res.list
        res.forEach(element => {
            let date = element.dt_txt.split(' ')[0]
            let temp = element.main.temp
            let time = element.dt_txt.split(' ')[1]
            let row = table.insertRow(-1)
            let cell1 = row.insertCell(-1)
            let cell2 = row.insertCell(-1)
            let cell3 = row.insertCell(-1)
            cell1.innerHTML = date
            cell2.innerHTML = temp
            cell3.innerHTML = time
        });
    }
    document.getElementById('display').append(table)
}