import AdvancedMediaPlayer from "./AdvancedMediaPlayer";

class VlcPlayer implements AdvancedMediaPlayer {
    public playVlc(fileName: string): void {
        console.log("Playing VLC file: " + fileName);
    }

    public playMp4(fileName: string): void {
        // do nothing
    }
}

export default VlcPlayer;