import { ImageSource, Sound, Resource, Loader } from 'excalibur';

// voeg hier jouw eigen resources toe
const Resources = {
	Background1: new ImageSource('images/background.png'),
	PlayerFullHealthRight: new ImageSource('images/players/playerRight.png'),
	PlayerFullHealthLeft: new ImageSource('images/players/playerLeft.png'),
	PlayerFullHealthUp: new ImageSource('images/players/playerUp.png'),
	PlayerFullHealthDown: new ImageSource('images/players/playerDown.png')
};

const ResourceLoader = new Loader();
for (let res of Object.values(Resources)) {
	ResourceLoader.addResource(res);
}

export { Resources, ResourceLoader };
