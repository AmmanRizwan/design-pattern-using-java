import { State } from "./State";

import NoCoinState from "./NoCoinState";
import HasCoinState from "./HasCoinState";
import SoldState from "./SoldState";
import SoldOutState from "./SoldOutState";

class VendingMachine {
    private noCoinState: State;
    private hasCoinState: State;
    private soldState: State;
    private soldOutState: State;

    private currentState: State;
    private itemCount: number;

    public constructor(itemCount: number) {
        this.itemCount = itemCount;

        this.noCoinState = new NoCoinState(this);
        this.hasCoinState = new HasCoinState(this);
        this.soldState = new SoldState(this);
        this.soldOutState = new SoldOutState(this);

        if (this.itemCount > 0) {
            this.currentState = this.noCoinState;
        } else {
            this.currentState = this.soldOutState;
        }
    }

    public insertCoin(): void {
        this.currentState.insertCoin();
    }

    public ejectCoin(): void {
        this.currentState.ejectCoin();
    }

    public pressButton(): void {
        this.currentState.pressButton();
    }

    public dispense(): void {
        this.currentState.dispense();
    }

    public refill(count: number): void {
        this.itemCount += count;
        
        console.log(`Machine refilled with ${count} items. Total: ${this.itemCount}`);

        if (this.itemCount > 0) {
            this.setState(this.noCoinState);
        }
    }

    public setState(state: State) {
        this.currentState = state;
    }

    public releaseItem() {
        if (this.itemCount > 0) {
            console.log("Item dispensed!");
            this.itemCount--;
        }
    }

    public getNoCoinState(): State { 
        return this.noCoinState;
    }

    public getHasCoinState(): State {
        return this.hasCoinState;
    }

    public getSoldState(): State {
        return this.soldState;
    }

    public getSoldOutState(): State {
        return this.soldOutState;
    }

    public getItemCount(): number {
        return this.itemCount;
    }
}

export default VendingMachine;