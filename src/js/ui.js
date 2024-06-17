import { Actor, Keys, Vector, Engine, Label, Font, Color } from "excalibur";

export class UI extends Actor {
    ammoLabel;
    hpLabel;
    uiX;
    uiY;
    onInitialize(engine) {
        this.ammoLabel = new Label({
            text: 'ammo 0',
            font: new Font({
                family: 'impact',
                pos: new Vector(0, 0),
                size: 24,
                color: Color.Red
            }),


        });
        engine.add(this.ammoLabel)
    }
    updateScore(ammo) {
        this.ammoLabel.text = `ammo ${ammo}`;
    }
    updatePosition(playerX, playerY) {
        this.uiX = playerX
        this.uiY = playerY
        console.log(this.uiX, this.uiY)
    }
    onPreUpdate(engine) {
        engine.add(this.ammoLabel)
        pos: new Vector(this.uiX, this.uiY)
    }
}