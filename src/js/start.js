import { Color, DisplayMode, Font, Label, Scene, Vector } from "excalibur";
import { Player } from "./player";
import { UI } from "./ui";
import { StartButton } from "./startButton";
import { ZombieImage } from "./zombieImage";
import { StartBackground } from "./startbackground";

export class Start extends Scene {
    constructor() {
        super();
        this.startBut = new StartButton();
        this.startbackground = new StartBackground();

        this.zombieImage = new ZombieImage(215);
        this.zombieImage2 = new ZombieImage(620);

        this.add(this.startbackground);
        this.add(this.startBut);
        this.add(this.zombieImage);
        this.add(this.zombieImage2);
    }

    onActivate() {
        this.title = new Label({
            text: 'Zombies Groene Hilledijk',
            font: new Font({
                family: 'impact',
                size: 48,
                color: Color.Red
            }),
            pos: new Vector(165, 100)
        });
        this.add(this.title);
        console.log('aaa');
    }
}
