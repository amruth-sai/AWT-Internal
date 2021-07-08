function getPincode(citycode) {
    return new Promise((resolve,reject) => {
        setTimeout(
            ()=>
            {
                var pincode = ''
                if(citycode == 'HYD')
                    pincode = 500001;
                else if(citycode == 'MBNR')
                    pincode = 509001;
                
                if(pincode !== '')
                {
                    resolve({
                        pincode : pincode,
                        citycode : citycode
                    })
                }
            }
        )
    })
}

function getCityName(pincode) {
    return new Promise((resolve,reject) => {
        setTimeout(
            ()=>
            {
                var cityName = ''
                if(pincode == 500001)
                    cityName = 'Hyderabad';
                else if(pincode == 509001)
                    cityName = 'Mahabubnagar';
                
                if(pincode !== '')
                {
                    resolve({
                        cityName : cityName
                    })
                }
            }
        )
    })
}

function getWeather(city) {
    return new Promise((resolve,reject) => {
        setTimeout(
            ()=>
            {
                var weather = ''
                if(city == 'Hyderabad')
                    weather = 'Cool';
                else if(city == 'Mahabubnagar')
                    weather = 'Hot';
                
                if(pincode !== '')
                {
                    resolve({
                        weather : weather
                    })
                }
            }
        )
    })
}

async function getDetails(code) {
    res = await getPincode(code);
    console.log(res)
    pincode = res.pincode
    cityName = await getCityName(pincode)
    console.log(cityName)
    weather = await getWeather(cityName.cityName)
    console.log(weather)
}

getDetails('MBNR')

getDetails('HYD')