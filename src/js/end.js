import { Buttons, Color, DisplayMode, Font, Keys, Label, Scene, Vector } from 'excalibur';
import { Player } from './player';
import { UI } from './ui';
import { StartButton } from './startButton';
import { ZombieImage } from './zombieImage';
import { StartBackground } from './startbackground';
import { DeadPlayerImage } from './deadPlayer';
import { EndBackground } from './endbackground';
import { EndTitle } from './endTitle';
import { RestartButton } from './restart';

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
        this.restart = new RestartButton()
        this.add(this.restart)
    }
    onPreUpdate(engine) {
        if (engine.mygamepad !== undefined ? engine.mygamepad.isButtonPressed(Buttons.Face3) : engine.input.keyboard.isHeld(Keys.P)) {
            window.location.reload()
        }
    }

}