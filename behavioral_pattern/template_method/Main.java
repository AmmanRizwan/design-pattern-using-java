package template_method;

public class Main {
    public static void main(String[] args) {
        System.out.println("=== Making Tea ===");
        Beverage tea = new Tea();
        tea.prepareBeverage();

        System.out.println("\n=== Making Coffee ===");
        Beverage coffee = new Coffee();
        coffee.prepareBeverage();

        System.out.println("\n=== Making Hot Chocolate ===");
        Beverage hotChocolate = new HotChocolate();
        hotChocolate.prepareBeverage();

        System.out.println("\n=== Coffee With Hook (No Condiments) ===");
        Beverage coffeeNoCondiments = new Coffee() {
            @Override
            protected boolean customerWantsCondiments() {
                return false;
            }
        };

        coffeeNoCondiments.prepareBeverage();
    }
}