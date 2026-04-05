import House from "./House";

class Builder {
    public foundation: string = "";
    public walls: string = "";
    public roof: string = "";

    constructor() {
    }

    public setFoundation(foundation: string): Builder {
        this.foundation = foundation;
        return this;
    }

    public setWalls(walls: string): Builder {
        this.walls = walls;
        return this;
    }

    public setRoof(roof: string): Builder {
        this.roof = roof;
        return this;
    }

    public build(): House {
        return new House(this);
    }
}

export default Builder;