import '../css/style.css';
import { Engine, DisplayMode, Keys } from 'excalibur';
import { ResourceLoader } from './resources.js';
import { Apocalypse } from './Apocalypse.js';
import { Start } from './start.js';
import { Tutorial } from './tutorial.js';

export class Game extends Engine {
	constructor() {
		super({
			// 1440x900 of 1280x800 of 800x500
			width: 800,
			height: 500,
			maxFps: 60,
			displayMode: DisplayMode.FitScreen,
			suppressPlayButton: true,
		});
		this.start(ResourceLoader).then(() => this.startIntro());
	}

	startIntro() {
		this.addScene('start', new Start())
		this.goToScene('start')
	}
	startTutorial(engine) {
		this.addScene('tutorial', new Tutorial());
		this.goToScene('tutorial');
		this.addScene('apocalypse', new Apocalypse)
		setTimeout(() => {
			this.goToScene('apocalypse')
		}, 3000);

	}
}

new Game();
