import { Command } from "./Command";

class MacroCommand implements Command {
    private commands: Command[];

    public constructor(commands: Command[]) {
        this.commands = commands;
    }

    public execute(): void {
        for (const command of this.commands) {
            command.execute();
        }
    }

    public undo(): void {
        for (let i = this.commands.length - 1; i >= 0; i--) {
            this.commands[i]!.undo();
        }
    }
}

export default MacroCommand;