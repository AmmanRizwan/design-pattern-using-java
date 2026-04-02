package proxy;

public class RealDocument implements Document {
    private String content = "Confidental Document Content";

    @Override
    public void displayContent() {
        System.out.println("Content: " + content);
    }

    @Override
    public void editContent(String newContent) {
        this.content = newContent;
        System.out.println("Document edited successfully!");
    }
}
