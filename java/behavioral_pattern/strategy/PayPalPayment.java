package strategy;

public class PayPalPayment implements PaymentStrategy {
    private String email;
    private String password;

    public PayPalPayment(String email, String password) {
        this.email = email;
        this.password = password;
    }

    @Override
    public void pay(int amount) {
        System.out.println("Paid $" + amount + " using PayPal");
        System.out.println("PayPal Email: " + email);
        System.out.println("Authentication successful");
    }
}
