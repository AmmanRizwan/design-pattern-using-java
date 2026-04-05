package strategy;

public class Main {
    public static void main(String[] args) {
        Item item1 = new Item("Laptop", 12);
        Item item2 = new Item("Phone", 11);

        ShoppingCart cart = new ShoppingCart();
        cart.addItem(item1);
        cart.addItem(item2);

        CreditCardPayment payment = new CreditCardPayment("1234-1234-2334", "Amman Rizwan");

        cart.setPaymentStrategy(payment);

        cart.checkout();

    }
}
