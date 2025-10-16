import Beverage from "./Beverage";

class HotChocolate extends Beverage {
    protected brew(): void {
        console.log("Mixing chocolate powder...");
    }

    protected addCondiments(): void {
        console.log("Adding whipped cream and marshmallows...");
    }

    protected customerWantsCondiments(): boolean {
        return true;
    }
}

export default HotChocolate;