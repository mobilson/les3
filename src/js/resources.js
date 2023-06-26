import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import ninjaImange from '../images/ninja.png'
import bgImange from '../images/sky.png'
import ShurikenImange from '../images/shuriken.png'
import nightskyImage from '../images/nightsky.png'
import groundImage from '../images/ground.png'
import heartImage from '../images/heart.png'
import gameoverIamge from '../images/gameover.png'
import gooseImage from '../images/goose.png'
import planeIamge from '../images/plane.png'
import startImage from '../images/start.png'
import okIamge from '../images/ok.png'

const Resources = {

    Ninja: new ImageSource(ninjaImange),
    Bg: new ImageSource(bgImange),
    Night: new ImageSource(nightskyImage),
    Shuriken: new ImageSource(ShurikenImange),
    Ground: new ImageSource(groundImage),
    Heart: new ImageSource(heartImage),
    Gameover: new ImageSource(gameoverIamge),
    Goose:new ImageSource(gooseImage),
    Plane:new ImageSource(planeIamge),
    Start:new ImageSource(startImage), 
    Ok:new ImageSource(okIamge)

}
const ResourceLoader = new Loader([
  
    Resources.Ninja,
    Resources.Bg,
    Resources.Shuriken,
    Resources.Night,
    Resources.Ground,
    Resources.Heart,
    Resources.Gameover,
    Resources.Goose,
    Resources.Plane,
    Resources.Start,
    Resources.Ok
])

export { Resources, ResourceLoader }