import {Zombie} from './zombie';
import {Resources} from './resources';

const waves = [];

const spawnPoints = [
	{x: -320, y: 0},
	{x: 320, y: 0},
	{x: 0, y: 320},
	{x: 0, y: -320}
];

class Wave {
	constructor(title, preparationMilliseconds, durationMilliseconds, zombieTypes) {
		this.title = title;
		this.preparationMilliseconds = preparationMilliseconds;
		this.durationMilliseconds = durationMilliseconds;
		this.zombies = [];
		this.final = null;
		zombieTypes.forEach((zombieType) => {
			for (let i = 0; i < zombieType.amount; i++) {
				const spawnPoint = spawnPoints[Math.floor(Math.random() * spawnPoints.length)];
				this.zombies.push({
					type: zombieType.type,
					spawnTime: durationMilliseconds * Math.random(),
					actor: new zombieType.Actor(spawnPoint.x, spawnPoint.y, Resources.ZombieNormal)
				});
			}
		});
		this.zombies.sort((a, b) => a.spawnTime - b.spawnTime);
	}
}

waves.push(
	new Wave('Wave 1', 5 * 1000, 20 * 1000, [
		{
			type: 'normal',
			amount: 22,
			Actor: Zombie
		}
	])
);

waves.push(
	new Wave('Wave 2', 20 * 1000, 30 * 1000, [
		{
			type: 'normal',
			amount: 24,
			Actor: Zombie
		},
		{
			type: 'fat',
			amount: 2,
			Actor: Zombie
		}
	])
);

waves.push(
	new Wave('Wave 3', 20 * 1000, 40 * 1000, [
		{
			type: 'normal',
			amount: 22,
			Actor: Zombie
		},
		{
			type: 'fat',
			amount: 4,
			Actor: Zombie
		},
		{
			type: 'fast',
			amount: 4,
			Actor: Zombie
		}
	])
);

const getWaveData = (index) => {
	const wave = waves[index];
	index === waves.length - 1 ? (wave['final'] = true) : (wave['final'] = false);
	return wave;
};

export {getWaveData};
