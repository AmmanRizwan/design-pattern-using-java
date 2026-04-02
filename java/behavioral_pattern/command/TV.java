package command;

public class TV {
    private String brand;
    
    public TV(String brand) {
        this.brand = brand;
    }

    public void on() {
        System.out.println(brand + " tv is ON");
    }

    public void off() {
        System.out.println(brand + " tv is OFF");
    }
}
