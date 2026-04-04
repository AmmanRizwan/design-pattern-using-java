import AdvancedMediaPlayer from "./AdvancedMediaPlayer";
import MediaPlayer from "./MediaPlayer";
import VlcPlayer from "./VlcPlayer";
import Mp4Player from "./Mp4Player";

class MediaAdapter implements MediaPlayer {
    private advancedMediaPlayer: AdvancedMediaPlayer;

    public constructor(audioType: string) {
        if (audioType.toLowerCase() === "vlc") {
            this.advancedMediaPlayer = new VlcPlayer();
        } else if (audioType.toLowerCase() === "mp4") {
            this.advancedMediaPlayer = new Mp4Player();
        } else {
            this.advancedMediaPlayer = new VlcPlayer();
        }
    }

    public play(audioType: string, fileName: string): void {
        if (audioType.toLowerCase() === "vlc") {
            this.advancedMediaPlayer.playVlc(fileName);
        }
        else if (audioType.toLowerCase() === "mp4") {
            this.advancedMediaPlayer.playMp4(fileName);
        }
    }
}

export default MediaAdapter;