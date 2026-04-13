import { Command } from "./Command";
import Fan from "./Fan";

class FanOnCommand implements Command {
    private fan: Fan;

    public constructor(fan: Fan) {
        this.fan = fan;
    }

    public execute(): void {
        this.fan.on();
    }

    public undo(): void {
        this.fan.off();
    }
}

export default FanOnCommand;