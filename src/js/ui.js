import { Actor, Keys, Vector, Engine, Label, Font, Color } from "excalibur";

export class UI extends Actor {
    ammoLabel;
    hpLabel;
    onInitialize(engine) {
        this.ammoLabel = new Label({
            text: 'Bullets: 6',
            font: new Font({
                family: 'impact',
                size: 24,
                color: Color.Black
            }),
            pos: new Vector(-250, -150)

        });
        this.addChild(this.ammoLabel)
    }
    updateAmmo(ammo) {
        this.ammoLabel.text = `${ammo}`;
    }

}