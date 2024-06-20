import {Actor, Keys, Vector, Engine, Label, Font, Color} from 'excalibur';

export class UI extends Actor {
	//De labels aanmaken
	ammoLabel;
	timeLabel;
	hpLabel;

	onInitialize(engine) {
		//De ammo
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

		//De HP
		this.hpLabel = new Label({
			text: 'hp: 3',
			font: new Font({
				family: 'impact',
				size: 24,
				color: Color.Red
			}),
			pos: new Vector(-70, -120)
		});
		this.addChild(this.hpLabel);

		//De tijd
		// this.timeLabel = new Label({
		//     text: '100',
		//     font: new Font({
		//         family: 'impact',
		//         size: 24,
		//         color: Color.Red
		//     }),
		//     pos: new Vector(-70, -150)
		// });
		// this.addChild(this.timeLabel);
	}

	//Inhoud updaten
	updateAmmo(ammo) {
		this.ammoLabel.text = `${ammo}`;
	}
	updateHp(hp) {
		this.hpLabel.text = `hp: ${hp}`;
	}
	// updateTimer(time) {
	//     this.timeLabel.text = `${time}`;
	// }
}
