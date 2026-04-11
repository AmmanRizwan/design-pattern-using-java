import { State } from "./State";
import VendingMachine from "./VendingMachine";

class SoldOutState implements State {
    private _machine: VendingMachine;
    
    public constructor(machine: VendingMachine) {
        this._machine = machine;
    }

    public insertCoin(): void {
        
    }

    public ejectCoin(): void {
        
    }

    public pressButton(): void {
        
    }

    public dispense(): void {
        
    }
}

export default SoldOutState;