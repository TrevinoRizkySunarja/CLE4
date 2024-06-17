import { Actor, Keys, Vector, Engine, Label, Font, Color } from "excalibur";

export class UI extends Actor {
    ammoLabel;
    hpLabel;
    onInitialize(engine) {
        this.ammoLabel = new Label({
            text: 'ammo 0',
            font: new Font({
                family: 'impact',
                size: 24,
                color: Color.Red
            }),
            pos: new Vector(100, 100)

        });
        this.addChild(this.ammoLabel)
    }
    updateScore(ammo) {
        this.ammoLabel.text = `ammo ${ammo}`;
    }

}