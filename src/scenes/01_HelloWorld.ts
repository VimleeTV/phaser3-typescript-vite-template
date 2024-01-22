import Phaser from 'phaser'
import { Assets, Scenes } from '../types'

export default class HelloWorldScene extends Phaser.Scene
{
	constructor()
	{
		super(Scenes.HELLO_WORLD)
	}

	create() {
		this.add.image(0, 0, Assets.SKY)
			.setOrigin(0, 0)
			.setDisplaySize(this.scale.width, this.scale.height)

		this.physics.add.image(400, 100, Assets.LOGO)
			.setVelocity(100, 200)
			.setBounce(1, 1)
			.setCollideWorldBounds(true)
	}
}
