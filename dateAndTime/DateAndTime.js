function dateTime() {
    const date = new Date()
    let currentDate = date.getDate()
    let currentMonth = date.getMonth()+1
    let currentYear = date.getFullYear()
    currentDate = (currentDate < 10) ? ('0'+ currentDate) : currentDate
    currentMonth = (currentMonth < 10) ? ('0'+ currentMonth) : currentMonth
    d = currentDate+'-'+currentMonth+'-'+currentYear
    let currentHours = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();
    
    currentHours = (currentHours<10) ? ('0'+currentHours):currentHours
    currentMinutes = (currentMinutes<10) ? ('0'+currentMinutes):currentMinutes
    currentSeconds = (currentSeconds<10) ? ('0'+currentSeconds):currentSeconds
    t = currentHours+':'+currentMinutes+':'+currentSeconds
    obj = {date : d,time : t}
    return obj
}
module.exports = dateTime()