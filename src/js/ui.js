import { Actor, Keys, Vector, Engine, Label, Font, Color } from "excalibur";

export class UI extends Actor {
    ammoLabel;
    killsLabel;

    onInitialize(engine) {
        this.ammoLabel = new Label({
            text: 'Bullets: 10',
            font: new Font({
                family: 'impact',
                size: 24,
                color: Color.Red
            }),
            pos: new Vector(-250, -150)

        });
        this.addChild(this.ammoLabel)

        this.killsLabel = new Label({
            text: 'Kills: 0',
            font: new Font({
                family: 'impact',
                size: 24,
                color: Color.Red
            }),
            pos: new Vector(-250, -120)

        });
        this.addChild(this.killsLabel)
    }
    updateAmmo(ammo) {
        this.ammoLabel.text = `${ammo}`;
    }



}