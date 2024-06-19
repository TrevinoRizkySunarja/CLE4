import { ImageSource, Sound, Resource, Loader } from 'excalibur';

// voeg hier jouw eigen resources toe
const Resources = {
	Background1: new ImageSource('images/background.png'),
	//De player
	PlayerFullHealthRight: new ImageSource('images/players/playerRight.png'),
	PlayerFullHealthLeft: new ImageSource('images/players/playerLeft.png'),
	PlayerFullHealthUp: new ImageSource('images/players/playerUp.png'),
	PlayerFullHealthDown: new ImageSource('images/players/playerDown.png'),
	//De pistol
	PistolRight: new ImageSource('images/pistolRight.png'),
	PistolLeft: new ImageSource('images/pistolLeft.png'),
	PistolUp: new ImageSource('images/pistolUp.png'),
	//De kogel
	Bullet: new ImageSource('images/bullet.png'),

	//De normale zombie
	ZombieNormal: new ImageSource('images/zombies/zombieRight.png'),
	ZombieNormalLeft: new ImageSource('images/zombies/zombieLeft.png'),
	ZombieNormalUp: new ImageSource('images/zombies/zombieUp.png'),
	ZombieNormalDown: new ImageSource('images/zombies/zombieDown.png'),
	//De dikke zombie
	ZombieFat: new ImageSource('images/zombies/fatZombieRight.png'),
	ZombieFatLeft: new ImageSource('images/zombies/fatZombieLeft.png'),
	ZombieFatUp: new ImageSource('images/zombies/fatZombieUp.png'),
	ZombieFatDown: new ImageSource('images/zombies/fatZombieDown.png'),
	//De snelle zombie
	ZombieFast: new ImageSource('images/zombies/fastZombieRight.png'),
	ZombieFastLeft: new ImageSource('images/zombies/fastZombieLeft.png'),
	ZombieFastUp: new ImageSource('images/zombies/fastZombieUp.png'),
	ZombieFastDown: new ImageSource('images/zombies/fastZombieDown.png'),

	PlayerHurt: new Sound('sounds/player_hurt.mp3'),
	ZombieHurt: new Sound('sounds/zombie_hurt.mp3')
};





const ResourceLoader = new Loader();
for (let res of Object.values(Resources)) {
	ResourceLoader.addResource(res);
}

export { Resources, ResourceLoader };
