package composite;

public class Main {
    public static void main(String[] args) {
        FileComponent file1 = new File("document.txt", 100);
        FileComponent file2 = new File("image.jpg", 500);
        FileComponent file3 = new File("video.mp4", 2000);
        FileComponent file4 = new File("music.mp3", 800);
        FileComponent file5 = new File("code.java", 50);

        Folder rootFolder = new Folder("Root");
        Folder documentFolder = new Folder("Documents");
        Folder mediaFolder = new Folder("Media");
        Folder projectFolder = new Folder("Project");

        documentFolder.add(file1);

        mediaFolder.add(file2);
        mediaFolder.add(file3);
        mediaFolder.add(file4);

        projectFolder.add(file5);

        rootFolder.add(documentFolder);
        rootFolder.add(mediaFolder);
        rootFolder.add(projectFolder);

        System.out.println("=== File System Structure ===");
        rootFolder.showDetails(0);

        System.out.println("\n=== Total Size Calculation ===");
        System.out.println("Root folder size: " + rootFolder.getSize() + " KB");
        System.out.println("Media folder size: " + mediaFolder.getSize());
        System.out.println("\n=== Removing Media Folder ===");
        rootFolder.remove(mediaFolder);
        rootFolder.showDetails(0);
        System.out.println("New root size: " + rootFolder.getSize() + " KB");
    }    
}
