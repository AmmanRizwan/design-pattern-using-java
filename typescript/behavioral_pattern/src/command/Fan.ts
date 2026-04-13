class Fan {
    private location: string;

    public constructor(location: string) {
        this.location = location;
    }

    public on(): void {
        console.log(this.location, " fan is ON");
    }

    public off(): void {
        console.log(this.location, " fan is OFF");
    }
}