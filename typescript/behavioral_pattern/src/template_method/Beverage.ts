abstract class Beverage {
    public _prepareBeverage(): void {
        this.boilWater();
        this.brew();
        this.pourInCup();
        if (this.customerWantsCondiments()) {
            this.addCondiments();
        }
        this.serve();
    }

    private boilWater(): void {
        console.log("Boiling water...");
    }

    private pourInCup(): void {
        console.log("Pouring into cup...");
    }

    private serve(): void {
        console.log("Your beverage is ready!");
    }

    protected abstract brew(): void;
    protected abstract addCondiments(): void;

    protected customerWantsCondiments(): boolean {
        return true;
    }
}

export default Beverage;