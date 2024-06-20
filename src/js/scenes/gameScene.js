import {Scene, Actor} from 'excalibur';
import {UI} from '../ui';

class GameScene extends Scene {
	player;
	map;
	currentWaveIndex = 0;
	waves = [];
	ui;
	zombies = 0;

	constructor(map, waves, player) {
		super();
		this.map = new Actor();
		this.map.graphics.use(map.toSprite());
		this.waves = waves;
		this.player = player;
	}

	onActivate(engine) {
		console.log(this.player);
		this.camera.strategy.lockToActor(this.player);
		this.add(this.map);
		this.add(this.player);
		this.ui = new UI();
		console.log(this.waves[this.currentWaveIndex]);
	}

	goToNextWave(engine) {
		this.currentWaveIndex++;
		if (this.waves.length <= this.currentWaveIndex && this.zombies === 0) {
			// timer
			console.log(engine);
			engine.goToNextScene();
		}
	}

	onPreUpdate(engine, delta) {
		console.log('zombies: ', this.zombies);
		if (!this.waves[this.currentWaveIndex]) {
			this.goToNextWave(engine);
			return;
		}
		if (this.waves[this.currentWaveIndex].preparationMilliseconds > 0) {
			// preparation countdown
			this.preparationCountdown(delta);
			return;
		}

		// wave countdown
		this.waveCountdown(delta);
		this.spawnZombies(delta);
		if (this.waves[this.currentWaveIndex].durationMilliseconds === 0) this.completeWave(engine);
	}

	preparationCountdown(delta) {
		this.waves[this.currentWaveIndex].preparationMilliseconds = Math.max(this.waves[this.currentWaveIndex].preparationMilliseconds - delta, 0);
		console.log(`${this.waves[this.currentWaveIndex].title} in ${(this.waves[this.currentWaveIndex].preparationMilliseconds / 1000).toFixed(1)}s`);
		if (this.waves[this.currentWaveIndex].preparationMilliseconds === 0) console.log(`${this.waves[this.currentWaveIndex].title} incoming!`);
	}

	waveCountdown(delta) {
		this.waves[this.currentWaveIndex].durationMilliseconds = Math.max(this.waves[this.currentWaveIndex].durationMilliseconds - delta, 0);
		// console.log((this.waves[this.currentWaveIndex].durationMilliseconds / 1000).toFixed(1));
	}

	spawnZombies(delta) {
		this.waves[this.currentWaveIndex].zombies.forEach((zombie) => {
			if (zombie.spawnTime < this.waves[this.currentWaveIndex].durationMilliseconds && zombie.spawnTime > this.waves[this.currentWaveIndex].durationMilliseconds - delta) {
				this.zombies++;
				this.add(zombie.actor);
				zombie.actor.on('kill', (event) => {
					if (zombie.killed) return;
					zombie.killed = true;
					this.zombies--;
				});
			}
		});
	}

	completeWave(engine) {
		console.log(`${this.waves[this.currentWaveIndex].title} survived!`);
		this.goToNextWave(engine);
	}
}

export {GameScene};
