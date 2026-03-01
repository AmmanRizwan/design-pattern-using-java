package composite;

public class File implements FileComponent {
    private String name;
    private int size;

    public File(String name, int size) {
        this.name = name;
        this.size = size;
    }

    @Override
    public void showDetails(int indent) {
        System.out.println(" ".repeat(indent) + "📄File: " + name + " (" + size + " KB");
    }

    @Override
    public int getSize() {
        return size;
    }

    @Override
    public String getName() {
        return name;
    }
}
