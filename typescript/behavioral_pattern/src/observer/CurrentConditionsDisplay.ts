import { Observer } from "./Observer";

class CurrentConditionsDisplay implements Observer {
    private temperature: number = 0;
    private humidity: number = 0;

    public update(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
    }

    public display(): void {
        console.log("Current Conditions: " + this.temperature + " °C and " + this.humidity + "%");
    }
}

export default CurrentConditionsDisplay;