import { Actor, Keys, Vector } from 'excalibur';
import { Resources } from './resources';
import { Pistol } from './pistol';
import { Bullet } from './bullet';

class Player extends Actor {
	ammo = 6;
	constructor({ pos }) {
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
		this.vel.x = -100;
		this.vel.x = 0;
		this.vel.y = 0;
		this.posMinX = 0;
		this.posMinY = 0;
		if (engine.input.keyboard.isHeld(Keys.S)) {
			this.vel.y += 80;
			this.graphics.use(Resources.PlayerFullHealthDown.toSprite());
			this.bulletSpeedX = 0;
			this.bulletSpeedY = 300;
		}
		if (engine.input.keyboard.isHeld(Keys.W)) {
			this.vel.y -= 80;
			this.graphics.use(Resources.PlayerFullHealthUp.toSprite());
			this.bulletSpeedX = 0;
			this.bulletSpeedY = -300;
		}
		if (engine.input.keyboard.isHeld(Keys.D)) {
			this.vel.x += 80;
			this.graphics.use(Resources.PlayerFullHealthRight.toSprite());
			this.bulletSpeedX = 300;
			this.bulletSpeedY = 0;
		}
		if (engine.input.keyboard.isHeld(Keys.A)) {
			this.vel.x -= 80;
			this.graphics.use(Resources.PlayerFullHealthLeft.toSprite());
			this.bulletSpeedX = -300;
			this.bulletSpeedY = 0;
		}
		const spacePressed = engine.input.keyboard.isHeld(Keys.Space);
		if (engine.input.keyboard.isHeld(Keys.R)) {
			setTimeout(() => {
				console.log("reload")
				this.ammo = 6;
			}, 1000);
		}

		if (spacePressed && !this.prevSpacePressed && this.ammo > 0) {
			console.log('space');
			this.ammo--;
			const bullet = new Bullet(this.pos.x, this.pos.y, this.bulletSpeedX, this.bulletSpeedY);
			engine.add(bullet);
			this.canShoot = false;

		}
		this.prevSpacePressed = spacePressed;
	}
}


export { Player };
