import {Actor, Keys, Vector} from 'excalibur';
import {Resources} from './resources';
import {Pistol} from './pistol';
import {Bullet} from './bullet';

class Player extends Actor {
	constructor({pos}) {
		super();
		this.pos = pos;
		this.scale = new Vector(1.5, 1.5);
	}

	onInitialize() {
		this.graphics.use(Resources.PlayerFullHealthRight.toSprite());
		const pistol = new Pistol();
		this.addChild(pistol);
	}

	onPreUpdate(engine) {
		this.vel.x = 0;
		this.vel.y = 0;
		this.bulletSpeed = 500;
		if (engine.input.keyboard.isHeld(Keys.S)) {
			this.vel.y += 80;
			this.graphics.use(Resources.PlayerFullHealthDown.toSprite());
			this.bulletSpeedX = 0;
			this.bulletSpeedY = this.bulletSpeed;
		}
		if (engine.input.keyboard.isHeld(Keys.W)) {
			this.vel.y -= 80;
			this.graphics.use(Resources.PlayerFullHealthUp.toSprite());
			this.bulletSpeedX = 0;
			this.bulletSpeedY = -this.bulletSpeed;
		}
		if (engine.input.keyboard.isHeld(Keys.D)) {
			this.vel.x += 80;
			this.graphics.use(Resources.PlayerFullHealthRight.toSprite());
			this.bulletSpeedX = this.bulletSpeed;
			this.bulletSpeedY = 0;
		}
		if (engine.input.keyboard.isHeld(Keys.A)) {
			this.vel.x -= 80;
			this.graphics.use(Resources.PlayerFullHealthLeft.toSprite());
			this.bulletSpeedX = -this.bulletSpeed;
			this.bulletSpeedY = 0;
		}
		const spacePressed = engine.input.keyboard.isHeld(Keys.Space);

		if (spacePressed && !this.prevSpacePressed) {
			console.log('space');
			const bullet = new Bullet(this.pos.x, this.pos.y, this.bulletSpeedX, this.bulletSpeedY);
			engine.add(bullet);
		}
		this.prevSpacePressed = spacePressed;
	}

	getDistance(x, y) {
		// console.log('other.x: ' + x);
		const deltaX = x - this.pos.x;
		const deltaY = y - this.pos.y;

		console.log('deltaX: ', deltaX, 'deltaY', deltaY);

		return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
	}

	getAngle(x, y) {
		const deltaX = this.pos.x - x;
		const deltaY = this.pos.y - y;

		return Math.atan2(deltaY, deltaX);
	}
}

export {Player};
