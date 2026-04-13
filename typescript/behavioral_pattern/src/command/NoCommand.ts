import { Command } from "./Command";

class NoCommand implements Command {
    public execute(): void {
        
    }

    public undo(): void {
        
    }
}

export default NoCommand;