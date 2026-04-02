package state;

public class VendingMachine {
    private State noCoinState;
    private State hasCoinState;
    private State soldState;
    private State soldOutState;

    private State currentState;
    private int itemCount;

    public VendingMachine(int itemCount) {
        this.itemCount = itemCount;

        noCoinState = new NoCoinState(this);
        hasCoinState = new HasCoinState(this);
        soldState = new SoldState(this);
        soldOutState = new SoldOutState(this);

        if (itemCount > 0) {
            currentState = noCoinState;
        } else {
            currentState = soldOutState;
        }
    }

    public void insertCoin() {
        currentState.insertCoin();
    }

    public void ejectCoin() {
        currentState.ejectCoin();
    }

    public void pressButton() {
        currentState.pressButton();
    }

    public void dispense() {
        currentState.dispense();
    }

    public void refill(int count) {
        this.itemCount += count;

        System.out.println("Machine refilled with " + count + " items. Total: " + itemCount);
        
        if (itemCount > 0) {
            setState(noCoinState);
        }
    }

    public void setState(State state) {
        this.currentState = state;
    }

    public void releaseItem() {
        if (itemCount > 0) {
            System.out.println("Item dispensed!");
            itemCount--;
        }
    }

    public State getNoCoinState() { return noCoinState; }
    public State getHasCoinState() { return hasCoinState; }
    public State getSoldState() { return soldState; }
    public State getSoldOutState() { return soldOutState; }
    public int getItemCount() { return itemCount; }
    
}
