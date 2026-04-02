class CustomLogger {
    private static INSTANCE: CustomLogger = new CustomLogger();

    private CustomLogger() {};

    public static getInstance(): CustomLogger {
        return CustomLogger.INSTANCE;
    }

    public info(message: string): void {
        console.log(`INFO: ${message}`);
    }

    public warn(message: string): void {
        console.log(`WARN: ${message}`);
    }

    public debug(message: string): void {
        console.log(`DEBUG: ${message}`);
    }

    public error(message: string): void {
        console.log(`ERR: ${message}`);
    }
}

export default CustomLogger;