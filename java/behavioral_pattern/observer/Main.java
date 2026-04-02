package observer;

public class Main {
    public static void main(String[] args) {
        WeatherStation weatherStation = new WeatherStation();

        CurrentConditionsDisplay currentDisplay = new CurrentConditionsDisplay();
        StaticsDisplay staticsDisplay = new StaticsDisplay();
        ForcastDisplay forcastDisplay = new ForcastDisplay();

        weatherStation.registerObserver(currentDisplay);
        weatherStation.registerObserver(staticsDisplay);
        weatherStation.registerObserver(forcastDisplay);

        System.out.println("=== Weather Update 1 ===");
        weatherStation.setMeasurements(25.2f, 65.0f, 1013.0f);

        System.out.println("=== Weather Update 2 ===");
        weatherStation.setMeasurements(27.0f, 70.0f, 1012.0f);

        System.out.println("=== Removing Statistics Display ===");
        weatherStation.removeObserver(staticsDisplay);

        System.out.println("=== Weather Update 3 ===");
        weatherStation.setMeasurements(23.0f, 60.0f, 1014.0f);
    }
}