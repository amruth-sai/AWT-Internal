val = 3

first = val = val * 2
second = val = val * 2
third = val = val * 2

var p = new Promise((resolve,reject)=>{
    setTimeout(
        ()=>{
            resolve(val)
        },1000
    )
})

p.then(val).then(first).then(second).then(third).then((val)=>{
    console.log(val)
})