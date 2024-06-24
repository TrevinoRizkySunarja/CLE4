import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";

export class TutorialTitle extends Actor {
    constructor() {
        super();
        this.pos = new Vector(415, 130);
        this.scale = new Vector(1, 1);
        this.graphics.use(Resources.TutorialTitle.toSprite());
    }

}