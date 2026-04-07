import Coffee from "./Coffee";
import CoffeeDecorator from "./CoffeeDecorator";

class SugarDecorator extends CoffeeDecorator {
    public constructor(coffee: Coffee) {
        super(coffee);
    }

    public getDescription(): string {
        return this.decoratedCoffee.getDescription() + ", Sugar";
    }

    public getCost(): number {
        return this.decoratedCoffee.getCost() + 0.2;
    }
}