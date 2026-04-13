class TV {
    private location: string;

    public constructor(location: string) {
        this.location = location;
    }

    public on(): void {
        console.log(this.location, " tv is ON");
    }

    public off(): void {
        console.log(this.location, " tv is OFF");
    }
}

export default TV;