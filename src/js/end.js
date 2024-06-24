import { Buttons, Color, DisplayMode, Font, Keys, Label, Scene, Vector } from 'excalibur';
import { Player } from './player';
import { UI } from './ui';
import { StartButton } from './startButton';
import { ZombieImage } from './zombieImage';
import { StartBackground } from './startbackground';
import { DeadPlayerImage } from './deadPlayer';
import { EndBackground } from './endbackground';
import { EndTitle } from './endTitle';

export class End extends Scene {
    constructor() {
        super();
        this.backgroundColor = Color.Gray
        this.zombieImage = new ZombieImage(380);
        this.deadPlayer = new DeadPlayerImage(410)

        this.add(this.zombieImage);
        this.add(this.deadPlayer);
        this.title = new EndTitle()
        this.add(this.title)

    }

}