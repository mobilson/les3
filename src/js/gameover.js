import '../css/style.css'
import { Actor, Engine, Random, Physics, Vector, Scene } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Gameover } from './gameover'

export class Gameover extends Scene {

    offset
    
    onInitialize(engine){
        const gameoverIamge = Resources.Gameover.toSprite()
        this.offset = gameoverIamge.width

        const group = new GraphicsGroup({
            members: [
                {
                    graphic: gameoverIamge,
                    pos: new Vector(0, 0),
                },
                {
                    graphic: gameoverIamge,
                    pos: new Vector(gameoverIamge.width, 0),
                }
            ]
        })

        this.graphics.anchor = new Vector(0,0)
        this.graphics.add(group)       
        this.pos = new Vector(0, 0)
        this.vel = new Vector(-110, 0)
    }

    onPostUpdate(engine, delta) {
        if (this.pos.x < -this.offset) {
            this.pos = new Vector(0, 0)
        }
    }
}