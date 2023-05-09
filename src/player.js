export class PLayer{
    name
    color
    score
    constructor(){
        this.name = ""
        this.color = ""
        this.score = 0
        console.log('player aangemaakt!')
    }

    showName() {
        console.log(this.name);
    }

    addPoint() {
        this.score++
    }

}