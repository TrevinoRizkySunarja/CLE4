import {Actor, Vector} from 'excalibur';
import {Resources} from './resources';

export class StartButton extends Actor {
	constructor() {
		super();
		this.pos = new Vector(415, 315);
		this.scale = new Vector(0.5, 0.5);
		this.graphics.use(Resources.PistolRight.toSprite());
	}
	onInitialize(engine) {
		this.graphics.use(Resources.StartButton.toSprite());
		this.enableCapturePointer = true;
		this.pointer.useGraphicsBounds = true;
		this.on('pointerup', () => engine.startTutorial());
	}
}
