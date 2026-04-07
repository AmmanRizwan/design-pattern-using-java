import Coffee from "./Coffee";

class CoffeeDecorator implements Coffee {
    protected decoratedCoffee: Coffee;

    public constructor(coffee: Coffee) {
        this.decoratedCoffee = coffee;
    }

    public getDescription(): string {
        return this.decoratedCoffee.getDescription();
    }

    public getCost(): number {
        return this.decoratedCoffee.getCost();
    }
}

export default CoffeeDecorator;
