package state;

public class Main {
    public static void main(String[] args) {
        VendingMachine machine = new VendingMachine(3);

        System.out.println("=== Vending Machine Demo ===\n");

        System.out.println("--- Scenario 1: Normal Purchase ---");
        machine.insertCoin();
        machine.pressButton();
        machine.dispense();

        System.out.println("\n--- Scenario 2: No Coin Inserted ---");
        machine.pressButton();
        machine.dispense();

        System.out.println("\n--- Scenario 3: Eject Coin ---");
        machine.insertCoin();
        machine.ejectCoin();
        machine.pressButton();

        System.out.println("\n--- Scenario 4: Multiple Purchases ---");
        machine.insertCoin();
        machine.pressButton();
        machine.dispense();

        machine.insertCoin();
        machine.pressButton();
        machine.dispense();

        System.out.println("\n--- Scenario 5: Out of Stock ---");
        machine.insertCoin();
        machine.pressButton();
        machine.dispense();

        System.out.println("\n--- Scenario 6: Refill Machine ---");
        machine.refill(3);
        machine.insertCoin();
        machine.pressButton();
        machine.dispense();
    }
}