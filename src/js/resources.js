import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import namiImage from '../images/pix-nami-removebg-preview.png'
import zoroImage from '../images/pix-zorro-removebg-preview.png'
import planeImage from '../images/pix-plane-removebg-preview.png'
import gooseImange from '../images/goose.png'
import bgImange from '../images/sky.png'

const Resources = {
    Nami: new ImageSource(namiImage),
    Zoro: new ImageSource(zoroImage),
    Plane: new ImageSource(planeImage),
    Goose: new ImageSource(gooseImange),
    Bg: new ImageSource(bgImange)

}
const ResourceLoader = new Loader([
    Resources.Nami,
    Resources.Zoro,
    Resources.Plane,
    Resources.Goose,
    Resources.Bg
])

export { Resources, ResourceLoader }