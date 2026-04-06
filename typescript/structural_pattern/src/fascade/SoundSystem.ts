class SoundSystem {
    public on(): void {
        console.log("Sound System is ON");
    }

    public setVolume(level: number): void {
        console.log("Sound System volume set to " + level);
    }

    public off(): void {
        console.log("Sound System is OFF");
    }
}

export default SoundSystem;