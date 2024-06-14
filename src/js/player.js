import { Actor, Keys, Vector } from 'excalibur';
import { Resources } from './resources';
import { Pistol } from './pistol';

class Player extends Actor {
	pistolPosX = 0;
	pistolPosY = 0;

	constructor({ pos }) {
		super();
		this.pos = pos;
		this.scale = new Vector(2, 2);
	}

	onInitialize() {
		this.graphics.use(Resources.PlayerFullHealthRight.toSprite());
		const pistol = new Pistol()
		this.addChild(pistol)
	}

	lookingLeft = false;
	lookingUp = true;

	onPreUpdate(engine) {
		this.vel.x = 0;
		this.vel.y = 0;
		if (engine.input.keyboard.isHeld(Keys.S)) {
			console.log('s');
			this.vel.y += 80;
			this.graphics.use(Resources.PlayerFullHealthDown.toSprite());
		}
		if (engine.input.keyboard.isHeld(Keys.W)) {
			console.log('w');
			this.vel.y -= 80;
			this.graphics.use(Resources.PlayerFullHealthUp.toSprite());
		}
		if (engine.input.keyboard.isHeld(Keys.D)) {
			console.log('d');
			this.vel.x += 80;
			this.graphics.use(Resources.PlayerFullHealthRight.toSprite());
		}
		if (engine.input.keyboard.isHeld(Keys.A)) {
			console.log('a');
			this.vel.x -= 80;
			this.graphics.use(Resources.PlayerFullHealthLeft.toSprite());
		}
		console.log(this.vel);
	}
}

export { Player };
