import { State } from "./State";
import VendingMachine from "./VendingMachine";

class HasCoinState implements State {
    private machine: VendingMachine;

    public constructor(machine: VendingMachine) {
        this.machine = machine;
    }

    public insertCoin(): void {
        console.log("Coin already inserted");
    }

    public ejectCoin(): void {
        console.log("Coin ejected");
        this.machine.setState(this.machine.getNoCoinState());
    }

    public pressButton(): void {
        console.log("Button pressed...");
        this.machine.setState(this.machine.getSoldState());
    }

    public dispense(): void {
        console.log("Press button first");
    }
}

export default HasCoinState;