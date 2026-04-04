import AdvancedMediaPlayer from "./AdvancedMediaPlayer";

class Mp4Player implements AdvancedMediaPlayer {
    public playVlc(fileName: string): void {
        // Do nothing
    }

    public playMp4(fileName: string): void {
        console.log("Playing MP4 file: " + fileName);
    }
}

export default Mp4Player;