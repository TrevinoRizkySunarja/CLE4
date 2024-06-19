import {Actor, Keys, Vector} from 'excalibur';
import {Resources} from './resources';
import {Zombie} from './zombie';

export class Bullet extends Actor {
	constructor(pos, vel) {
		super({width: 5, height: 3, pos, vel});
	}

	onInitialize() {
		this.graphics.use(Resources.Bullet.toSprite());
		this.scale = new Vector(1, 1);
		this.on('collisionstart', (event) => this.hitEnemy(event));
		Resources.GunshotPistol.play();
	}
	hitEnemy(event) {
		if (event.other instanceof Zombie) {
			this.kill();
			event.other.getHit();
		}
	}
}
