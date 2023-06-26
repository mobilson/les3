import {Actor, Scene, Vector} from 'excalibur'
import {Resources} from "./resources.js";
import {Button} from "./button.js";

export class StartScreen extends Scene {

    onInitialize(engine) {
        console.log("start screen is created")
        

        const start = new Actor()
        start.graphics.use(Resources.Start.toSprite())
        start.pos = new Vector(400, 350)
        this.add(start)

        const button = new Button()
        button.graphics.use(Resources.Button.toSprite())
        button.pos = new Vector(400, 400)
        this.add(button)


        button.on("pointerup", (event) => {
            engine.goToScene('roof')
        })

       
            this.enableCapturePointer = true
            this.pointer.useGraphicsBounds = true
            this.on("exitviewport", (event) => this.resetPosition())
            this.on("pointerup", (event) => this.resetPosition())
    }

}
