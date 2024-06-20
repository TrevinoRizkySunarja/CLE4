import {Actor, Engine, Keys, Vector} from 'excalibur';
import {Resources} from './resources';
import {Bullet} from './bullet';

export class Shotgun extends Actor {
	isReloading = false;
	ammunition = 10;
	bulletSpeed = 400;

	constructor() {
		super({
			pos: new Vector(15, -3)
		});
		this.scale = new Vector(0.8, 0.8);
		this.graphics.use(Resources.ShotgunRight.toSprite());
	}
	onPreUpdate(engine) {
		//De richting veranderen van Shotgun met de ingedrukte knop
		if (engine.input.keyboard.isHeld(Keys.S)) {
			this.graphics.use(Resources.ShotgunUp.toSprite());
			this.pos = new Vector(5.5, -3);
		}
		if (engine.input.keyboard.isHeld(Keys.W)) {
			this.graphics.use(Resources.ShotgunUp.toSprite());
			this.pos = new Vector(6.5, -5);
		}
		if (engine.input.keyboard.isHeld(Keys.D)) {
			this.graphics.use(Resources.ShotgunRight.toSprite());
			this.pos = new Vector(15, -3);
		}
		if (engine.input.keyboard.isHeld(Keys.A)) {
			this.graphics.use(Resources.ShotgunLeft.toSprite());
			this.pos = new Vector(-15, -3);
		}
	}
	reload(scene) {
		if (this.isReloading) return;
		this.isReloading = true;
		scene.player.ui.updateAmmo('Bullets: reloading...');
		Resources.Reloading.play();

		setTimeout(() => {
			this.ammunition = 10;
			scene.player.ui.updateAmmo(`Bullets: ${this.ammunition}`);
			this.isReloading = false;
		}, 3000);
	}
	shoot(scene, velocity) {
		if (this.isReloading) return;
		if (this.ammunition <= 0) {
			Resources.GunshotEmpty.play();
			return;
		}
		this.ammunition--;
		console.log(scene.player.Shotgun.pos);
		scene.add(new Bullet(scene.player.pos, velocity.scale(this.bulletSpeed)));
		scene.player.ui.updateAmmo(`Bullets: ${this.ammunition}`);
		Resources.GunshotShotgun.play();
	}
}
