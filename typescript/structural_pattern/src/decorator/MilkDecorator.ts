import Coffee from "./Coffee";
import CoffeeDecorator from "./CoffeeDecorator";

class MilkDecorator extends CoffeeDecorator {
    public constructor(coffee: Coffee) {
        super(coffee);
    }

    public getDescription(): string {
        return this.decoratedCoffee.getDescription() + ", Milk";
    }

    public getCost(): number {
        return this.decoratedCoffee.getCost() + 0.5;
    }
}

export default MilkDecorator;