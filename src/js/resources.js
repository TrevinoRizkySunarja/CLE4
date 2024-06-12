import {ImageSource, Sound, Resource, Loader} from 'excalibur';

// voeg hier jouw eigen resources toe
const Resources = {
	Fish: new ImageSource('images/fish.png'),
	Background1: new ImageSource('images/background.png'),
	PlayerFullHealth: new ImageSource('images/player.png')
};

const ResourceLoader = new Loader();
for (let res of Object.values(Resources)) {
	ResourceLoader.addResource(res);
}

export {Resources, ResourceLoader};
