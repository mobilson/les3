import '../css/style.css'
import { Actor, Engine, Random, Physics, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Roof} from './roof'
export class Game extends Engine {

    constructor() {
        super({ width: 1280, height: 709 })
        this.start(ResourceLoader).then(() => this.startGame())
        this.showDebug(true) 
        this.debug.transform.showAll = true
       


    }

    startGame() {
 this.addScene('roof', new Roof()  )
 this.goToScene('roof')
 
}
}

new Game();