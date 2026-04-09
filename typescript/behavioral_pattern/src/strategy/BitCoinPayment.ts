import PaymentStrategy from "./PaymentStrategy";

class BitCoinPayment implements PaymentStrategy {
    private walletAddress: string;

    public constructor(walletAddress: string) {
        this.walletAddress = walletAddress;
    }

    public pay(amount: number): void {
        console.log(`Paid ${amount} using BitCoin.`);
        console.log(`Wallet Address: ${this.walletAddress}`);
        console.log(`Transaction confirmed on blockchain`);
    }
}

export default BitCoinPayment;