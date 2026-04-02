package strategy;

public class BitCoinPayment implements PaymentStrategy {
    private String walletAddress;

    public BitCoinPayment(String walletAddress) {
        this.walletAddress = walletAddress;
    }

    @Override
    public void pay(int amount) {
        System.out.println("Paid $" + amount + " using BitCoin");
        System.out.println("Wallet Address: " + walletAddress);
        System.out.println("Transaction confirmed on blockchain");
    }
}
