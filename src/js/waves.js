import {Vector} from 'excalibur';
import {NormalZombie, FatZombie, FastZombie} from './zombie';

const waves = [];

const spawnPoints = {
	zuiderziekenhuis: [
		{x: -380, y: 380},
		{x: 380, y: -380},
		{x: 380, y: 380},
		{x: -380, y: -380}
	],
	tramhalte: [
		{x: -380, y: 380},
		{x: 380, y: -380},
		{x: 380, y: 380},
		{x: -380, y: -380}
	],
	groenehilledijk: [
		{x: -380, y: 380},
		{x: 380, y: -380},
		{x: 380, y: 380},
		{x: -380, y: -380}
	]
};

class Wave {
	constructor(title, preparationMilliseconds, durationMilliseconds, zombieTypes, scene) {
		this.title = title;
		this.preparationMilliseconds = preparationMilliseconds;
		this.durationMilliseconds = durationMilliseconds;
		this.zombies = [];
		this.scene = scene;
		zombieTypes.forEach((zombieType) => {
			for (let i = 0; i < zombieType.amount; i++) {
				const spawnPoint = spawnPoints[scene][Math.floor(Math.random() * spawnPoints[scene].length)];
				this.zombies.push({
					type: zombieType.type,
					spawnTime: durationMilliseconds * Math.random(),
					actor: new zombieType.Actor(new Vector(spawnPoint.x, spawnPoint.y))
				});
			}
		});
		this.zombies.sort((a, b) => a.spawnTime - b.spawnTime);
	}
}

waves.push(
	new Wave(
		'Wave 1',
		3 * 1000,
		30 * 1000,
		[
			{
				type: 'normal',
				amount: 40,
				Actor: NormalZombie
			}
		],
		'zuiderziekenhuis'
	)
);

waves.push(
	new Wave(
		'Wave 2',
		40 * 1000,
		40 * 1000,
		[
			{
				type: 'normal',
				amount: 50,
				Actor: NormalZombie
			},
			{
				type: 'fat',
				amount: 8,
				Actor: FatZombie
			}
		],
		'groenehilledijk'
	)
);

waves.push(
	new Wave(
		'Wave 3',
		60 * 1000,
		60 * 1000,
		[
			{
				type: 'normal',
				amount: 50,
				Actor: NormalZombie
			},
			{
				type: 'fat',
				amount: 6,
				Actor: FatZombie
			},
			{
				type: 'fast',
				amount: 12,
				Actor: FastZombie
			}
		],
		'groenehilledijk'
	)
);

const getWaveData = (scene) => {
	const results = [];
	waves.forEach((wave) => {
		if (wave.scene === scene) results.push(wave);
	});
	return results;
};

export {getWaveData};
