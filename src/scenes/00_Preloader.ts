import Phaser from 'phaser'
import { Assets, Scenes, Tilemaps, Tilesets } from "../types";
import { getBackedEnumValues } from '../utils';

export default class Preloader extends Phaser.Scene
{
    constructor()
    {
        super(Scenes.PRELOADER)
    }

    preload()
    {
        this.load.path = 'assets/'

        // IMAGES
        this.load.image(Assets.SKY, 'https://labs.phaser.io/assets/skies/space3.png')
        this.load.image(Assets.LOGO, 'https://labs.phaser.io/assets/sprites/phaser3-logo.png')
        this.load.image(Assets.PARTICLES_RED, 'https://labs.phaser.io/assets/particles/red.png')

        // TILESETS
        this.loadAllTilesets()
        this.loadAllTilemaps()
    }

    init()
    {
        this.cameras.main.setBackgroundColor(0x111111)
    }

    create()
    {
        setTimeout(() => this.scene.launch(Scenes.HELLO_WORLD), 1000)
    }


    private loadAllTilesets(): void
    {
        getBackedEnumValues(Tilesets).forEach(tileset => {
            this.load.image(tileset, `tilesets/${tileset}.png`)
        })
    }

    private loadAllTilemaps(): void
    {
        getBackedEnumValues(Tilemaps).forEach(tilemap => {
            this.load.tilemapTiledJSON(tilemap, `tilemaps/${tilemap}.json`)
        })
    }
}