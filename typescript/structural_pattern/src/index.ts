import MediaPlayer from "./adapter/MediaPlayer";
import AudioPlayer from "./adapter/AudioPlayer";

// Adapter Example

console.log("Adapter Example using the AudioPlayer Class:\n");

const audioPlayer: MediaPlayer = new AudioPlayer();

audioPlayer.play("mp3", "song.mp3");
audioPlayer.play("mp4", "video.mp4");
audioPlayer.play("vlc", "movie.vlc");
