import { Actor, Vector } from 'excalibur';
import { Resources } from './resources';

export class RestartButton extends Actor {
    constructor() {
        super();
        this.pos = new Vector(415, 315);
        this.scale = new Vector(0.5, 0.5);
    }
    onInitialize(engine) {
        this.graphics.use(Resources.RestartButton.toSprite());
        this.enableCapturePointer = true;
        this.pointer.useGraphicsBounds = true;
        this.on('pointerup', () => window.location.reload());
    }
}
