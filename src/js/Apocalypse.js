import {Scene, Vector} from 'excalibur';
import {Player} from './player';
import {Map} from './map';
import {getWaveData} from './waves';

class Apocalypse extends Scene {
	map = new Map();
	player = new Player({pos: new Vector(0, 0)});
	zombies = [];

	// wave properties
	currentWaveIndex = 0;
	wave = getWaveData(this.currentWaveIndex);

	constructor() {
		super();
	}

	onInitialize() {
		this.camera.strategy.lockToActor(this.player);
	}

	onActivate() {
		this.add(this.map);
		this.add(this.player);
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
			console.log(`${this.wave.title} in ${(this.wave.preparationMilliseconds / 1000).toFixed(1)}s`);
			if (this.wave.preparationMilliseconds === 0) console.log(`${this.wave.title} incoming!`);
			return;
		}

		// Wave countdown
		this.wave.durationMilliseconds = Math.max(this.wave.durationMilliseconds - delta, 0);
		console.log((this.wave.durationMilliseconds / 1000).toFixed(1));

		if (this.wave.durationMilliseconds === 0) {
			console.log(`${this.wave.title} survived!`);
			this.wave = null;
			if (!this.wave.final) {
				this.goToNextWave();
				return;
			}

			// if is final wave:
		}
	}
}

export {Apocalypse};
