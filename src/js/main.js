import '../css/style.css'
import fishImage from '../images/fish.png'
import { PLayer } from "../player";

const div = document.createElement("div")
div.classList.add("fish")
document.body.appendChild(div)

const img = document.createElement("img")
img.src = fishImage
div.appendChild(img)


let mario = new PLayer()
mario.name = "Mario"
mario.color = "Red"
mario.score = 1
mario.showName()

let luigi = new PLayer()
luigi.name = "Mario"
luigi.color = "Green"
luigi.score = 1
luigi.showName