import { Actor, Engine, Keys, Vector } from 'excalibur';
import { Resources } from './resources';
import { Pistol } from './pistol';
import { Bullet } from './bullet';
import { UI } from './ui';
import { Zombie } from './zombie';


class Player extends Actor {
	//Startwaardes 
	ammo = 10;
	hp = 10;

	constructor({ pos }) {
		super({ width: 20, height: 30 });
		this.pos = pos;
		this.scale = new Vector(1.5, 1.5);
	}

	onInitialize() {
		this.graphics.use(Resources.PlayerFullHealthRight.toSprite());
		this.ui = new UI()
		this.addChild(this.ui)
		const pistol = new Pistol();
		this.addChild(pistol);
		this.on('collisionstart', (event) => this.hitEnemy(event))
	}

	onPreUpdate(engine) {
		this.bulletSpeed = 500;	//Snelheid van de kogel
		let vX = 0;	//Snelheid X-waarde
		let vY = 0;	//Snelheid Y-waarde
		//Naar beneden
		if (engine.input.keyboard.isHeld(Keys.S)) {
			vY += 80;
			this.graphics.use(Resources.PlayerFullHealthDown.toSprite());
			this.bulletSpeedX = 0;
			this.bulletSpeedY = this.bulletSpeed;
		}
		//Naar boven
		if (engine.input.keyboard.isHeld(Keys.W)) {
			vY -= 80;
			this.graphics.use(Resources.PlayerFullHealthUp.toSprite());
			this.bulletSpeedX = 0;
			this.bulletSpeedY = -this.bulletSpeed;
		}
		//Naar rechts
		if (engine.input.keyboard.isHeld(Keys.D)) {
			vX += 80;
			this.graphics.use(Resources.PlayerFullHealthRight.toSprite());
			this.bulletSpeedX = this.bulletSpeed;
			this.bulletSpeedY = 0;
		}
		//Naar links
		if (engine.input.keyboard.isHeld(Keys.A)) {
			vX -= 80;
			this.graphics.use(Resources.PlayerFullHealthLeft.toSprite());
			this.bulletSpeedX = -this.bulletSpeed;
			this.bulletSpeedY = 0;
		}

		if (vX === 0 && vY === 0) this.vel = new Vector(0, 0);
		else this.vel = Vector.fromAngle(Math.atan2(vY, vX)).scale(80);

		//De reload
		if (engine.input.keyboard.isHeld(Keys.R) && this.ammo == 0) {
			setTimeout(() => {	//Na 1 sec wordt er gereloadt en de ammoLabel wordt geupdated
				this.ammo = 10;
				this.ui.updateAmmo(`Bullets: ${this.ammo}`)
			}, 1000);
		}
		//Schieten
		const spacePressed = engine.input.keyboard.isHeld(Keys.Space);
		if (spacePressed && !this.prevSpacePressed && this.ammo > 0) {	//Alleen schieten als je kogels hebt
			this.ammo--;
			const bullet = new Bullet(this.pos.x, this.pos.y, this.bulletSpeedX, this.bulletSpeedY); //Maakt bullet aan voor de goede richting
			engine.add(bullet);
			this.ui.updateAmmo(`Bullets: ${this.ammo}`)
		}
		if (spacePressed && !this.prevSpacePressed && this.ammo == 0) {	//Reload tekst als ammo op is
			this.ui.updateAmmo("Reload!")
		}
		this.prevSpacePressed = spacePressed;
	}

	//functie dat detecteert dat de player en zombie elkaar hebben gehit
	hitEnemy(event) {
		if (event.other instanceof Zombie) {
			this.hp--
			console.log(this.hp)
			this.ui.updateHp(this.hp)
		}
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
