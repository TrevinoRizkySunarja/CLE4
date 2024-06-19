import {ImageSource, Sound, Resource, Loader} from 'excalibur';

// voeg hier jouw eigen resources toe
const Resources = {
	Background1: new ImageSource('images/background-2.png'),
	PlayerFullHealthRight: new ImageSource('images/players/playerRight.png'),
	PlayerFullHealthLeft: new ImageSource('images/players/playerLeft.png'),
	PlayerFullHealthUp: new ImageSource('images/players/playerUp.png'),
	PlayerFullHealthDown: new ImageSource('images/players/playerDown.png'),
	PistolRight: new ImageSource('images/pistolRight.png'),
	PistolLeft: new ImageSource('images/pistolLeft.png'),
	PistolUp: new ImageSource('images/pistolUp.png'),
	Bullet: new ImageSource('images/bullet.png'),
	ZombieNormal: new ImageSource('images/zombie.png'),
	ZombieFat: new ImageSource('images/fatZombie.png'),
	ZombieFast: new ImageSource('images/fastZombie.png'),
	PlayerHurt: new Sound('sounds/player_hurt.mp3'),
	ZombieHurt: new Sound('sounds/zombie_hurt.mp3'),
	ZombieDies: new Sound('sounds/zombie-dying.mp3'),
	ZombieAttacks: new Sound('sounds/zombie-attacks.mp3'),
	ZombieGetsHit: new Sound('sounds/zombie-hit.mp3'),
	GunshotPistol: new Sound('sounds/gunshot-pistol.mp3'),
	Reloading: new Sound('sounds/reloading.mp3'),
	GunshotEmpty: new Sound('sounds/gunshot-empty.mp3'),
	TramBackground: new ImageSource('images/background-2.png')
};

const ResourceLoader = new Loader();
for (let res of Object.values(Resources)) {
	ResourceLoader.addResource(res);
}

export {Resources, ResourceLoader};
