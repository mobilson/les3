import '../css/style.css'
import { Actor, Engine, Random, Physics, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Roof} from './roof'
import { StartScreen } from "./startscreen.js";
import { Gameover } from './gameoverscreen.js';

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 709 })
        this.start(ResourceLoader).then(() => this.startGame())
        this.showDebug(true) 
        this.debug.transform.showAll = true
       


    }

    startGame() {
        console.log("start de game!")
        this.addScene('startScreen', new StartScreen())
        this.addScene('roof', new Roof())
        this.addScene('gameover', new Gameover())

        this.goToScene('startScreen')
 
}
}

new Game();