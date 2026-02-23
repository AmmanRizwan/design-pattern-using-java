package prototype;

public class Main {
    public static void main(String[] args) {
        Circle original = new Circle("Red");
        Circle copy = (Circle) original.clone();

        copy.setColor("Blue");
    }
}