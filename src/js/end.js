import { Color, DisplayMode, Font, Label, Scene, Vector } from 'excalibur';
import { Player } from './player';
import { UI } from './ui';
import { StartButton } from './startButton';
import { ZombieImage } from './zombieImage';
import { StartBackground } from './startbackground';
import { DeadPlayerImage } from './deadPlayer';
import { EndBackground } from './endbackground';

export class End extends Scene {
    constructor() {
        super();
        this.backgroundColor = Color.Gray
        this.zombieImage = new ZombieImage(315);
        this.deadPlayer = new DeadPlayerImage(350)

        this.add(this.zombieImage);
        this.add(this.deadPlayer);

    }
    onInitialize() {
        this.title = new Label({
            text: 'Tutorial',
            font: new Font({
                family: 'impact',
                size: 48,
                color: Color.Red
            }),
            pos: new Vector(165, 100)
        });
    }
}
