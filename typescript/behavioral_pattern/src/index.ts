import Tea from "./template_method/Tea";
import Coffee from "./template_method/Coffee";
import HotChocolate from "./template_method/HotChocolate";
import Beverage from "./template_method/Beverage";
import Item from "./strategy/Item";
import ShoppingCart from "./strategy/ShoppingCart";
import CreditCardPayment from "./strategy/CreditCardPayment";
import PaymentStrategy from "./strategy/PaymentStrategy";
import VendingMachine from "./state/VendingMachine";

// Template Method Example

console.log("Example of Template Method using the Tea, Coffee, HotChocolate class.\n");
console.log("=== Making Tea ===\n");
const tea: Beverage = new Tea();
tea._prepareBeverage();

console.log("\n=== Making Coffee ===\n");
const coffee: Beverage = new Coffee();
coffee._prepareBeverage();

console.log("\n=== Making Hot Chocolate ===\n");
const hotChocolate: Beverage = new HotChocolate();
hotChocolate._prepareBeverage();

// Strategy Example

console.log("\nExample of Strategy using the Shopping Cart Class.\n");

const item1: Item = new Item("Laptop", 23);
const item2: Item = new Item("Phone", 12);

const cart: ShoppingCart = new ShoppingCart();
cart.addItem(item1);
cart.addItem(item2);

const payment: PaymentStrategy = new CreditCardPayment("1234-1234-1234-1234", "Amman Rizwan");

console.log("Total Amount: " + cart.calculateTotal());

cart.setPaymentStrategy(payment);
cart.checkOut();

// State Example

console.log("\nExample of State using the Vending Machine class.\n");

const machine: VendingMachine = new VendingMachine(3);

console.log("\n=== Vending Machine Demo ===\n");
console.log("--- Scenario 1: Normal Purchase ---");
machine.insertCoin();
machine.pressButton();
machine.dispense();

console.log("\n--- Scenario 2: No Coin inserted ---");
machine.pressButton();
machine.dispense();

console.log("\n--- Scenario 3: Eject Coin ---");
machine.insertCoin();
machine.ejectCoin();
machine.pressButton();

console.log("\n--- Scenario 4: Multiple Purchases ---");
machine.insertCoin();
machine.pressButton();
machine.dispense();

machine.insertCoin();
machine.pressButton();
machine.dispense();

console.log("\n--- Scenario 5: Out of Stock ---");
machine.insertCoin();
machine.pressButton();
machine.dispense();

console.log("\n--- Scenario 6: Refill Machine ---");
machine.refill(3);
machine.insertCoin();
machine.pressButton();
machine.dispense();