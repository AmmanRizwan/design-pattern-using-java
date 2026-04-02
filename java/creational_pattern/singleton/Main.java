package singleton;

public class Main {
    public static void main(String[] args) {
        CustomLogger customLogger = CustomLogger.getInstance();

        customLogger.info("This is an information for the console.");
    
        customLogger.debug("Debuging the custom singleton pattern");

        customLogger.warn("Something went wrong! Cannot cannot find the env file");

        customLogger.err("Error message: Invalid information");
    }
}