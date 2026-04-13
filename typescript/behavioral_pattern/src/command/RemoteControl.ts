import { Command } from "./Command";
import NoCommand from "./NoCommand";

class RemoteControl {
    private onCommands: Command[];
    private offCommands: Command[];
    private undoCommand: Command = new NoCommand();
    private static _SIZE: number = 5;

    public constructor() {
        this.onCommands = [];
        this.offCommands = [];

        const noCommand: Command = new NoCommand;
        for (let i = 0; i < RemoteControl._SIZE; i++) {
            this.onCommands[i] = noCommand;
            this.offCommands[i] = noCommand;
        }
    }

    public setCommand(slot: number, noCommand: Command, offCommand: Command): void {
        this.onCommands[slot] = noCommand;
        this.offCommands[slot] = offCommand;
    }

    public onButtonPressed(slot: number) {
        this.onCommands[slot].execute();
        this.undoCommand = this.onCommands[slot];
    }

    public offButtonPressed(slot: number) {
        this.offCommands[slot].execute();
        this.undoCommand = this.offCommands[slot];
    }

    public undoButtonPressed(): void {
        this.undoCommand.undo();
    }

    public display(): void {
        console.log("------- REMOTE CONTROL -------");
        for (let i = 0; i < this.onCommands.length; i++) {
            console.log(`[slot ${i} ] = ${this.onCommands[i]}`);
        }
    }
}