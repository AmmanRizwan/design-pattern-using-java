import Item from "./Item"
import PaymentStrategy from "./PaymentStrategy";

class ShoppingCart {
    private items: Item[] = [];
    private paymentStrategy: PaymentStrategy | undefined;

    public addItem(item: Item): void {
        this.items.push(item);
    }

    public setPaymentStrategy(paymentStrategy: PaymentStrategy): void {
        this.paymentStrategy = paymentStrategy;
    }

    public calculateTotal(): number {
        let total = 0;
        for (const item of this.items) {
            total += item.getPrice();
        }

        return total;
    }

    public checkOut(): void {
        const amount = this.calculateTotal();
        if (this.paymentStrategy === undefined) {
            console.log("Please select a payment method");
            return;
        }
        this.paymentStrategy.pay(amount);
    }
}

export default ShoppingCart;