import { Buttons, Color, DisplayMode, Font, Keys, Label, Scene, Vector } from "excalibur";
import { TutorialImage } from "./tutorialImage";


export class Tutorial extends Scene {
    constructor(engine) {
        super();
        this.engine = engine
        this.backgroundColor = Color.Gray
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
    onPreUpdate(engine) {
        if (engine.mygamepad !== undefined ? engine.mygamepad.isButtonPressed(Buttons.Face3) : engine.input.keyboard.isHeld(Keys.Enter)) {
            this.engine.startGame()
        }
    }
}