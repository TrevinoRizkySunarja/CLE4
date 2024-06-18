import {Actor, Vector} from 'excalibur';
import {Resources} from './resources';

class Zombie extends Actor {
	detectionRange = 380;
	image;
	speed;
	totalDelta = 0;
	maxHealth;
	currentHealth;

	constructor(pos, image, speed, maxHealth) {
		super({
			pos,
			width: 10,
			height: 30
		});
		this.image = image;
		this.maxHealth = maxHealth;
		this.currentHealth = maxHealth;
		this.speed = speed;
		this.scale = new Vector(1.5, 1.5);
	}

	onInitialize(engine, delta) {
		this.graphics.use(this.image.toSprite());
	}

	onPreUpdate(engine, delta) {
		this.totalDelta += delta;
		const velocity = this.calculateVelocity(engine) - Math.sin(this.totalDelta / 250) * 4;
		const angleInRadians = this.calculateAngle(engine) - Math.sin(this.totalDelta / 1000) / 3;
		this.vel = Vector.fromAngle(angleInRadians).scale(velocity);
	}

	onPostUpdate() {
		if (this.currentHealth <= 0) this.kill();
	}

	calculateVelocity(engine) {
		return engine.currentScene.player.getDistance(this.pos.x, this.pos.y) <= this.detectionRange ? this.speed : 0;
	}

	calculateAngle(engine) {
		return engine.currentScene.player.getAngle(this.pos.x, this.pos.y);
	}

	getHit() {
		this.currentHealth--;
		Resources.ZombieHurt.play();
	}
}

class NormalZombie extends Zombie {
	constructor(pos) {
		super(pos, Resources.ZombieNormal, 25, 2);
	}
}

class FatZombie extends Zombie {
	constructor(pos) {
		super(pos, Resources.ZombieFat, 12, 6);
	}
}

class FastZombie extends Zombie {
	constructor(pos) {
		super(pos, Resources.ZombieFast, 60, 1);
	}
}

export {Zombie, NormalZombie, FatZombie, FastZombie};
