import DVDPlayer from "./DVDPlayer";
import Projector from "./Projector";
import SoundSystem from "./SoundSystem";
import Lights from "./Lights";

class HomeThreaterFascade {
    private dvd: DVDPlayer;
    private projector: Projector;
    private sound: SoundSystem;
    private lights: Lights;

    public constructor(
        dvd: DVDPlayer,
        projector: Projector,
        sound: SoundSystem,
        lights: Lights
    ) {
        this.dvd = dvd;
        this.projector = projector;
        this.sound = sound;
        this.lights = lights;
    }

    public watchMovie(movie: string): void {
        console.log("Get ready to watch a movie....");
        this.lights.dim(10);
        this.projector.on();
        this.projector.wideScreenMode();
        this.sound.on();
        this.sound.setVolume(5);
        this.dvd.on();
        this.dvd.play(movie);
    }

    public endMovie(): void {
        console.log("Shutting down movie threater...");
        this.dvd.stop();
        this.dvd.off();
        this.sound.off();
        this.projector.off();
        this.lights.on();
    }
}

export default HomeThreaterFascade;