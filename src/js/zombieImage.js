import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";

export class ZombieImage extends Actor {
    constructor(xPos) {
        super();
        this.pos = new Vector(xPos, 390);
        this.scale = new Vector(3, 3);
        this.graphics.use(Resources.ZombieNormal.toSprite());
    }

}