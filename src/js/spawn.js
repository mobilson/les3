import {Actor, Random, Timer} from "excalibur";
import {Enemy} from "./enemy.js";

export class Spawner extends Enemy{

    constructor() {
        super();

        this.random = new Random(1337)

    }

    onInitialize(engine) {
        this.timer = new Timer({
            fcn: () => this.spawn(engine),
            interval: 3000,
            repeats: true
        })
        engine.currentScene.add(this.timer)
        this.timer.start()
    }

    spawn(engine) {
        console.log("spawn")
        const shuriken = new Enemy(
            this.random.integer(0, 800),
            this.random.integer(0, 600)
        )
        engine.currentScene.add(shuriken)
    }
}