package template_method;

public class HotChocolate extends Beverage {
    @Override
    protected void brew() {
        System.out.println("Mixing chocolate powder...");
    }

    @Override
    public void addCondiments() {
        System.out.println("Adding whipped cream and marshmallows...");
    }

    @Override
    protected boolean customerWantsCondiments() {
        return true;
    }
}
