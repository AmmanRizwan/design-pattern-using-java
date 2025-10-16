import Beverage from "./Beverage";

class Tea extends Beverage {
    protected brew(): void {
        console.log("Steeping the tea bag...");
    }

    protected addCondiments(): void {
        console.log("Adding Lemon...");
    }
}

export default Tea;