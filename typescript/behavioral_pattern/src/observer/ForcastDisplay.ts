import { Observer } from "./Observer";

class ForcastDisplay implements Observer {
    private currentPressure: number = 1013.0;
    private lastPressure: number = 0;

    public update(temperature: number, humidity: number, pressure: number) {
        this.lastPressure = this.currentPressure;
        this.currentPressure = pressure;
        this.display();
    }

    public display(): void {
        console.log("Forcast:");
        if (this.currentPressure > this.lastPressure) {
            console.log("Improving weather on the way!");
        } else if (this.currentPressure === this.lastPressure) {
            console.log("More of the same");
        } else {
            console.log("Watch out for cooler, rainy weather.");
        }
    }
}

export default ForcastDisplay;