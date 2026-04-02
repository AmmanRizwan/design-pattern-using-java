package facade;

public class HomeThreaterFacade {
    private DVDPlayer dvd;
    private Projector projector;
    private SoundSystem sound;
    private Lights lights;

    public HomeThreaterFacade(
        DVDPlayer dvd,
        Projector projector,
        SoundSystem sound,
        Lights lights
    ) {
        this.dvd = dvd;
        this.projector = projector;
        this.sound = sound;
        this.lights = lights;
    }

    public void watchMovie(String movie) {
        System.out.println("Get ready to watch a movie...");
        lights.dim(10);
        projector.on();
        projector.wideScreenMode();
        sound.on();
        sound.setVolume(5);
        dvd.on();
        dvd.play(movie);
    }

    public void endMovie() {
        System.out.println("Shutting down movie threater...");
        dvd.stop();
        dvd.off();
        sound.off();
        projector.off();
        lights.on();
    }
}
