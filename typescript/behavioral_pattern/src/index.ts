import Tea from "./template_method/Tea";
import Coffee from "./template_method/Coffee";
import HotChocolate from "./template_method/HotChocolate";
import Beverage from "./template_method/Beverage";
import Item from "./strategy/Item";
import ShoppingCart from "./strategy/ShoppingCart";
import CreditCardPayment from "./strategy/CreditCardPayment";
import PaymentStrategy from "./strategy/PaymentStrategy";

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