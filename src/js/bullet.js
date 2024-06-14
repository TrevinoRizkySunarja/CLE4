import { Actor, Vector } from "excalibur"
import { Resources } from "./resources"

export class Bullet extends Actor {
    constructor(x, y) {
        super({ width: 5, height: 3 })
        this.pos = new Vector(x + 30, y - 4)
    }

    onInitialize() {
        this.graphics.use(Resources.Bullet.toSprite())
        this.vel = new Vector(300, 0)
        this.scale = new Vector(3, 2)
    }
}