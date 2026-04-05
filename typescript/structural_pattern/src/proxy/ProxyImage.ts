import Image from "./Image";
import RealImage from "./RealImage";

class ProxyImage implements Image {
    private realImage: RealImage;
    private fileName: string;

    public constructor(fileName: string) {
        this.fileName = fileName;
        this.realImage = new RealImage(fileName);
    }

    public display(): void {
        if (this.realImage == null) {
            this.realImage = new RealImage(this.fileName);
        }
        this.realImage.display();
    }
}

export default ProxyImage;
