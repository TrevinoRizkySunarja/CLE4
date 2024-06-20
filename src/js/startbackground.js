import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";

export class StartBackground extends Actor {
    constructor() {
        super();
        this.pos = new Vector(400, 300); // Adjust as needed
        this.scale = new Vector(1, 1); // Adjust as needed
    }

    onInitialize(engine) {
        this.graphics.use(Resources.StartBackground.toSprite());
    }
}
