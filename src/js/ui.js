import { Actor, Keys, Vector, Engine, Label, Font, Color } from 'excalibur';

export class UI extends Actor {
	ammoLabel;
	timeLabel;

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
		this.addChild(this.ammoLabel);

		this.timeLabel = new Label({
			text: '100',
			font: new Font({
				family: 'impact',
				size: 24,
				color: Color.Red
			}),
			pos: new Vector(-70, -150)
		});
		this.addChild(this.timeLabel);


		this.hpLabel = new Label({
			text: 'hp: 5',
			font: new Font({
				family: 'impact',
				size: 24,
				color: Color.Red
			}),
			pos: new Vector(-70, -150)
		});
		this.addChild(this.timeLabel);

	}


	updateAmmo(ammo) {
		this.ammoLabel.text = `${ammo}`;
	}
	updateTimer(time) {
		this.timeLabel.text = time;

	}

}