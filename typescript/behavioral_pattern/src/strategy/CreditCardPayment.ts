import PaymentStrategy from "./PaymentStrategy";

class CreditCardPayment implements PaymentStrategy {
    private cardNumber: string;
    private name: string;

    public constructor(cardNumber: string, name: string) {
        this.cardNumber = cardNumber;
        this.name = name;
    }

    public pay(amount: number): void {
        console.log(`Paid ${amount} using Credit Card`);
        console.log(`Card Number: ${this.maskCardNumber(this.cardNumber)}`);
        console.log(`Card Holder: ${this.name}`);
    }

    public maskCardNumber(cardNumber: string): string {
        return "****-****-****-" + cardNumber.substring(cardNumber.length - 4);
    }
}

export default CreditCardPayment;