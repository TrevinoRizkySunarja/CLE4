const rounds = [
	{
		title: 'Round 1',
		durationMilliseconds: 40,
		zombies: [
			{
				type: 'normal',
				amount: 25
			}
		]
	},
	{
		title: 'Round 2',
		durationMilliseconds: 50,
		zombies: [
			{
				type: 'normal',
				amount: 20
			},
			{
				type: 'fat',
				amount: 2
			}
		]
	},
	{
		title: 'Round 3',
		durationMilliseconds: 60,
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
		]
	}
];

export {rounds};
