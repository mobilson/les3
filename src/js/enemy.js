import { Actor, Resource, Vector, Input, Random } from "excalibur"
import { Resources } from "./resources"

export class Enemy extends Actor{
    name
    color
    score
    constructor(){
        super({width: Resources.Goose.width, height: Resources.Goose.height})
        
        this.pos = new Vector (1200,Math.random()*800)
        this.vel = new Vector (-100 + Math.random() * -300, 0 )
        this.graphics.use(Resources.Goose.toSprite())
        this.scale= new Vector ( 0.2, 0.2)
//        this.angularVelocity = 3

        console.log('enemy aangemaakt!')
        this.on('collisionstart', (event) => this.hitSomething(event))   
    }

    

    hitSomething(event){       
          event.other.kill()    
    }

    showName() {
        console.log(this.name);
    }

    addPoint() {
        this.score++
    }

    }
