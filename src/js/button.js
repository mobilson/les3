import {Actor} from "excalibur";
import {Resources} from "./resources.js";

export class Button extends Actor {
    constructor() {
        super({
            width:Resources.Ok.width, height:Resources.Ok.height
        })
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Ok.toSprite())
    }
}