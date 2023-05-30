import '../css/style.css'
import { Actor, Engine, Random, Physics, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { PLayer } from './player'
import { Enemy } from './enemy'
import { Background} from './background'
import { Ground } from './ground'

export class Game extends Engine {

    constructor() {
        super({ width: 1280, height: 709 })
        this.start(ResourceLoader).then(() => this.startGame())
        this.showDebug(true) 
        this.debug.transform.showAll = true
       


    }

    startGame() {
        Physics.gravity = new Vector(0, 1000);
        console.log("start de game!")
        const b = new Background ()
        this.add(b)

        const p = new PLayer(100, 200)
        this.add(p)

        const g = new Ground 
        this.add (g)

       
        for(let i = 0; i<30;i++){
            const e = new Enemy ()
            this.add(e)

        }

    }
}

new Game()