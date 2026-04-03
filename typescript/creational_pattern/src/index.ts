import CustomLogger from "./singleton/CustomLogger";
import RoadLogistics from "./factory_method/RoadLogistics";
import SeaLogistics from "./factory_method/SeaLogistics";
import WindowFactory from "./abstract_factory/WindowFactory";
import MacFactory from "./abstract_factory/MacFactory";
import Application from "./abstract_factory/Application";

// Singleton Example

console.log("Singleton Example of Custom Logging Class:\n");

const logger: CustomLogger = CustomLogger.getInstance();

logger.info("Message is send Successfully");
logger.warn("Something went wrong with the database....");
logger.debug("'name' variable is not defined");

// Factory Method Example

console.log("\nFactory Method Example of Logistics Class:\n");

const truck: RoadLogistics = new RoadLogistics();
const ship: SeaLogistics = new SeaLogistics();

console.log("=== Factory Method of Road Side ===");
truck.planDelivery();

console.log();

console.log("=== Factory Method of Sea Side ===");
ship.planDelivery();

// Abstract Factory Example

console.log("\nAbstract Factory Example of Application Class:\n");

const window: WindowFactory = new WindowFactory();
const mac: MacFactory = new MacFactory();

const app1: Application = new Application(window);
const app2: Application = new Application(mac);

app1.render();
app2.render();