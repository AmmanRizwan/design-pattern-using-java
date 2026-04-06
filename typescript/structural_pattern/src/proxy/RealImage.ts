import Image from "./Image";

class RealImage implements Image {
    private fileName: string;

    public constructor(fileName: string) {
        this.fileName = fileName;
        // this.loadFromDisk();
    }

    private async loadFromDisk(): Promise<void> {
        setTimeout(() => {
            console.log("Loading Image from disk: " + this.fileName);
        }, 1000);
    }

    public display(): void {
        console.log("Display Image: " + this.fileName);
    }
}

export default RealImage;