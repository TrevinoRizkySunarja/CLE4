import { Color, DisplayMode, Font, Label, Scene, Vector } from "excalibur";
import { TutorialImage } from "./tutorialImage";


export class Tutorial extends Scene {
    constructor() {
        super();
        this.tutorial = new TutorialImage()
        this.add(this.tutorial)
    }
    onActivate() {
        this.title = new Label({
            text: 'Tutorial',
            font: new Font({
                family: 'impact',
                size: 48,
                color: Color.Red
            }),
            pos: new Vector(165, 100)
        });
        this.add(this.title);
        console.log('aaa')
    }
}