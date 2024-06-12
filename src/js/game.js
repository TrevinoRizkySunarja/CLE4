import '../css/style.css';
import {Actor, Engine, Vector, DisplayMode} from 'excalibur';
import {Resources, ResourceLoader} from './resources.js';
import {Lvl1} from './scenes/lvl1.js';

export class Game extends Engine {
	constructor() {
		super({
			width: 800,
			height: 500,
			maxFps: 60,
			displayMode: DisplayMode.FitScreen
		});
		this.start(ResourceLoader).then(() => this.startGame());
	}

	startGame() {
		console.log('start de game!');
		this.addScene('lvl1', new Lvl1());
		this.goToScene('lvl1');
		setInterval(() => {
			this.goToScene('lvl1');
		}, 2000);
	}
}

new Game();
