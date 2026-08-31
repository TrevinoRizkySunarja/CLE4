# CLE4

Top-down zombie survival game built with JavaScript, Vite and Excalibur. The project contains multiple scenes, wave-based enemy spawning, player movement, shooting, reloading, health UI, audio, sprite assets and a production build in `docs/`.

## Live Demo

Play the game here: [CLE4 live demo](https://trevinorizkysunarja.github.io/CLE4/)

## Features

- Start screen, tutorial flow and game-over screen
- Multiple playable scenes, including Zuiderziekenhuis and Groene Hilledijk
- Wave-based enemy system with normal, fast and heavy zombies
- Keyboard and gamepad input support
- Player health, ammo, reload and shooting mechanics
- Pistol and shotgun weapon logic
- Sprite-based characters, weapons, maps and UI assets
- Sound effects and looping theme music
- Vite build output configured for GitHub Pages through `docs/`

## Tech Stack

- JavaScript modules
- Excalibur game engine
- Vite
- HTML and CSS

## Controls

| Action | Keyboard | Gamepad |
| --- | --- | --- |
| Move | `W`, `A`, `S`, `D` | Left stick |
| Shoot | `Space` | Face button 1 |
| Reload | `R` | Face button 2 |

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## Project Structure

```text
src/css/       Game styling
src/js/        Game classes, scenes, player, enemies, UI and resources
public/        Source images and audio used by the game
docs/          Built version for GitHub Pages
index.html     App entry page
```

## Portfolio Notes

This repository shows JavaScript class structure, scene management, asset loading, game loops, collision handling and interactive gameplay using Excalibur.