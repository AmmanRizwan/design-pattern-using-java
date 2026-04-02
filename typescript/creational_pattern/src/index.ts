import CustomLogger from "./singleton/CustomLogger";
import RoadLogistics from "./factory_method/RoadLogistics";
import SeaLogistics from "./factory_method/SeaLogistics";

// Singleton Example

console.log("Singleton Example of Custom Logging Class\n");

const logger: CustomLogger = CustomLogger.getInstance();

logger.info("Message is send Successfully");
logger.warn("Something went wrong with the database....");
logger.debug("'name' variable is not defined");

const truck: RoadLogistics = new RoadLogistics();
const ship: SeaLogistics = new SeaLogistics();

console.log("=== Factory Method of Road Side ===");
truck.planDelivery();

console.log();

console.log("=== Factory Method of Sea Side ===");
ship.planDelivery();