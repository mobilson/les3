import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import ninjaImange from '../images/ninja.png'
import bgImange from '../images/sky.png'
import ShurikenImange from '../images/shuriken.png'
import nightskyImage from '../images/nightsky.png'
import groundImage from '../images/ground.png'

const Resources = {

    Ninja: new ImageSource(ninjaImange),
    Bg: new ImageSource(bgImange),
    Night: new ImageSource(nightskyImage),
    Shuriken: new ImageSource(ShurikenImange),
    Ground: new ImageSource(groundImage),

}
const ResourceLoader = new Loader([
  
    Resources.Ninja,
    Resources.Bg,
    Resources.Shuriken,
    Resources.Night,
    Resources.Ground
])

export { Resources, ResourceLoader }