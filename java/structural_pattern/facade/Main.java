package facade;

public class Main {
    public static void main(String[] args) {
        // Without Facade
        System.out.println("=== WITHOUT FACADE ===");
        DVDPlayer dvd = new DVDPlayer();
        Projector projector = new Projector();
        SoundSystem sound = new SoundSystem();
        Lights lights = new Lights();

        lights.dim(10);
        projector.on();
        projector.wideScreenMode();
        sound.on();
        sound.setVolume(5);
        dvd.on();
        dvd.play("Inception");

        System.out.println();

        // With Facade
        System.out.println("=== WITH FACADE ===");
        HomeThreaterFacade homeThreater = new HomeThreaterFacade(dvd, projector, sound, lights);
        homeThreater.watchMovie("Inception");
        System.out.println();
        homeThreater.endMovie();
    }
}