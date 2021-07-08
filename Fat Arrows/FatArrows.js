areaOfSquare = s => (s*s)
console.log(areaOfSquare(10))

areaOfRectangle = (l,b) => {
    return l*b
}
console.log(areaOfRectangle(1,2))

var obj = {
    first : 'Neeraj',
    last : 'badam',
    fullName : function()
    {
        setTimeout(
            function () {
                console.log(this.first+" "+this.last)
            },1000
        )
    },
    fullNameUsingFatArrows : function()
    {
        setTimeout(
            () => {
                console.log(this.first+" "+this.last)
            },1000
        )
    }
}

obj.fullName()      // Here the setTimeout function points to window object
obj.fullNameUsingFatArrows()    // Here the setTimeout points to window object but the expected o/p will be correct which makes use of arrow function