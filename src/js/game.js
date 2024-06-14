import '../css/style.css';
import {Engine, DisplayMode} from 'excalibur';
import {ResourceLoader} from './resources.js';
import {Apocalypse} from './Apocalypse.js';

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
		this.addScene('apocalypse', new Apocalypse());
		this.goToScene('apocalypse');
	}
}

new Game();
