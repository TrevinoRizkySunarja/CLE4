import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";

export class TutorialImage extends Actor {
    constructor() {
        super();
        this.pos = new Vector(415, 330);
        this.scale = new Vector(1, 1);
        this.graphics.use(Resources.Tutorial.toSprite());
    }

}