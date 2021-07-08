class Car
{
    constructor(brand,model,speed=10)
    {
        this.brand = brand;
        this.model = model;
        this.speed = speed;
    }
    incSpeed(speed=1)
    {
        speed = this.speed+speed
        this.speed = (speed <= 100) ? (speed) : this.speed;
        if(speed > 100)
            console.log("Max speed reached")
    }
    decSpeed(speed=1)
    {
        speed = this.volume-speed
        this.speed = (speed > 0) ? (speed) : this.speed;
        if(speed < 0)
            console.log("Can't decelerate below zero")
    }
    set Stop(x = 0)
    {
        this.speed = x
    }
    display()
    {
        console.log(this.brand+' '+this.model+' '+this.speed)
    }
}

c = new Car('Audi','Q8')

console.log(c)
c.Stop = 0
console.log(c)
