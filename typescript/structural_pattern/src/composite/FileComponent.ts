export default interface FileComponent {
    showDetails(indent: number): void;
    getSize(): number;
    getName(): string;
}