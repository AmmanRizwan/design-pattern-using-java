import MediaPlayer from "./adapter/MediaPlayer";
import AudioPlayer from "./adapter/AudioPlayer";
import ProxyDocument from "./proxy/ProxyDocument";
import ProxyImage from "./proxy/ProxyImage";
import HomeThreaterFascade from "./fascade/HomeThreaterFascade";
import DVDPlayer from "./fascade/DVDPlayer";
import Projector from "./fascade/Projector";
import SoundSystem from "./fascade/SoundSystem";
import Lights from "./fascade/Lights";

// Adapter Example

console.log("Adapter Example using the AudioPlayer Class:\n");

const audioPlayer: MediaPlayer = new AudioPlayer();

audioPlayer.play("mp3", "song.mp3");
audioPlayer.play("mp4", "video.mp4");
audioPlayer.play("vlc", "movie.vlc");

// Proxy Example

console.log("\nProxy Example of ProxyDocument and ProxyImage Class.\n");

const admin: ProxyDocument = new ProxyDocument("admin");
const user: ProxyDocument = new ProxyDocument("user");
const image: ProxyImage = new ProxyImage("picture.webp");

admin.displayContent();
admin.editContent("This is a new content written by the new user.");

user.displayContent();
user.editContent("This is a user content written for a testing purpose.");

console.log("\nImage loading from the disk take time at once...\n");

image.display();

// Fascade Example

console.log("\nFascade Example of HomeThreaterFascade Class.\n");

console.log("=== WITHOUT FASCADE ===\n");

const dvd: DVDPlayer = new DVDPlayer();
const projector: Projector = new Projector();
const sound: SoundSystem = new SoundSystem();
const lights: Lights = new Lights();

lights.dim(10);
projector.on();
projector.wideScreenMode();
sound.on();
sound.setVolume(5);
dvd.on();
dvd.play("Inception");

console.log();
console.log("\n=== WITH FASCADE ===\n");
const threater: HomeThreaterFascade = new HomeThreaterFascade(dvd, projector, sound, lights);

threater.watchMovie("The White Night");
console.log();
threater.endMovie();


