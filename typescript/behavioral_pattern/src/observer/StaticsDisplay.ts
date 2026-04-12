import { Observer } from "./Observer";

class StaticDisplay implements Observer {
    private temperatureHistory: number[] = [];

    public update(temperature: number, humidity: number, pressure: number): void {
        this.temperatureHistory.push(temperature);
        this.display();
    }

    public display(): void {
        let sum = 0;
        for (const temp of this.temperatureHistory) {
            sum += temp;
        }
        const avg = sum / this.temperatureHistory.length;
        console.log("Avg/Max/Min temperature: " + avg + "/" + this.getMax() + "/" + this.getMin());
    }

    private getMax(): number {
        let max = Number.MIN_VALUE;
        for (const temp of this.temperatureHistory) {
            if (temp > max) max = temp;
        }

        return max;
    }

    private getMin(): number {
        let min = Number.MAX_VALUE;
        for (const temp of this.temperatureHistory) {
            if (temp < min) min = temp;
        }

        return min;
    }

}

export default StaticDisplay;