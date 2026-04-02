package factory_method;

public class Main {
    public static void main(String[] args) {
        RoadLogistics truck = new RoadLogistics();
        SeaLogistics ship = new SeaLogistics();

        System.out.println("=== Factory Method of Road Side ===");
        truck.planDelivery();

        System.out.println();

        System.out.println("=== Factory Method of Sea Side ===");
        ship.planDelivery();


    }
}