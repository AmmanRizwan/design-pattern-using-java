package factory_method;

public class Ship implements Transport {
    @Override
    public void deliver() {
        System.out.println("Delivering on the sea side.");
    }
}
