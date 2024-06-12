import {Actor, Keys, Vector} from 'excalibur';
import {Resources} from './resources';

class Player extends Actor {
	constructor({pos}) {
		super();
		this.pos = pos;
		this.scale = new Vector(2, 2);
	}

	onInitialize() {
		this.graphics.use(Resources.PlayerFullHealth.toSprite());
	}

	onPreUpdate(engine) {
		this.vel = new Vector(0, 0);
		if (engine.input.keyboard.isHeld(Keys.W)) {
			this.vel.y -= 80;
		}
		if (engine.input.keyboard.isHeld(Keys.S)) {
			this.vel.y += 80;
		}
		if (engine.input.keyboard.isHeld(Keys.A)) {
			this.vel.x -= 80;
		}
		if (engine.input.keyboard.isHeld(Keys.D)) {
			this.vel.x += 80;
		}
	}
}

export {Player};
