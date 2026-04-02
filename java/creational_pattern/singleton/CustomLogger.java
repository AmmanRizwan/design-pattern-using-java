package singleton;

public class CustomLogger {
    private static final CustomLogger INSTANCE = new CustomLogger();

    private CustomLogger() {}

    public static CustomLogger getInstance() {
        return CustomLogger.INSTANCE;
    }

    public void info(String message) {
        System.out.println("INFO : " + message);
    }

    public void debug(String message) {
        System.out.println("DEBUG : " + message);
    }

    public void warn(String message) {
        System.out.println("WARN : " + message);
    }

    public void err(String message) {
        System.out.println("ERR : " + message);
    }
}