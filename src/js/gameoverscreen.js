import '../css/style.css'
import { Actor, Engine, Random, Physics, Vector, Scene } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Button } from './button'
// import { Gameover } from './gameoverscreen'

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

        const button = new Button()
        button.graphics.use(Resources.Button.toSprite())
        button.pos = new Vector(400, 400)
        this.add(button)


        button.on("pointerup", (event) => {
            engine.goToScene('start')
        })
    }

    onPostUpdate(engine, delta) {
        if (this.pos.x < -this.offset) {
            this.pos = new Vector(0, 0)
        }
    }
}