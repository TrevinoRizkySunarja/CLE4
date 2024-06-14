const waves = [
	{
		title: 'Wave 1',
		preparationMilliseconds: 20 * 1000,
		durationMilliseconds: 40 * 1000,
		zombies: [
			{
				type: 'normal',
				amount: 25
			}
		],
		final: null
	},
	{
		title: 'Wave 2',
		preparationMilliseconds: 20 * 1000,
		durationMilliseconds: 50 * 1000,
		zombies: [
			{
				type: 'normal',
				amount: 20
			},
			{
				type: 'fat',
				amount: 2
			}
		],
		final: null
	},
	{
		title: 'Final wave (3)',
		preparationMilliseconds: 20 * 1000,
		durationMilliseconds: 60 * 1000,
		zombies: [
			{
				type: 'normal',
				amount: 18
			},
			{
				type: 'fat',
				amount: 4
			},
			{
				type: 'fast',
				amount: 4
			}
		],
		final: null
	}
];

const getWaveData = (index) => {
	const wave = waves[index];
	index === waves.length - 1 ? (wave['final'] = true) : (wave['final'] = false);
	return wave;
};

export {getWaveData};
