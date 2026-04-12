import { Observer } from "./Observer";
import { Subject } from "./Subject";

class WeatherStation implements Subject {
    private observers: Observer[];
    private temperature: number = 0;
    private humidity: number = 0;
    private pressure: number = 0;

    public constructor() {
        this.observers = [];
    }

    public registerObserver(observer: Observer): void {
        this.observers.push(observer);
        console.log("Observer registered: " + observer);
    }

    public removeObserver(observer: Observer): void {
        this.observers.filter((vaue) => vaue !== observer);
        console.log("Observer removed: " + observer);
    }

    public notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    }

    public setMeasurements(temperature: number, humidity: number, pressure: number) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }

    public measurementsChanged() {
        this.notifyObservers();
    }
}

export default WeatherStation;