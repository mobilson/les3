import { Actor, Resource, Vector, Input, CollisionType } from "excalibur"
import { Resources } from "./resources"

export class PLayer extends Actor{
    name
    color
    score
    constructor( posX, posY){
        super({width: Resources.Ninja.width, height: Resources.Ninja.height})
        this.pos = new Vector (posX, posY)
        this.vel = new Vector (-10, 40 )
        this.graphics.use(Resources.Ninja.toSprite())
        this.scale= new Vector ( 0.7, 0.7)
        this.body.collisionType= CollisionType.Active
        this.body.useGravity=true
        


        console.log('player aangemaakt!')
        this.on('collisionstart', (event) => this.hitSomething(event))   
    }

    hitSomething(event){       
     //    event.other.kill()   
       // console.log('HIT') 
    }

    showName() {
        console.log(this.name);
    }

    addPoint() {
        this.score++
    }

    onPreUpdate(engine) {        
        let xspeed = 0        
        let yspeed = 0        
        if (engine.input.keyboard.isHeld(Input.Keys.W) || engine.input.keyboard.isHeld(Input.Keys.Up)) {            yspeed = -300        }       
        if (engine.input.keyboard.isHeld(Input.Keys.S) || engine.input.keyboard.isHeld(Input.Keys.Down)) {            yspeed = 300        }        
        if (engine.input.keyboard.isHeld(Input.Keys.A) || engine.input.keyboard.isHeld(Input.Keys.Left)) {            xspeed = -300        }        
        if (engine.input.keyboard.isHeld(Input.Keys.D) || engine.input.keyboard.isHeld(Input.Keys.Right)) {            xspeed = 300        }        
        this.vel = new Vector(xspeed, yspeed)    }}