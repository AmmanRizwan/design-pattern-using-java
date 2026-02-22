package builder;

public class Main {
    public static void main(String[] args) {
        House house = new House
                            .builder()
                            .foundation("Concrete Foundation")
                            .roof("Tile Roof")
                            .walls("Glass Walls")
                            .build();

        System.out.println(house);
    }
}
