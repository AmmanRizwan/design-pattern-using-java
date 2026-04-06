class DVDPlayer {
    public on(): void {
        console.log("DVD Player is ON");
    }

    public play(movie: string): void {
        console.log("Player movie: " + movie);
    }

    public stop(): void {
        console.log("Stopping DVD");
    }

    public off(): void {
        console.log("DVD Player is OFF");
    }
}

export default DVDPlayer;