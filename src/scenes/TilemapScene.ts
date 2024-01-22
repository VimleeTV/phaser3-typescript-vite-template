import Phaser from 'phaser'
import { Direction, Scenes } from '../types';

export default class TilemapScene extends Phaser.Scene
{
    public map: Phaser.Tilemaps.Tilemap

    constructor(baseScene: Scenes|string|Phaser.Types.Scenes.SettingsConfig|undefined)
    {
        super(baseScene)
    }

    setupMap(): void
    {
        // setup map stuff
    }

    // placeholder: createActors
    // createJoshua(x = 0, y = 0): void
    // {
    //     this.add.actor(Actors.JOSHUA, x, y)
    // }

    enterActor(actor: Actor, direction: Direction, tile: Phaser.Tilemaps.Tile, duration = 1500): Promise<void>
    {
        actor.setPosition(tile.pixelX, tile.pixelY)

        return new Promise(resolve => {
            const tween: Phaser.Types.Tweens.TweenBuilderConfig = {
                targets: actor,
                duration,
                onStart: () => actor.playAnim({key: ActorAnims.WALK, repeat: -1}, direction),
                onUpdate: () => actor.playAnim({key: ActorAnims.WALK, repeat: -1}, direction),
                onComplete: () => resolve(),
            }

            switch (direction)
            {
                case Direction.UP:
                    tween.y = '-=100'
                    break
                case Direction.DOWN:
                    tween.y = '+=100'
                    break
                case Direction.LEFT:
                    tween.x = '-=100'
                    break
                case Direction.RIGHT:
                    tween.x = '+=100'
                    break
            }

            actor.scene.tweens.add(tween)
        })
    }
}