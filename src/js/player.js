import { Actor, Keys, Vector } from 'excalibur';
import { Resources } from './resources';
import { Pistol } from './pistol';

class Player extends Actor {

	constructor({ pos }) {
		super();
		this.pos = pos;
		this.scale = new Vector(1.5, 1.5);
	}

	onInitialize() {
		this.graphics.use(Resources.PlayerFullHealthRight.toSprite());
		const pistol = new Pistol()
		this.addChild(pistol)
	}

	onPreUpdate(engine) {
		this.vel.x = 0;
		this.vel.y = 0;

		this.graphics.use(Resources.PlayerFullHealthDown.toSprite());
		if (engine.input.keyboard.isHeld(Keys.S)) {
			this.vel.y += 80;
			this.graphics.use(Resources.PlayerFullHealthDown.toSprite());
		}
		if (engine.input.keyboard.isHeld(Keys.W)) {
			this.vel.y -= 80;
			this.graphics.use(Resources.PlayerFullHealthUp.toSprite());
		}
		if (engine.input.keyboard.isHeld(Keys.D)) {
			this.vel.x += 80;
			this.graphics.use(Resources.PlayerFullHealthRight.toSprite());
			this.graphics.flipHorizontal = false;
		}
		if (engine.input.keyboard.isHeld(Keys.A)) {
			this.vel.x -= 80;
			this.graphics.use(Resources.PlayerFullHealthRight.toSprite());
			this.graphics.flipHorizontal = true;
		}
	}
}

export { Player };
