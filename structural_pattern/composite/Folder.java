package composite;

import java.util.ArrayList;
import java.util.List;

public class Folder implements FileComponent {
    private String name;
    private List<FileComponent> children = new ArrayList<>();

    public Folder(String name) {
        this.name = name;
    }

    public void add(FileComponent component) {
        children.add(component);
    }

    public void remove(FileComponent component) {
        children.remove(component);
    }

    @Override
    public void showDetails(int indent) {
        System.out.println(" ".repeat(indent) + "📁 Folder: " + name);
        for (FileComponent child : children) {
            child.showDetails(indent + 1);
        }
    }

    @Override
    public int getSize() {
        int totalSize = 0;
        for (FileComponent child : children) {
            totalSize += child.getSize();
        }
    
        return totalSize;
    }

    @Override
    public String getName() {
        return name;
    }

    public List<FileComponent> getChildren() {
        return children;
    }
}
