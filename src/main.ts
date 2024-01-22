import Phaser from 'phaser'

import Preloader from './scenes/00_Preloader'
import HelloWorld from './scenes/01_HelloWorld'

const width = 1000
const height = width * 0.75

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'app',
	width,
	height,
	scale: {
		autoCenter: Phaser.Scale.CENTER_BOTH,
		mode: Phaser.Scale.FIT,
	},
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
		},
	},
	fps: {
		target: 60,
	},
	scene: [
		Preloader,
		HelloWorld,
	],
}

export default new Phaser.Game(config)
