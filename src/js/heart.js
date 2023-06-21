import {Actor, CollisionType, Engine, GraphicsGroup, Input, Shape, Vector} from "excalibur";
import {Resources} from "./resources.js";

export class Heart extends Actor {
    constructor() {
        super({
            width: Resources.Heart.width,
            height: Resources.Heart.height,
            pos: new Vector(100, 80)

        })
        this.scale= new Vector ( 0.1, 0.1)

    }

    onInitialize(engine) {
        this.graphics.use(Resources.Heart.toSprite())
        this.body.collisionType = CollisionType.Fixed
        this.body.useGravity = false
        this.vel = new Vector(-100, 0)
    }

    onPreUpdate(engine, delta) {
        if (this.pos.x < -780) {
            this.pos = new Vector(3200, Math.random() * 300 + 560)
        }
    }
}