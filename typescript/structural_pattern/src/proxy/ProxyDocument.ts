import Document from "./Document";
import RealDocument from "./RealDocument";

class ProxyDocument implements Document {
    private document: RealDocument;
    private role: string;

    public constructor(role: string) {
        this.role = role;
        this.document = new RealDocument();
    }

    public displayContent(): void {
        this.document.displayContent();
    }

    public editContent(content: string): void {
        if (this.role === "admin") {
            this.document.editContent(content);
        } else {
            console.log("Access Denied: Only admin can edit.");
        }
    }
}

export default ProxyDocument;