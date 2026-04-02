package proxy;

public class ProxyDocument implements Document {
    private RealDocument document;
    private String userRole;

    public ProxyDocument(String userRole) {
        this.userRole = userRole;
        this.document = new RealDocument();
    }

    @Override
    public void displayContent() {
        document.displayContent();
    }

    @Override
    public void editContent(String newContent) {
        if (userRole.equals("admin")) {
            document.editContent(newContent);
        } else {
            System.out.println("Access Denied: Only admin can edit ");
        }
    }
}
