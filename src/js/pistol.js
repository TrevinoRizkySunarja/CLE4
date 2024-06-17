import { Actor, Engine, Keys, Vector } from 'excalibur';
import { Player } from './player';
import { Resources } from './resources';
import { Bullet } from './bullet';

export class Pistol extends Actor {
	constructor() {
		super();
		this.pos = new Vector(15, -3);
		this.scale = new Vector(0.8, 0.8);
		this.graphics.use(Resources.PistolRight.toSprite());
	}
	onPreUpdate(engine) {
		if (engine.input.keyboard.isHeld(Keys.S)) {
			this.graphics.use(Resources.PistolUp.toSprite());
			this.pos = new Vector(5.5, -3);
		}
		if (engine.input.keyboard.isHeld(Keys.W)) {
			this.graphics.use(Resources.PistolUp.toSprite());
			this.pos = new Vector(6.5, -5);
		}
		if (engine.input.keyboard.isHeld(Keys.D)) {
			this.graphics.use(Resources.PistolRight.toSprite());
			this.pos = new Vector(15, -3);
		}
		if (engine.input.keyboard.isHeld(Keys.A)) {
			this.graphics.use(Resources.PistolLeft.toSprite());
			this.pos = new Vector(-15, -3);
		}
	}

}
