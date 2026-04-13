import { Command } from "./Command";
import TV from "./TV";

class TVOnCommand implements Command {
    private tv: TV;

    public constructor(tv: TV) {
        this.tv = tv;
    }

    public execute(): void {
        this.tv.on();
    }

    public undo(): void {
        this.tv.off();
    }
}

export default TVOnCommand;