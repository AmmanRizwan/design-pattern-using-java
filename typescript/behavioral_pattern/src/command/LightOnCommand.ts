import { Command } from "./Command";
import Light from "./Light";

class LightOnCommand implements Command {
    private light: Light;

    public constructor(light: Light) {
        this.light = light;
    }

    public execute(): void {
        this.light.on();
    }

    public undo(): void {
        this.light.off();
    }
}

export default LightOnCommand;