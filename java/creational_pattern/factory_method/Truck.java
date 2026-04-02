package factory_method;

public class Truck implements Transport {
    @Override
    public void deliver() {
        System.out.println("Delivering on the road side.");
    }
}
