import { Actor, Resource, Vector, Input, CollisionType } from "excalibur"
import { Resources } from "./resources"

export class PLayer extends Actor{
    name
    color
    score
    constructor( posX, posY){
        super({width: Resources.Plane.width, height: Resources.Plane.height})
        this.pos = new Vector (posX, posY)
        // this.vel = new Vector (-10, 40 )
        this.graphics.use(Resources.Plane.toSprite())
        this.scale= new Vector ( 0.4, 0.4)
        this.body.collisionType= CollisionType.Active
        this.body.useGravity=true
        


        console.log('player aangemaakt!')
        this.on('collisionstart', (event) => this.hitSomething(event))   
    }

    hitSomething(event){       
        event.other.kill() 
        this.game.goToScene("gameover")
      
        console.log('HIT') 
    }

    showName() {
        console.log(this.name);
    }

    addPoint() {
        this.score++
    }

    
    
    jump() {
        console.log('jump');
        this.vel = new Vector(this.vel.x, this.vel.y-600);
    }
    
    fall() {
        this.vel = new Vector(this.vel.x, this.vel.y+200);
    }

    onPreUpdate(engine) {        
        let xspeed = 0        
        let yspeed = 0        
        // if (engine.input.keyboard.isHeld(Input.Keys.W) || engine.input.keyboard.isHeld(Input.Keys.Up)) {            yspeed = -300        }       
        // if (engine.input.keyboard.isHeld(Input.Keys.S) || engine.input.keyboard.isHeld(Input.Keys.Down)) {            yspeed = 300        }   
        if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            this.jump();
        }
        if (engine.input.keyboard.wasReleased(Input.Keys.Space)) {
            this.fall();
        }         
        if (engine.input.keyboard.isHeld(Input.Keys.A) || engine.input.keyboard.isHeld(Input.Keys.Left)) {            xspeed = -200      }        
        if (engine.input.keyboard.isHeld(Input.Keys.D) || engine.input.keyboard.isHeld(Input.Keys.Right)) {            xspeed = 200     }    
     
        this.vel = new Vector(xspeed, this.vel.y + yspeed)   
    }}