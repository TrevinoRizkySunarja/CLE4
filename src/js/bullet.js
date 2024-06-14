import { Actor, Keys, Vector } from "excalibur"
import { Resources } from "./resources"

export class Bullet extends Actor {
    constructor(x, y, bulletSpeedX, bulletSpeedY, minusX, minusY) {
        super({ width: 5, height: 3 })
        this.pos = new Vector(x, y)
        this.vel = new Vector(bulletSpeedX, bulletSpeedY)
    }

    onInitialize() {
        this.graphics.use(Resources.Bullet.toSprite())
        this.scale = new Vector(1, 1)
    }
}