package abstract_factory;

public class Main {
    public static void main(String[] args) {
        Application window = new Application(new WindowFactory());

        window.render();
        System.out.println();

        Application mac = new Application(new MacFactory());

        mac.render();
        System.out.println();
    }
}