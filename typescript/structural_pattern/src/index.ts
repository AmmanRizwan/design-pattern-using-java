import MediaPlayer from "./adapter/MediaPlayer";
import AudioPlayer from "./adapter/AudioPlayer";
import ProxyDocument from "./proxy/ProxyDocument";
import ProxyImage from "./proxy/ProxyImage";

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