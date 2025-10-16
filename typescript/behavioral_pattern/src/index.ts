import Tea from "./template_method/Tea";
import Coffee from "./template_method/Coffee";
import HotChocolate from "./template_method/HotChocolate";
import Beverage from "./template_method/Beverage";

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

