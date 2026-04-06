class Lights {
    public dim(level: number): void {
        console.log("Lightes dimmed to " + level + "%");
    }

    public on(): void {
        console.log("Lights are ON");
    }
}

export default Lights;