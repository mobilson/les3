import '../css/style.css'
import { Actor, Engine, Random, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { PLayer } from './player'
import { Enemy } from './enemy'
//import { Background} from './background'

export class Game extends Engine {

    constructor() {
        super({ width: 1280, height: 720 })
        this.start(ResourceLoader).then(() => this.startGame())
        this.showDebug(true) 
        this.debug.transform.showAll = true

    }

    startGame() {
        console.log("start de game!")
  
        const p = new PLayer(100, 200)
       // const b = new Background ()
        this.add(p)
       // this.add(b)

        // for loop
        for(let i = 0; i<30;i++){
            const e = new Enemy ()
            this.add(e)

        }

    }
}

new Game()