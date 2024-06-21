import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";

export class EndBackground extends Actor {
    constructor() {
        super();
        this.pos = new Vector(400, 300); // Adjust as needed
        this.scale = new Vector(0.45, 0.59); // Adjust as needed
    }

    onInitialize(engine) {
        this.graphics.use(Resources.EndBackground.toSprite());
    }
}
