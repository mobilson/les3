import { Actor, Resource, Vector, Input, Random } from "excalibur"
import { Resources } from "./resources"

export class Enemy extends Actor{
    name
    color
    score
    constructor(){
        super({width: Resources.Plane.width, height: Resources.Plane.height})
        
        this.pos = new Vector (1200,Math.random()*500)
        this.vel = new Vector (-100 + Math.random() * -300, 0 )
        this.graphics.use(Resources.Plane.toSprite())
        this.scale= new Vector ( 0.3, 0.3)

        console.log('enemy aangemaakt!')
        this.on('collisionstart', (event) => this.hitSomething(event))   
    }

    hitSomething(event){       
        // event.other.kill()    
    }

    showName() {
        console.log(this.name);
    }

    addPoint() {
        this.score++
    }

    }