import {Actor, Vector} from 'excalibur';
import {Resources} from './resources';

class Zombie extends Actor {
	detectionRange = 250;
	image;
	speed = 20;

	constructor(x, y, image) {
		super({
			// pos: new Vector(x, y)
		});
		this.image = image;
		this.pos = new Vector(x, y);
	}

	onInitialize(engine, delta) {
		this.graphics.use(Resources.ZombieNormal.toSprite());
	}

	onPreUpdate(engine, delta) {
		const velocity = this.calculateVelocity(engine);
		const angleInRadians = this.calculateAngle(engine);
		this.vel = Vector.fromAngle(angleInRadians).scale(velocity);
	}

	calculateVelocity(engine) {
		return engine.currentScene.player.getDistance(this.pos.x, this.pos.y) <= this.detectionRange ? this.speed : 0;
	}

	calculateAngle(engine) {
		return engine.currentScene.player.getAngle(this.pos.x, this.pos.y);
	}
}

class NormalZombie extends Zombie {}

class FatZombie extends Zombie {}

class FastZombie extends Zombie {}

export {Zombie};
