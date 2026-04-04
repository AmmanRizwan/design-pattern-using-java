import MediaPlayer from "./MediaPlayer";
import MediaAdapter from "./MediaAdapter";

class AudioPlayer implements MediaPlayer {
    private adapter: MediaAdapter | null = null;

    public play(audioType: string, fileName: string): void {
        if (audioType.toLowerCase() === "mp3") {
            console.log("Playing MP3 file: " + fileName);;
        } else if (audioType.toLowerCase() === "vlc" || audioType.toLowerCase() === "mp4") {
            this.adapter = new MediaAdapter(audioType);
            this.adapter.play(audioType, fileName);
        }
        else {
            console.log("Invalid media type: " + audioType + " not supported.");
        }
    }
}

export default AudioPlayer;