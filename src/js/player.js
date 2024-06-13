import { Actor, Keys, Vector } from 'excalibur';
import { Resources } from './resources';

class Player extends Actor {
	constructor({ pos }) {
		super();
		this.pos = pos;
		this.scale = new Vector(2, 2);
	}

	onInitialize() {
		this.graphics.use(Resources.PlayerFullHealth.toSprite());
	}

	lookingLeft = false;

	onPreUpdate(engine) {
		this.vel.x = 0;
		this.vel.y = 0;
		if (engine.input.keyboard.isHeld(Keys.S)) {
			console.log('s');
			this.vel.y += 80;
		}
		if (engine.input.keyboard.isHeld(Keys.W)) {
			console.log('w');
			this.vel.y -= 80;
		}
		if (engine.input.keyboard.isHeld(Keys.D)) {
			console.log('d');
			this.vel.x += 80;
			if (this.lookingLeft === true) {
				this.scale.x *= -1;
				this.lookingLeft = false;
			}
		}
		if (engine.input.keyboard.isHeld(Keys.A)) {
			console.log('a');
			this.vel.x -= 80;
			if (this.lookingLeft === false) {
				this.scale.x *= -1;
				this.lookingLeft = true;
			}
		}
		console.log(this.vel);
	}
}

export { Player };
