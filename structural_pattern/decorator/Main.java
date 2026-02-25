package decorator;

public class Main {
    public static void main(String[] args) {
        Coffee simpleCoffee = new SimpleCoffee();
        System.out.println(simpleCoffee.getDescription() + " $" +  simpleCoffee.getCost());

        Coffee milkCoffee = new MilkDecorator(new SimpleCoffee());
        System.out.println(milkCoffee.getDescription() + " $" + milkCoffee.getCost());

        Coffee milkSugerCoffee = new SugarDecorator(new MilkDecorator(new SimpleCoffee()));
        System.out.println(milkSugerCoffee.getDescription() + " $" + milkSugerCoffee.getCost());

        Coffee fancyCoffee = new WhipDecorator(new SugarDecorator(new MilkDecorator(new SimpleCoffee())));
        System.out.println(fancyCoffee.getDescription() + " $" + fancyCoffee.getCost());

        Coffee espresso = new MilkDecorator(new Espresso());
        System.out.println(espresso.getDescription() + " $" + espresso.getCost());
    }
}