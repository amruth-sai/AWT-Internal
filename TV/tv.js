class Tv
{
    constructor(brand,channel=5,volume=10)
    {
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;
        this.defaultValues = {
            brand : brand,
            channel : channel,
            volume : volume
        }
    }
    incVolume(vol=1)
    {
        vol = this.volume+vol
        this.volume = (vol <= 100) ? (vol) : this.volume;
        if(vol > 100)
            console.log("Max volume reached")
    }
    decVolume(vol=1)
    {
        vol = this.volume-vol
        this.volume = (vol > 0) ? (vol) : this.volume;
        if(vol < 0)
            console.log("Volume can't go below zero")
    }
    reset()
    {
        this.brand = this.defaultValues.brand
        this.channel = this.defaultValues.channel
        this.volume = this.defaultValues.volume
    }
    set Channel(channel)
    {
        if(channel >= 0 && channel <= 100)
            this.channel = channel
        else
            console.log("Channel range is b/w 0-100")
    }
    display()
    {
        console.log(this.brand+' '+this.channel+' '+this.volume)
    }
}

c = new Tv('Sony')
console.log(c)


c.incVolume(100)
console.log(c)

c.incVolume(1)

console.log(c)

console.log('reset')
c.reset()
console.log(c)

c.decVolume(11)

console.log(c)
c.decVolume(1)

console.log(c)

c.Channel = 99

console.log(c)

c.Channel = 125

console.log(c)

c.display()