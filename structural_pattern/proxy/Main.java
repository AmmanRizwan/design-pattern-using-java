package proxy;

public class Main {
    public static void main(String[] args) {
        System.out.println("=== Using Proxy Pattern ===");
        System.out.println();

        Image image1 = new ProxyImage("photo1.jpg");
        Image image2 = new ProxyImage("photo2.jpg");

        System.out.println("--- First display call");
        image1.display();
        System.out.println("\n--- Second display call (cached) ---");
        image1.display();

        System.out.println("\n--- Display different image ---");
        image2.display();

        System.out.println("\n=== Protection Proxy Example ===\n");
        Document doc = new ProxyDocument("admin");
        doc.displayContent();
        doc.editContent("New Content");

        System.out.println();

        Document restritDocument = new ProxyDocument("guest");

        restritDocument.displayContent();
        restritDocument.editContent("Trying to edit");
    }
}