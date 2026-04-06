import MediaPlayer from "./adapter/MediaPlayer";
import AudioPlayer from "./adapter/AudioPlayer";
import ProxyDocument from "./proxy/ProxyDocument";
import ProxyImage from "./proxy/ProxyImage";
import HomeThreaterFascade from "./fascade/HomeThreaterFascade";
import DVDPlayer from "./fascade/DVDPlayer";
import Projector from "./fascade/Projector";
import SoundSystem from "./fascade/SoundSystem";
import Lights from "./fascade/Lights";
import File from "./composite/File";
import Folder from "./composite/Folder";
import FileComponent from "./composite/FileComponent";


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

// Composite Example

console.log("\nComposite Example of File and Folder Class.\n");

const file1: FileComponent = new File("document.txt", 100);
const file2: FileComponent = new File("image.jpg", 500);
const file3: FileComponent = new File("video.mp4", 2000);
const file4: FileComponent = new File("music.mp3", 800);
const file5: FileComponent = new File("index.ts", 20);
const file6: FileComponent = new File("code.java", 34);

const rootFolder: Folder = new Folder("root");
const documentFolder: Folder = new Folder("document");
const mediaFolder: Folder = new Folder("media");
const projectFolder: Folder = new Folder("project");

documentFolder.add(file1);

mediaFolder.add(file2);
mediaFolder.add(file3);
mediaFolder.add(file4);

projectFolder.add(file5);
projectFolder.add(file6);

rootFolder.add(documentFolder);
rootFolder.add(mediaFolder);
rootFolder.add(projectFolder);

console.log("\n=== File System Structure ===\n");
rootFolder.showDetails(0);

console.log("\n=== Total Size Calculation ===\n");
console.log("Root Folder size: " + rootFolder.getSize() + " KB");
console.log("Media Folder size: " + mediaFolder.getSize() + " KB");
console.log("\n=== Removing Media Folder ===\n");
rootFolder.remove(mediaFolder);
rootFolder.showDetails(0);
console.log("New root size: " + rootFolder.getSize() + " KB");