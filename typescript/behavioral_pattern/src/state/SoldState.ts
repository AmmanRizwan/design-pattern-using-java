import { State } from "./State";
import VendingMachine from "./VendingMachine";

class SoldState implements State {
    private machine: VendingMachine;

    public constructor(machine: VendingMachine) {
        this.machine = machine;
    }

    public insertCoin(): void {
        console.log("Please wait, already processing");
    }

    public ejectCoin(): void {
        console.log("Sorry, already processing");
    }

    public pressButton(): void {
        console.log("Already pressed");
    }

    public dispense(): void {
        this.machine.releaseItem();
        if (this.machine.getItemCount() > 0) {
            this.machine.setState(this.machine.getNoCoinState());
        } else {
            console.log("Out of Stock!");
            this.machine.setState(this.machine.getSoldOutState());
        }
    }
}

export default SoldState;