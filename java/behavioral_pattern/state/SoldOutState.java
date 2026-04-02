package state;

public class SoldOutState implements State {
    private final VendingMachine machine;

    public SoldOutState(VendingMachine machine) {
        this.machine = machine;
    }

    @Override
    public void insertCoin() {
        System.out.println("Machine is sold out. Coin ejected");
    }

    @Override
    public void ejectCoin() {
        System.out.println("No coin inserted");
    }

    @Override
    public void pressButton() {
        System.out.println("Machine is sold out");
    }

    @Override
    public void dispense() {
        System.out.println("No items to machine");
    }
}
