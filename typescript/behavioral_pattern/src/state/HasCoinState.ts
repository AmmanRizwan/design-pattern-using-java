import { State } from "./State";
import VendingMachine from "./VendingMachine";

class HasCoinState implements State {
    private machine: VendingMachine;

    public constructor(machine: VendingMachine) {
        this.machine = machine;
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

export default HasCoinState;