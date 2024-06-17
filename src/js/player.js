import { Actor, Engine, Keys, Vector } from 'excalibur';
import { Resources } from './resources';
import { Pistol } from './pistol';
import { Bullet } from './bullet';
import { UI } from './ui';


class Player extends Actor {
	ammo = 6;
	ui;

	constructor({ pos }) {
		super();
		this.pos = pos;
		this.scale = new Vector(1.5, 1.5);
	}

	onInitialize() {
		this.graphics.use(Resources.PlayerFullHealthRight.toSprite());
		this.ui = new UI()
		this.addChild(this.ui)
		const pistol = new Pistol();
		this.addChild(pistol);

	}

	onPreUpdate(engine) {
		this.bulletSpeed = 500;
		let vX = 0;
		let vY = 0;

		if (engine.input.keyboard.isHeld(Keys.S)) {
			vY += 80;
			this.graphics.use(Resources.PlayerFullHealthDown.toSprite());
			this.bulletSpeedX = 0;
			this.bulletSpeedY = this.bulletSpeed;
		}
		if (engine.input.keyboard.isHeld(Keys.W)) {
			vY -= 80;
			this.graphics.use(Resources.PlayerFullHealthUp.toSprite());
			this.bulletSpeedX = 0;
			this.bulletSpeedY = -this.bulletSpeed;
		}
		if (engine.input.keyboard.isHeld(Keys.D)) {
			vX += 80;
			this.graphics.use(Resources.PlayerFullHealthRight.toSprite());
			this.bulletSpeedX = this.bulletSpeed;
			this.bulletSpeedY = 0;
		}
		if (engine.input.keyboard.isHeld(Keys.A)) {
			vX -= 80;
			this.graphics.use(Resources.PlayerFullHealthLeft.toSprite());
			this.bulletSpeedX = -this.bulletSpeed;
			this.bulletSpeedY = 0;
		}

		if (vX === 0 && vY === 0) this.vel = new Vector(0, 0);
		else this.vel = Vector.fromAngle(Math.atan2(vY, vX)).scale(80);

		const spacePressed = engine.input.keyboard.isHeld(Keys.Space);
		if (engine.input.keyboard.isHeld(Keys.R)) {
			setTimeout(() => {
				this.ammo = 6;
			}, 1000);
		}

		if (spacePressed && !this.prevSpacePressed && this.ammo > 0) {
			this.ammo--;
			const bullet = new Bullet(this.pos.x, this.pos.y, this.bulletSpeedX, this.bulletSpeedY);
			engine.add(bullet);
			this.canShoot = false;
		}

		this.prevSpacePressed = spacePressed;
	}

	getDistance(x, y) {
		const deltaX = x - this.pos.x;
		const deltaY = y - this.pos.y;

		return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
	}

	getAngle(x, y) {
		const deltaX = this.pos.x - x;
		const deltaY = this.pos.y - y;

		return Math.atan2(deltaY, deltaX);
	}
}

export { Player };
