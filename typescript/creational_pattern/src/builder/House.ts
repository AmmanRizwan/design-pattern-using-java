import Builder from "./Builder";

class House {
    private _foundation: string;
    private _walls: string;
    private _roof: string;

    public constructor(builder: Builder) {
        this._foundation = builder.foundation;
        this._walls = builder.walls;
        this._roof = builder.roof;
    }

    public getCart(): void {
        console.log(`Car: foundation:${this._foundation}, walls:${this._walls}, roof:${this._roof}`);
    }
}

export default House;