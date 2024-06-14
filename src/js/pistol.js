import { Actor, Engine, Keys, Vector } from "excalibur";
import { Player } from "./player";
import { Resources } from "./resources";

export class Pistol extends Actor {
    constructor() {
        super();
        this.pos = new Vector(15, -3);
        this.scale = new Vector(0.8, 0.8);
        this.graphics.use(Resources.PistolRight.toSprite())
    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.isHeld(Keys.D)) {
            console.log('s');

        }
        if (engine.input.keyboard.isHeld(Keys.W)) {
            console.log('w');

        }
        if (engine.input.keyboard.isHeld(Keys.D)) {
            console.log('d');
            this.graphics.use(Resources.PistolRight.toSprite())
            this.pos = new Vector(15, -3)

        }
        if (engine.input.keyboard.isHeld(Keys.A)) {
            console.log('a');
            this.graphics.use(Resources.PistolLeft.toSprite())
            this.pos = new Vector(-15, -3)
        }
    }


}