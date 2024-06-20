import {ImageSource, Sound, Resource, Loader} from 'excalibur';

// voeg hier jouw eigen resources toe
const Resources = {
	// maps
	ZuiderZiekenhuis: new ImageSource('images/zuiderziekenhuis.png'),
	GroeneHilledijk: new ImageSource('images/groenehilledijk.png'),

	Background1: new ImageSource('images/background-2.png'),
	PlayerFullHealthRight: new ImageSource('images/players/playerRight.png'),
	PlayerFullHealthLeft: new ImageSource('images/players/playerLeft.png'),
	PlayerFullHealthUp: new ImageSource('images/players/playerUp.png'),
	PlayerFullHealthDown: new ImageSource('images/players/playerDown.png'),
	//De pistol
	PistolRight: new ImageSource('images/pistolRight.png'),
	PistolLeft: new ImageSource('images/pistolLeft.png'),
	PistolUp: new ImageSource('images/pistolUp.png'),
	//De shotgun
	ShotungRight: new ImageSource('images/shotungRight.png'),
	ShotungLeft: new ImageSource('images/shotungLeft.png'),
	ShotungUp: new ImageSource('images/shotungUp.png'),
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

	StartButton: new ImageSource('images/start.png'),
	StartBackground: new ImageSource('images/startbackground.png'),
	Tutorial: new ImageSource('images/tutorial.png'),
	TramBackground: new ImageSource('images/background-2.png'),

	PlayerHurt: new Sound('sounds/player_hurt.mp3'),
	ZombieHurt: new Sound('sounds/zombie_hurt.mp3'),
	ZombieDies: new Sound('sounds/zombie-dying.mp3'),
	ZombieAttacks: new Sound('sounds/zombie-attacks.mp3'),
	ZombieGetsHit: new Sound('sounds/zombie-hit.mp3'),
	GunshotPistol: new Sound('sounds/gunshot-pistol.mp3'),
	Reloading: new Sound('sounds/reloading.mp3'),
	GunshotEmpty: new Sound('sounds/gunshot-empty.mp3'),
	GunshotShotgun: new Sound('sounds/gunshot-shotgun'),
	ShotgunReloading: new Sound('sounds/shotgun_reloading')
};

const ResourceLoader = new Loader();
for (let res of Object.values(Resources)) {
	ResourceLoader.addResource(res);
}

export {Resources, ResourceLoader};
