import Coffee from "./Coffee";

class SimpleCoffee implements Coffee {
    public getDescription(): string {
        return "Simple Coffee";
    }

    public getCost(): number {
        return 2.0;
    }
}

export default SimpleCoffee;