package strategy;

import java.util.ArrayList;
import java.util.List;

public class ShoppingCart {
    private List<Item> items = new ArrayList<>();
    private PaymentStrategy paymentStrategy;

    public void addItem(Item item) {
        items.add(item);
    }

    public void setPaymentStrategy(PaymentStrategy paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    public int calculateTotal() {
        int total = 0;
        for (Item item : items) {
            total += item.getPrice();
        }

        return total;
    }

    public void checkout() {
        int amount = calculateTotal();
        if (paymentStrategy == null) {
            System.out.println("Please select a payment method");
        }
        paymentStrategy.pay(amount);
    }
}
