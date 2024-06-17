import {Scene, Vector} from 'excalibur';
import {Player} from './player';
import {Map} from './map';
import {getWaveData} from './waves';
import {Zombie} from './zombie';
import {Resources} from './resources';

class Apocalypse extends Scene {
	map = new Map();
	player;
	zombies = [];

	// wave properties
	currentWaveIndex = 0;
	wave = getWaveData(this.currentWaveIndex);

	constructor() {
		super();
		this.player = new Player({pos: new Vector(0, 0)});
	}

	onInitialize() {
		this.camera.strategy.lockToActor(this.player);
	}

	onActivate() {
		this.add(this.map);
		this.add(this.player);
		const newZombie = new Zombie(100, 100, Resources.ZombieNormal);
		this.add(newZombie);
	}

	onDeactivate() {
		this.clear();
		this.zombies.forEach((zombie) => zombie.kill());
		this.zombies = [];
	}

	goToNextWave() {
		this.currentWaveIndex++;
		this.wave = getWaveData(this.currentWaveIndex);
	}

	onPreUpdate(engine, delta) {
		if (!this.wave) return;

		// Preparation countdown
		if (this.wave.preparationMilliseconds > 0) {
			this.wave.preparationMilliseconds = Math.max(this.wave.preparationMilliseconds - delta, 0);
			// console.log(`${this.wave.title} in ${(this.wave.preparationMilliseconds / 1000).toFixed(1)}s`);
			if (this.wave.preparationMilliseconds === 0) console.log(`${this.wave.title} incoming!`);
			return;
		}

		// Wave countdown
		this.wave.durationMilliseconds = Math.max(this.wave.durationMilliseconds - delta, 0);
		console.log((this.wave.durationMilliseconds / 1000).toFixed(1));

		if (this.wave.durationMilliseconds === 0) {
			console.log(`${this.wave.title} survived!`);
			if (!this.wave.final) {
				this.goToNextWave();
				return;
			}

			// if is final wave:
			this.wave = null;
		}
	}
}

export {Apocalypse};
