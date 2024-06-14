import {Actor} from 'excalibur';
import {Resources} from './resources';

class Map extends Actor {
	constructor() {
		super();
	}
	onInitialize() {
		this.graphics.use(Resources.Background1.toSprite());
	}
}

export {Map};
