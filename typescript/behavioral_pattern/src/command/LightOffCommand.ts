import { Command } from "./Command";
import Light from "./Light";

class LightOffCommand implements Command {
    private light: Light;

    public constructor(light: Light) {
        this.light = light;
    }

    public execute(): void {
        this.light.off();
    }

    public undo(): void {
        this.light.on();
    }
}

export default LightOffCommand;