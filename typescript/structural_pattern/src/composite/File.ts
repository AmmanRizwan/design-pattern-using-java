import FileComponent from "./FileComponent";

class File implements FileComponent {
    private name: string;
    private size: number;

    public constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
    }

    public showDetails(indent: number): void {
        console.log("   ".repeat(indent) + "📄File: " + this.name + " (" + this.size + " KB)");
    }

    public getSize(): number {
        return this.size;
    }

    public getName(): string {
        return this.name;
    }
}

export default File;