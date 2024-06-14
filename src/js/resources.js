import { ImageSource, Sound, Resource, Loader } from 'excalibur';

// voeg hier jouw eigen resources toe
const Resources = {
	Background1: new ImageSource('images/background.png'),
	PlayerFullHealthRight: new ImageSource('images/players/playerRight.png'),
	PlayerFullHealthLeft: new ImageSource('images/players/playerLeft.png'),
	PlayerFullHealthUp: new ImageSource('images/players/playerUp.png'),
	PlayerFullHealthDown: new ImageSource('images/players/playerDown.png'),
	PistolRight: new ImageSource('images/pistolRight.png'),
	PistolLeft: new ImageSource('images/pistolLeft.png'),
	PistolUp: new ImageSource('images/pistolUp.png'),
	Bullet: new ImageSource('images/bullet.png'),
};

const ResourceLoader = new Loader();
for (let res of Object.values(Resources)) {
	ResourceLoader.addResource(res);
}

export { Resources, ResourceLoader };
