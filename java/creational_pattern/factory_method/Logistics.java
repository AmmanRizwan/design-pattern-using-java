package factory_method;

public abstract class Logistics {
    abstract Transport createTransport();

    public void planDelivery() {
        Transport t = createTransport();
        t.deliver();
    }
}
