import Document from "./Document";

class RealDocument implements Document {
    private content: string = "Confidental Document Content";

    public displayContent(): void {
        console.log("Content:" + this.content);
    }

    public editContent(content: string): void {
        this.content = content;
        console.log("Document edited successfuly!");
    }
}

export default RealDocument;