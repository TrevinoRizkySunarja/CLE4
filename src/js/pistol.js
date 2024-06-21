import { Actor, Axes, Engine, Keys, Vector } from 'excalibur';
import { Resources } from './resources';
import { Bullet } from './bullet';

export class Pistol extends Actor {
	isReloading = false;
	ammunition = 10;
	bulletSpeed = 400;

	constructor() {
		super({
			pos: new Vector(15, -3)
		});
		this.scale = new Vector(0.8, 0.8);
		this.graphics.use(Resources.PistolRight.toSprite());
	}
	onPreUpdate(engine) {
		let vX = engine.mygamepad.getAxes(Axes.LeftStickX)
		let vY = engine.mygamepad.getAxes(Axes.LeftStickY)
		//De richting veranderen van pistol met de ingedrukte knop
		if (engine.input.keyboard.isHeld(Keys.S) || vY == 1) {
			this.graphics.use(Resources.PistolUp.toSprite());
			this.pos = new Vector(5.5, -3);
		}
		if (engine.input.keyboard.isHeld(Keys.W) || vY == -1) {
			this.graphics.use(Resources.PistolUp.toSprite());
			this.pos = new Vector(6.5, -5);
		}
		if (engine.input.keyboard.isHeld(Keys.D) || vX == 1) {
			this.graphics.use(Resources.PistolRight.toSprite());
			this.pos = new Vector(15, -3);
		}
		if (engine.input.keyboard.isHeld(Keys.A) || vX == -1) {
			this.graphics.use(Resources.PistolLeft.toSprite());
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
		}, 2000);
	}
	shoot(scene, velocity) {
		if (this.isReloading) return;
		if (this.ammunition <= 0) {
			Resources.GunshotEmpty.play();
			return;
		}
		this.ammunition--;
		console.log(scene.player.pistol.pos);
		scene.add(new Bullet(scene.player.pos, velocity.scale(this.bulletSpeed)));
		scene.player.ui.updateAmmo(`Bullets: ${this.ammunition}`);
		Resources.GunshotPistol.play();
	}
}
