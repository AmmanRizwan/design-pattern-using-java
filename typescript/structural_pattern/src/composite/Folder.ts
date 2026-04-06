import FileComponent from "./FileComponent";

class Folder implements FileComponent {
    private name: string;
    private children: FileComponent[] = [];

    public constructor(name: string) {
        this.name = name;
    }

    public add(component: FileComponent): void {
        this.children.push(component);
    }

    public remove(component: FileComponent): void {
        this.children.map((v) => v !== component);
    }

    public showDetails(indent: number): void {
        console.log(" ".repeat(indent) + "Folder: " + this.name);
        for (let i = 0; i < this.children.length; i++) {
            this.children[i].showDetails(indent + 1);
        }
    }

    public getSize(): number {
        let total = 0;
        for (let i = 0; i < this.children.length; i++) {
            total += this.children[i].getSize();
        }

        return total;
    }

    public getName(): string {
        return this.name;
    }

    public getChildren(): FileComponent[] {
        return this.children;
    }
}

export default Folder;