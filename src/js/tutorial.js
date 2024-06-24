import { Buttons, Color, DisplayMode, Font, Keys, Label, Scene, Vector } from "excalibur";
import { TutorialImage } from "./tutorialImage";
import { TutorialTitle } from "./tutorialTitle";


export class Tutorial extends Scene {
    constructor(engine) {
        super();
        this.engine = engine
        this.backgroundColor = Color.Gray
        this.tutorial = new TutorialImage()
        this.add(this.tutorial)
        this.title = new TutorialTitle()
        this.add(this.title)
    }
    onPreUpdate(engine) {
        if (engine.mygamepad !== undefined ? engine.mygamepad.isButtonPressed(Buttons.Face3) : engine.input.keyboard.isHeld(Keys.Enter)) {
            this.engine.startGame()
        }
    }
}