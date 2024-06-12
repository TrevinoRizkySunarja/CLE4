import '../css/style.css';
import {Engine, DisplayMode} from 'excalibur';
import {ResourceLoader} from './resources.js';
import {Lvl1} from './scenes/lvl1.js';

export class Game extends Engine {
	constructor() {
		super({
			// 1440x900 of 1280x800 of 800x500
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
	}
}

new Game();
