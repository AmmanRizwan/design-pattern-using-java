import PaymentStrategy from "./PaymentStrategy";

class PayPalPayment implements PaymentStrategy {
    private email: string;
    private password: string;

    public constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    public pay(amount: number): void {
        console.log(`Paid ${amount} using PayPal.`);
        console.log(`PayPal Email: ${this.email}`);
        console.log(`Authentication successful`);
    }
}

export default PayPalPayment;