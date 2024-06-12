import {Scene, Actor, Vector} from 'excalibur';
import {Resources} from '../resources';

class Lvl1 extends Scene {
	constructor() {
		super();
	}
	onActivate() {
		this.player = new Actor();
		this.player.graphics.use(Resources.Fish.toSprite());
		this.player.pos = new Vector(400, 300);
		this.player.vel = new Vector(-10, 0);
		this.add(this.player);
	}
	onDeactivate() {
		this.clear();
	}
}

export {Lvl1};
