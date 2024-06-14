import {Scene, Vector} from 'excalibur';
import {Player} from './player';
import {Map} from './map';
import {rounds} from './rounds';

class Apocalypse extends Scene {
	map = new Map();
	player = new Player({pos: new Vector(0, 0)});
	rounds = rounds;
	currentRound = 0;

	constructor() {
		super();
	}

	onInitialize() {
		this.camera.strategy.lockToActor(this.player);
	}

	onActivate() {
		this.add(this.map);
		this.add(this.player);
	}

	onDeactivate() {
		this.clear();
	}

	playRound() {}
}

export {Apocalypse};
