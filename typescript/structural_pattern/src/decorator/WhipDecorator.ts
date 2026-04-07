import Coffee from "./Coffee";
import CoffeeDecorator from "./CoffeeDecorator";

class WhipDecorator extends CoffeeDecorator {
    public constructor(coffee: Coffee) {
        super(coffee);
    }

    public getDescription(): string {
        return this.decoratedCoffee.getDescription() + ", Whip";
    }

    public getCost(): number {
        return this.decoratedCoffee.getCost() + 0.7;
    }
}

export default WhipDecorator;