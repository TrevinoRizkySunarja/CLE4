import { Actor, Keys, Vector } from 'excalibur';
import { Resources } from './resources';
import { Zombie } from './zombie';

export class Bullet extends Actor {
	constructor(x, y, bulletSpeedX, bulletSpeedY) {
		super({ width: 5, height: 3 });
		this.pos = new Vector(x, y);
		this.vel = new Vector(bulletSpeedX, bulletSpeedY);
	}

	onInitialize() {
		this.graphics.use(Resources.Bullet.toSprite());	//De bullet image gebruiken (kan veranderd worden)
		this.scale = new Vector(1, 1);
		this.on('collisionstart', (event) => this.hitEnemy(event));
	}

	//Stuurt door naar de getHit function dat de zombie en bullet elkaar hebben gehit
	hitEnemy(event) {
		if (event.other instanceof Zombie) {
			this.kill();
			event.other.getHit();
		}
	}
}
