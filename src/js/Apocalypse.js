import {Scene, Vector} from 'excalibur';
import {Player} from './player';
import {Map} from './map';
import {getWaveData} from './waves';
import {UI} from './ui';

class Apocalypse extends Scene {
	map = new Map();
	player;
	zombies = [];
	previousDelta = 0;

	// wave properties
	currentWaveIndex = 0;
	wave = {};

	constructor() {
		super();

		this.ui = new UI();
	}

	onInitialize() {
		this.wave = getWaveData(this.currentWaveIndex);
		console.log(this.wave);
		this.player = new Player({pos: new Vector(0, 0)});
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

		this.wave.zombies.forEach((zombie) => {
			if (zombie.spawnTime > this.wave.durationMilliseconds && zombie.spawnTime < this.wave.durationMilliseconds + this.previousDelta)
				this.add(zombie.actor);
		});

		if (this.wave.durationMilliseconds === 0) {
			console.log(`${this.wave.title} survived!`);
			if (!this.wave.final) {
				this.goToNextWave();
				return;
			}

			// if is final wave:
			this.wave = null;
		}
		this.previousDelta = delta;
	}
}

export {Apocalypse};
