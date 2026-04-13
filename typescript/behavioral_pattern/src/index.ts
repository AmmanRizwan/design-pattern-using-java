import Tea from "./template_method/Tea";
import Coffee from "./template_method/Coffee";
import HotChocolate from "./template_method/HotChocolate";
import Beverage from "./template_method/Beverage";
import Item from "./strategy/Item";
import ShoppingCart from "./strategy/ShoppingCart";
import CreditCardPayment from "./strategy/CreditCardPayment";
import PaymentStrategy from "./strategy/PaymentStrategy";
import VendingMachine from "./state/VendingMachine";
import WeatherStation from "./observer/WeatherStation";
import CurrentConditionsDisplay from "./observer/CurrentConditionsDisplay";
import StaticsDisplay from "./observer/StaticsDisplay";
import ForcastDisplay from "./observer/ForcastDisplay";
import Light from "./command/Light";
import Fan from "./command/Fan";
import TV from "./command/TV";
import LightOffCommand from "./command/LightOffCommand";
import LightOnCommand from "./command/LightOnCommand";
import FanOffCommand from "./command/FanOffCommand";
import FanOnCommand from "./command/FanOnCommand";
import TVOffCommand from "./command/TVOffCommand";
import TVOnCommand from "./command/TVOnCommand";
import MacroCommand from "./command/MacroCommand";
import RemoteControl from "./command/RemoteControl";


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

// Observer Example

console.log("\nExample of Observer using the Weather Station class.\n");

const station = new WeatherStation();

const currentDisplay = new CurrentConditionsDisplay();
const staticDisplay = new StaticsDisplay();
const forcastDisplay = new ForcastDisplay();

station.registerObserver(currentDisplay);
station.registerObserver(staticDisplay);
station.registerObserver(forcastDisplay);

console.log("=== Weather Update 1 ===");
station.setMeasurements(25.2, 65.0, 1013.0);

console.log("=== Weather Update 2 ===");
station.setMeasurements(27.0, 70.0, 1012.0);

console.log("=== Weather Update 3 ===");
station.setMeasurements(23.0, 60.0, 1014.0);

// Command Example

console.log("\nExample of Command using the Remote Control Class.\n");

const livingRoomLight = new Light("Living Room");
const bedRoomLight = new Light("Bedroom");
const ceilingFan = new Fan("Ceiling");
const tv = new TV("Samsung");

const livingRoomLightOn = new LightOffCommand(livingRoomLight);
const livingRoomLightOff = new LightOffCommand(livingRoomLight);

const bedRoomLightOn = new LightOnCommand(bedRoomLight);
const bedRoomLightOff = new LightOffCommand(bedRoomLight);

const FanOff = new FanOffCommand(ceilingFan);
const FanOn = new FanOnCommand(ceilingFan);

const tvOn = new TVOnCommand(tv);
const tvOff = new TVOffCommand(tv);

const remote = new RemoteControl();

remote.setCommand(0, livingRoomLightOn, livingRoomLightOff);
remote.setCommand(1, bedRoomLightOn, bedRoomLightOff);
remote.setCommand(2, FanOn, FanOff);
remote.setCommand(3, tvOn, tvOff);

console.log("=== Testing Remote Control ===");
remote.display();

console.log("\n--- Pressing Buttons ---\n");
remote.onButtonPressed(0);
remote.offButtonPressed(0);
remote.onButtonPressed(1);
remote.onButtonPressed(2);
remote.onButtonPressed(3);

console.log("\n--- Undo Last Command ---");
remote.undoButtonPressed();

console.log("\n--- Macro Command (Party Mode) ---");
const partyOn = [];
partyOn.push(livingRoomLightOn);
partyOn.push(bedRoomLightOn);
partyOn.push(tvOn);

const partyOff = [];
partyOff.push(livingRoomLightOff);
partyOff.push(bedRoomLightOff);
partyOff.push(tvOff);

const partyOnMacro = new MacroCommand(partyOn);
const partyOffMacro = new MacroCommand(partyOff);

remote.setCommand(4, partyOnMacro, partyOffMacro);
remote.onButtonPressed(4);

console.log("--- Turn Off Party Mode ---");
remote.offButtonPressed(4);
