import { State } from "./State";
import VendingMachine from "./VendingMachine";

class NoCoinState implements State {
    private machine: VendingMachine;

    public constructor(machine: VendingMachine) {
        this.machine = machine;
    }

    public insertCoin(): void {
        console.log("Coin inserted");
        this.machine.setState(this.machine.getHasCoinState());
    }

    public ejectCoin(): void {
        console.log("No coin to eject");
    }

    public pressButton(): void {
        console.log("Please insert a coin first");
    }

    public dispense(): void {
        console.log("Please pay first");
    }
}

export default NoCoinState;