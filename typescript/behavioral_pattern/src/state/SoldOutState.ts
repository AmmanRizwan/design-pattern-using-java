import { State } from "./State";
import VendingMachine from "./VendingMachine";

class SoldOutState implements State {
    private _machine: VendingMachine;
    
    public constructor(machine: VendingMachine) {
        this._machine = machine;
    }

    public insertCoin(): void {
        console.log("Machine is sold out. Coin ejected");
    }

    public ejectCoin(): void {
        console.log("No coin inserted");
    }

    public pressButton(): void {
        console.log("Machine is sold out");
    }

    public dispense(): void {
        console.log("No items to machine");
    }
}

export default SoldOutState;