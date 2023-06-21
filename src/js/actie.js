import {Actor, Vector, Scene} from "excalibur";
import {Resources} from "./resources.js";
import {Castle} from "./castle.js";
import {Hearts} from "./hearts.js";
import {Run} from "./run.js";


export class Towerdefense extends Scene {


    castle
    lives = 3
    game
    runs = []

    onInitialize(engine) {
        this.game = engine

        const background = new Actor({
            anchor: new Vector(0, 0),
            pos: new Vector(0, 0),
            scale: new Vector(0.53, 0.5),
        });
        background.graphics.use(Resources.Back.toSprite());
        this.add(background);

        this.castle = new Castle(1160, 509)
        this.add(this.castle);

        this.hearts = new Hearts(100, 80)
        this.add(this.hearts)

        this.hearts1 = new Hearts(180, 80)
        this.add(this.hearts1)

        this.hearts2 = new Hearts(260, 80)
        this.add(this.hearts2)

        for (let i = 0; i <= 10; i++) {
            const run = new Run(0, 633)
            // this.runs.push(run)
            this.add(run);
        }
    }

    walkintocastle() {
        this.lives -= 1

        if (this.lives === 2) {
            this.hearts2.kill()
        } else if(this.lives === 1){
            this.hearts1.kill()
        }else if(this.lives === 0){
            this.hearts.kill()
        }
        this.checkGameover()
    }

    checkGameover() {
        if (this.lives < 0) {
            this.game.goToScene("gameover")
        }

    }
}