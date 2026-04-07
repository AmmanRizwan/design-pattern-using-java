import Coffee from "./Coffee";

class Espresso implements Coffee {
    public getDescription(): string {
        return "Espresso";    
    }

    public getCost(): number {
        return 3.0;
    }
}

export default Espresso;