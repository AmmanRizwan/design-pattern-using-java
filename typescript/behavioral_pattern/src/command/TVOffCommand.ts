import { Command } from "./Command";
import TV from "./TV";

class TVOffCommand implements Command {
    private tv: TV;

    public constructor(tv: TV) {
        this.tv = tv;
    }

    public execute(): void {
        this.tv.off();
    }

    public undo(): void {
        this.tv.on();
    }
}

export default TVOffCommand;