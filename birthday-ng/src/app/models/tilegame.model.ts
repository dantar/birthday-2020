export class TileGame {

    size: number;
    tiles: MapTile[];
    score: number;

}

export class MapTile {

    state: string;
    name: string;

    constructor(name: string) {
        this.name = name;
        this.state = 'hidden';
    }

}