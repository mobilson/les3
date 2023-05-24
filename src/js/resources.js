import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import namiImage from '../images/pix-nami-removebg-preview.png'
import zoroImage from '../images/pix-zorro-removebg-preview.png'
import planeImage from '../images/pix-plane-removebg-preview.png'
import ninjaImange from '../images/ninja.png'
import bgImange from '../images/sky.png'
import ShurikenImange from '../images/shuriken.png'

const Resources = {
    Nami: new ImageSource(namiImage),
    Zoro: new ImageSource(zoroImage),
    Plane: new ImageSource(planeImage),
    Ninja: new ImageSource(ninjaImange),
    Bg: new ImageSource(bgImange),
    Shuriken: new ImageSource(ShurikenImange)

}
const ResourceLoader = new Loader([
    Resources.Nami,
    Resources.Zoro,
    Resources.Plane,
    Resources.Ninja,
    Resources.Bg,
    Resources.Shuriken
])

export { Resources, ResourceLoader }