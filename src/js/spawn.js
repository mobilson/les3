import {Actor, Random, Timer} from "excalibur";
import {Shuriken} from "./enemy.js";

export class Spawner extends Actor{

    constructor() {
        super();

        this.random = new Random(1337)

    }

    onInitialize(engine) {
        this.timer = new Timer({
            fcn: () => this.spawn(engine),
            interval: 1000,
            repeats: true
        })
        engine.currentScene.add(this.timer)
        this.timer.start()
    }

    spawn(engine) {
        console.log("spawn")
        const shuriken = new Shuriken(
            this.random.integer(0, 800),
            this.random.integer(0, 600)
        )
        engine.currentScene.add(rock)
    }
}