import { Command } from "./Command";
import Fan from "./Fan";

class FanOffCommand implements Command {
    private fan: Fan;

    public constructor(fan: Fan) {
        this.fan = fan;
    }

    public execute(): void {
        this.fan.off();
    }

    public undo(): void {
        this.fan.on();
    }
}

export default FanOffCommand;