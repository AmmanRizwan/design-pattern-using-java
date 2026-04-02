import CustomLogger from "./singleton/CustomLogger";

// Singleton Example

console.log("Singleton Example of Custom Logging Class\n");

const logger: CustomLogger = CustomLogger.getInstance();

logger.info("Message is send Successfully");
logger.warn("Something went wrong with the database....");
logger.debug("'name' variable is not defined");