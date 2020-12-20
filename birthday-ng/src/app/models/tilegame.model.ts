export class TileGame {

    size: number;
    tiles: MapTile[];
    score: number;
    state: string;

}

export class MapTile {

    state: string;
    name: string;

    constructor(name: string) {
        this.name = name;
        this.state = 'hidden';
    }

}