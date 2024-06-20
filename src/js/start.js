import {Color, Font, Label, Scene, Vector} from 'excalibur';
import {StartButton} from './startButton';
import {ZombieImage} from './zombieImage';

export class Start extends Scene {
	constructor() {
		super();
		this.startBut = new StartButton();
		this.add(this.startBut);
		this.zombieImage = new ZombieImage(215);
		this.zombieImage2 = new ZombieImage(620);
		this.add(this.zombieImage);
		this.add(this.zombieImage2);
	}
	onActivate() {
		console.log('start123');
		this.title = new Label({
			text: 'Zombies Groene Hilledijk',
			font: new Font({
				family: 'impact',
				size: 48,
				color: Color.Red
			}),
			pos: new Vector(165, 100)
		});
		this.add(this.title);
		console.log('aaa');
	}
}
