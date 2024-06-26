import {Actor, Axes, Buttons, Keys, Vector} from 'excalibur';
import {Resources} from './resources';
import {Pistol} from './pistol';
import {UI} from './ui';
import {Zombie} from './zombie';
import {Game} from './game';

class Player extends Actor {
	ui;
	bulletDirection = new Vector(1, 0);
	speed = 70;
	hp = 3;
	pistol;

	constructor(pos, engine) {
		super({width: 14, height: 30, pos});
		this.scale = new Vector(1.5, 1.5);
	}

	onInitialize(engine) {
		this.engine = engine;
		this.graphics.use(Resources.PlayerFullHealthRight.toSprite());
		this.ui = new UI();
		this.addChild(this.ui);
		this.pistol = new Pistol();
		this.addChild(this.pistol);
		this.on('collisionstart', (event) => this.hitEnemy(event));
	}

	onPreUpdate(engine, delta) {
		// this.xValue =
		// this.yValue =
		// console.log(this.xValue * 80)
		// console.log(this.yValue * 80)
		console.log(engine.mygamepad);
		let vX = engine.mygamepad !== undefined ? engine.mygamepad.getAxes(Axes.LeftStickX) : 0;
		let vY = engine.mygamepad !== undefined ? engine.mygamepad.getAxes(Axes.LeftStickY) : 0;
		console.log(vX, vY);
		if (engine.input.keyboard.isHeld(Keys.S) || vY == 1) {
			vY += this.speed;
			this.graphics.use(Resources.PlayerFullHealthDown.toSprite());
			this.bulletDirection.setTo(0, 1);
		}
		// Naar boven
		if (engine.input.keyboard.isHeld(Keys.W) || vY == -1) {
			vY -= this.speed;
			this.graphics.use(Resources.PlayerFullHealthUp.toSprite());
			this.bulletDirection.setTo(0, -1);
		}
		// Naar rechts
		if (engine.input.keyboard.isHeld(Keys.D) || vX == 1) {
			vX += this.speed;
			this.graphics.use(Resources.PlayerFullHealthRight.toSprite());
			this.bulletDirection.setTo(1, 0);
		}
		// Naar links
		if (engine.input.keyboard.isHeld(Keys.A) || vX == -1) {
			vX -= this.speed;
			this.graphics.use(Resources.PlayerFullHealthLeft.toSprite());
			this.bulletDirection.setTo(-1, 0);
		}

		if (vX === 0 && vY === 0) this.vel = new Vector(0, 0);
		else this.vel = Vector.fromAngle(Math.atan2(vY, vX)).scale(80);

		const spacePressed =
			engine.mygamepad !== undefined ? engine.mygamepad.isButtonPressed(Buttons.Face1) : engine.input.keyboard.isHeld(Keys.Space);
		if (engine.mygamepad !== undefined ? engine.mygamepad.isButtonPressed(Buttons.Face2) : engine.input.keyboard.isHeld(Keys.R)) {
			this.pistol.reload(engine.currentScene);
		}

		if (spacePressed && !this.prevSpacePressed) {
			this.pistol.shoot(engine.currentScene, this.bulletDirection);
		}
		this.prevSpacePressed = spacePressed;

		console.log(engine.currentScene);
		if (engine.currentScene.waves[0]) {
			this.pos.x = Math.max(this.pos.x, engine.currentScene.waves[0].bounds.xMin);
			this.pos.x = Math.min(this.pos.x, engine.currentScene.waves[0].bounds.xMax);
			this.pos.y = Math.max(this.pos.y, engine.currentScene.waves[0].bounds.xMin);
			this.pos.y = Math.min(this.pos.y, engine.currentScene.waves[0].bounds.xMax);
		}
	}

	// functie dat detecteert dat de player en zombie elkaar hebben gehit
	hitEnemy(event) {
		if (event.other instanceof Zombie) {
			this.hp--;
			console.log(this.hp);
			if (this.hp === 0) {
				this.engine.goToScene('end');
				this.kill();
			}
			this.ui.updateHp(this.hp);
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

export {Player};
