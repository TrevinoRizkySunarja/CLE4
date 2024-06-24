import { Scene, Actor, Vector } from 'excalibur';
import { Resources } from '../resources';
import { Player } from '../player';
import { UI } from '../ui';

class Lvl1 extends Scene {
	constructor() {
		super();
	}
	onActivate() {

		this.background = new Actor();
		this.background.graphics.use(Resources.Background1.toSprite());
		this.background.pos = new Vector(0, 0);
		this.add(this.background);

		this.player = new Player({
			pos: new Vector(0, 0)
		});
		this.add(this.player);

		this.camera.strategy.lockToActor(this.player);
	}
	onDeactivate() {
		this.clear();
	}
}

export { Lvl1 };
