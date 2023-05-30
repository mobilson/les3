import '../css/style.css'
import { Actor, Engine, Random, Physics, Vector, Scene } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { PLayer } from './player'
import { Enemy } from './enemy'
import { Background} from './background'
import { Ground } from './ground'
import { Ground2 } from './ground2'
import { Spawner } from './spawn'

export class Roof extends Scene {

    constructor() {
        super({ width: 1280, height: 709 })
        // this.start(ResourceLoader).then(() => this.startGame())
        // this.showDebug(true) 
        // this.debug.transform.showAll = true
       


    }

    onInitialize(engine) {
        Physics.gravity = new Vector(0, 600);
        Physics.useArcadePhysics();
        console.log("start de game!")

        const spawn = new Spawner()
        this.add(spawn)

        const b = new Background ()
        this.add(b)

        const p = new PLayer(100, 500)
        this.add(p)

        const g = new Ground()
        this.add (g)

        const g2 = new Ground2()
        this.add (g2)

       
        // for(let i = 0; i<30;i++){
        //     const e = new Enemy ()
        //     this.add(e)

        // }

    }
}

new Roof()