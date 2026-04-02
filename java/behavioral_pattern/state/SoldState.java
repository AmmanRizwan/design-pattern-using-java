package state;

public class SoldState implements State {
    private VendingMachine machine;

    public SoldState(VendingMachine machine) {
        this.machine = machine;
    }

    @Override
    public void insertCoin() {
        System.out.println("Please wait, already processing");
    }

    @Override
    public void ejectCoin() {
        System.out.println("Sorry, already processing");
    }

    @Override
    public void pressButton() {
        System.out.println("Already pressed");
    }

    @Override
    public void dispense() {
        machine.releaseItem();
        if (machine.getItemCount() > 0) {
            machine.setState(machine.getNoCoinState());
        } else {
            System.out.println("Out of stock!");
            machine.setState(machine.getSoldOutState());
        }
    }
}
