import '../css/style.css';
import { Engine, DisplayMode, Vector, Buttons } from 'excalibur';
import { ResourceLoader, Resources } from './resources.js';
import { GroeneHilledijk } from './scenes/groenehilledijk.js';
import { Start } from './start.js';
import { Tutorial } from './tutorial.js';
import { Player } from './player.js';
import { GameScene } from './scenes/gameScene.js';
import { getWaveData } from './waves.js';
import { End } from './end.js';

const player = new Player(new Vector(0, 0));

export class Game extends Engine {
   player;
   gameScenes;
   currentSceneId;

   constructor(engine) {
      super({
         // 1440x900 of 1280x800 of 800x500
         width: 800,
         height: 500,
         maxFps: 60,
         displayMode: DisplayMode.FitScreen,
         suppressPlayButton: true
      });
      this.gameScenes = gameScenes;
      this.currentSceneId = 0;
      this.start(ResourceLoader).then(() => this.startIntro());
   }

   onInitialize() {
      this.gameScenes.forEach((gameScene) => {
         this.addScene(gameScene.name, gameScene.scene);
      });
      this.addScene('end', new End());

      // Play and loop the theme song
      Resources.ThemeSong.loop = true;
      Resources.ThemeSong.play();
   }

   startIntro() {
      this.input.gamepads.enabled = true;
      this.input.gamepads.on('connect', (connectevent) => {
         console.log("gamepad detected");
         this.mygamepad = connectevent.gamepad;
      });
      this.addScene('start', new Start());
      this.goToScene('start');
   }

   startTutorial(engine) {
      this.addScene('tutorial', new Tutorial());
      this.goToScene('tutorial');
      setTimeout(() => {
         this.startGame();
      }, 20000);
   }

   startGame() {
      this.goToScene(this.gameScenes[this.currentSceneId].name);
   }

   goToNextScene() {
      console.log('goToNextScene');
      this.currentSceneId++;
      if (this.gameScenes[this.currentSceneId]) {
         this.goToScene(this.gameScenes[this.currentSceneId].name);
      }
   }
}

const gameScenes = [];

class SceneData {
   name;
   scene;
   constructor(name, map) {
      this.name = name;
      this.scene = new GameScene(map, getWaveData(name), player);
   }
}

gameScenes.push(new SceneData('zuiderziekenhuis', Resources.ZuiderZiekenhuis));
gameScenes.push(new SceneData('groenehilledijk', Resources.GroeneHilledijk));

new Game();
